import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../firebase'; // Actualiza aquí
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';


export default function Gaming() {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    if (!catId) {
      getProducts().then((response) => setProducts(response));
    } else {
      getProductsByCategory(catId).then((response) => setProducts(response));
    }
  }, [catId]);

  return (
    <>
      <h1 className='titulosl'>Vista de producto {catId}</h1>
      <main className="item-list">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}

