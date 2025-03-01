import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/product/${product.id}`}>Ver Detalle</Link>
    </div>
  );
}

Item.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
