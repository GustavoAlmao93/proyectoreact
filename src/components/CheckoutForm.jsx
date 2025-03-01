import { useState, useContext, useEffect } from "react";
import { sendOrder } from "../../firebase";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Checkout.css";

export default function CheckoutForm() {
  const { cart, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", address: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      buyer,
      items: cart,
      total: cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0),
      date: new Date().toISOString(),
    };
    const id = await sendOrder(order);
    setOrderId(id);
    clearCart();
    setLoading(false);
  };

  useEffect(() => {
    if (orderId) {
      Swal.fire({
        title: "¡Compra exitosa!",
        text: `Tu número de orden es: ${orderId}`,
        icon: "success",
        confirmButtonText: "Volver al inicio",
      }).then(() => {
        navigate("/");
      });
    }
  }, [orderId, navigate]);

  if (loading) return <p>Enviando orden...</p>;

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout</h2>
      <input
        className="inputslocos"
        type="text"
        name="name"
        placeholder="Nombre completo"
        onChange={handleChange}
        required
      />
      <input
        className="inputslocos"
        type="tel"
        name="tel"
        placeholder="Teléfono"
        onChange={handleChange}
        required
      />
      <input
        className="inputslocos"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <button type="submit">Confirmar Compra</button>
    </form>
  );
}
