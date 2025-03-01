import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import carritoImg from "../assets/multimedia/carrito.png";
import "./CartWidget.css";

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  return (
    <Link to="/cart" className="cart-widget">
      <img src={carritoImg} alt="Carrito" className="img-carrito" />
      <span>{totalItems}</span>
    </Link>
  );
}
