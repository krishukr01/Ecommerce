import "./index.css";

import ReactDOM from "react-dom/client";
import axios from "axios";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartContextProvider } from "./context/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import { Cart } from "../src/pages/Cart/Cart";
import { Login } from "./pages/Login/Login";
import { Layout } from "./Layout/Layout";
import { NotFound } from "../src/pages/Not Found/NotFound";
import { cartLoader } from "./helpers/cartLoader";

axios.defaults.baseURL = "http://localhost:8080";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
        loader: cartLoader,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </QueryClientProvider>,
);
