import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../firebase';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import './Home.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (!catId) {
      getProducts().then((response) => {
        setProducts(response);
        setLoading(false);
      });
    } else {
      getProductsByCategory(catId).then((response) => {
        setProducts(response);
        setLoading(false);
      });
    }
  }, [catId]);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#black" size={100} />
      </div>
    );
  }

  return (
    <>
      <h1 className='titulosl'>Vista de producto {catId}</h1>
      <main className="item-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}
