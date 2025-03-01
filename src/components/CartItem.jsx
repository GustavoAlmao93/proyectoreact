import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import { ClipLoader } from "react-spinners";
import "./CartItem.css";

export default function CartItem({ product }) {
  const { removeItem, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="cart-item loader-container">
        <ClipLoader color="#3498db" size={30} />
      </div>
    );
  }

  return (
    <div className="cart-item">
      <img className="imgdetailcart" src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>Precio: ${product.price}</p>
        <p>Cantidad: {product.quantity}</p>
        <div className="quantity-controls">
          <button onClick={() => decrementQuantity(product.id)}>-</button>
          <button onClick={() => incrementQuantity(product.id)}>+</button>
        </div>
        <button onClick={() => removeItem(product.id)}>Eliminar</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
