import { useState, useEffect } from "react";
import { getProducts } from "../../firebase";
import ItemList from "./ItemList";
import { ClipLoader } from "react-spinners";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(prodList => {
      setProducts(prodList);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="black" size={60} />
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <h2>Catálogo de Productos</h2>
      <ItemList products={products} />
    </div>
  );
}
