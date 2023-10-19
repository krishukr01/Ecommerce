import { Routes, Route } from "react-router-dom";
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/products" element={<h1>Products</h1>}></Route>
        <Route path="/cart" element={<h1>Cart</h1>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
