import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import CartIcon from "../Cart Icon/CartIcon";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo_container}>
        <Link to="/">Ecommerce</Link>
      </div>

      <div className={styles.link_container}>
        <Link to="/products">Products</Link>
      </div>

      <div className={styles.cart_container}>
        <Link to="/cart">
          {" "}
          <CartIcon itemCount={1} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;