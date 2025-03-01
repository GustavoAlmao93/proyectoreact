// src/context/CartProvider.jsx
import { useState } from 'react';
import { CartContext } from './CartContext';
import PropTypes from 'prop-types';

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Ahora addItem acepta "quantity" para agregar la cantidad seleccionada
  const addItem = (item, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((i) => i.id === item.id);
      if (existingIndex !== -1) {
        return prevCart.map((prod, index) => {
          if (index === existingIndex) {
            return {
              ...prod,
              quantity: prod.quantity + quantity,
            };
          }
          return prod;
        });
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((prod) => {
        if (prod.id === id) {
          return { ...prod, quantity: prod.quantity + 1 };
        }
        return prod;
      })
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((prod) => {
          if (prod.id === id) {
            const newQuantity = prod.quantity - 1;
            return newQuantity > 0 ? { ...prod, quantity: newQuantity } : null;
          }
          return prod;
        })
        .filter(Boolean)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clearCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
