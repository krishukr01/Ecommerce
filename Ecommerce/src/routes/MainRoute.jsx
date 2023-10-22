import { Routes, Route } from "react-router-dom";

import Cart from "../pages/Cart/Cart";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import RequireAuth from "../hoc/RequireAuth";
import NotFound from "../pages/Not Found/NotFound";

const MainRoute = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
};

export default MainRoute;
