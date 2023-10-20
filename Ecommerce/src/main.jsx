import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ThemeProvider from "./context/ThemeContext.jsx";
import CartProvider from "./context/CartContext.jsx";

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
