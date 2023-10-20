/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (data) => {
    setCart([...cart, data]);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount: cart.length, handleAddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
