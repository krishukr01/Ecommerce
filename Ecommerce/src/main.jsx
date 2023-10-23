import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./context/CartContext.jsx";

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </CartProvider>
  </BrowserRouter>,
);
