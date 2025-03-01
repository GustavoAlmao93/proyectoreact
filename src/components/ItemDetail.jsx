// src/components/ItemDetail.jsx
import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import { useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ItemDetail.css";

export default function ItemDetail({ product, added }) {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    const item = {
      id: product.id,
      price: product.price,
      title: product.title,
      image: product.image, 
    };
    addItem(item, quantity);
    Swal.fire({
      icon: "success",
      title: "Se agregó el producto al carrito",
    });
  };

  useEffect(() => {
    if (added) {
      Swal.fire({
        title: "Producto agregado!",
        text: "El producto ha sido agregado al carrito.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  }, [added]);

  return (
    <div className="item-detail">
      <img
        className="image-container"
        src={product.image}
        alt={product.title}
      />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        {added ? (
          <div className="added-message">
            <p>Producto agregado al carrito</p>
            <Link to="/cart" className="go-to-cart-button">
              Ir al Carrito
            </Link>
          </div>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}

ItemDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  added: PropTypes.bool.isRequired,
};
