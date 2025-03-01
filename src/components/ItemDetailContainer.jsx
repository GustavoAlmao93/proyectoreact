import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../firebase";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../context/CartContext";
import { ClipLoader } from "react-spinners";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    getSingleProduct(id).then((prod) => setProduct(prod));
  }, [id]);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  if (!product)
    return (
      <div className="loader-container">
        <ClipLoader color="black" size={60} />
      </div>
    );

  return <ItemDetail product={product} onAdd={handleAdd} added={added} />;
}
