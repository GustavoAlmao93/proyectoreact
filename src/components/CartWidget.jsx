import carrito from '../assets/multimedia/carrito.png'; 

import './CartWidget.css';

const CardWidget = () => {
  return (
    <button className="card-widget">
      <img src={carrito} alt="Carrito de compras" className="img-carrito" /> 4
    </button>
  );
};

export default CardWidget;