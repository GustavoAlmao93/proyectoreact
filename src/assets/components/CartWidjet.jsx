import carrito from '../multimedia/carrito.png'; // Ajusta la ruta si es necesario.
import './CartWidjet.css';

const CardWidget = () => {
  return (
    <button className="card-widget">
      <img src={carrito} alt="Carrito de compras" className="img-carrito" /> 4
    </button>
  );
};

export default CardWidget;