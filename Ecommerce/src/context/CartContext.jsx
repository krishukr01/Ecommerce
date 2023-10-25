/* eslint-disable react/prop-types */
import axios from "axios";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const getInitialCartCount = async () => {
      const res = await axios.get("/Cart");
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
      value={{
        handleIncCartCount,
        handleDecCartCount,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
