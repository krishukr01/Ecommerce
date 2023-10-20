/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect } from "react";
import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const getInitialCartCount = async () => {
      const res = await axios.get("http://localhost:8080/Cart");
      setCartCount(res.data.length);
    };

    getInitialCartCount();
  }, []);

  const handleIncCartCount = () => {
    setCartCount((cartCount) => cartCount + 1);
  };
  const handleDecCartCount = () => {
    setCartCount((cartCount) => cartCount - 1);
  };
  return (
    <CartContext.Provider
      value={{ handleIncCartCount, handleDecCartCount, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
