
import { useState, useEffect } from 'react';
import { getCategory, getProducts } from '../../asyncMock';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import './Home.css';


export default function Home() {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    if (!catId) {
      getProducts().then((response) => setProducts(response));
    } else {
      getCategory(catId).then((response) => setProducts(response));
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
