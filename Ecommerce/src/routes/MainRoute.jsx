import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import RequireAuth from "../hoc/RequireAuth";
const MainRoute = () => {
  return (
    <div>
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
      </Routes>
    </div>
  );
};

export default MainRoute;
