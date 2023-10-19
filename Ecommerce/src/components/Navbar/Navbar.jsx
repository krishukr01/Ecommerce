/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import CartIcon from "../Cart Icon/CartIcon";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo_container}>
        <Link to="/">Men's Fashion</Link>
      </div>
      <div className={styles.link_container}>
        <Link to="/products">Products</Link>
      </div>
      <div className={styles.cart_container}>
        <Link to="/cart">
          {" "}
          <CartIcon itemCount={1} />
        </Link>

        <Link to="/login">
          <button className={styles.login_button}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
