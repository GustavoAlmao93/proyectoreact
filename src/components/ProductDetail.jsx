import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getProduct(id));
  }, [id]);

  return (
    <>
    <div className='detallesproducto'>
      <h1>Vista de Detalle de producto {id}</h1>
      <h3>ID: {product?.id}</h3>
      <h3>Nombre: {product?.title}</h3>
      <img className='imagendetail' src={product?.image} alt="" />
      <h3>Descripcion: {product?.description}</h3>
      <p>Categoria: {product?.category}</p>
      <p>Precio ${product?.price}</p>

      <button>Agregar Al Carrito</button>
      </div>
    </>
  );
}