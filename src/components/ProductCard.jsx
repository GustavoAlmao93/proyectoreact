/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
    return (
      <article className='article1'>


        <h5>{product.title} - {product.id}</h5>
        <img src={product.image} alt={product.title} style={{ height:120, width:180,display: 'block',
    margin: '0 auto',  }} />
        <p>${product.price}</p>

        <button className='botonproductcard'>

<Link to={`/product/${product.id}`}>Mas detalles</Link>
  </button>
      </article>
    );
  }
  