import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { ClipLoader } from "react-spinners";
import "./Cart.css";

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#3498db" size={60} />
      </div>
    );
  }

  if (cart.length === 0)
    return (
      <div className="cart-empty">
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {cart.map((prod) => (
        <CartItem key={prod.id} product={prod} />
      ))}
      <h3 className="totaldeuda">Total: ${total}</h3>
      <div className="totalcompra">
        <button onClick={clearCart}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar Compra</Link>
      </div>
    </div>
  );
}
