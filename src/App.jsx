import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductsCategories from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartView from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import { CartProvider } from "./context/CartProvider";
import Office from "./components/Office";
import Gaming from "./components/Gaming";
import NotFound from "./components/NotFound";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:catId" element={<Home />} />
          <Route path="/category/:catId" element={<Office />} />
          <Route path="/category/:catId" element={<Gaming />} />
          <Route path="/categories" element={<ProductsCategories />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
