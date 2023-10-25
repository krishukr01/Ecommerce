/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styles from "./Navbar.module.css";

import { CartIcon } from "../Cart Icon/CartIcon";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { ThemeIcon } from "../Theme Icon/ThemeIcon";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Navbar = ({ isThemeDark, toggleTheme }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <nav
      className={`${styles.nav_container} ${
        isThemeDark ? styles.dark_box_shadow : null
      }`}
    >
      <section className={styles.logo_container}>
        <Link to="/">Men's Fashion</Link>
      </section>
      <section className={styles.link_container}>
        <Link to="/products">Products</Link>
      </section>
      <section className={styles.cart_container}>
        <Link className={styles.login_button} to="/cart">
          {" "}
          <CartIcon itemCount={cartCount} />
        </Link>
        <Link className={styles.login_button} to="/login">
          <BiLogIn />
        </Link>
        <ThemeIcon isThemeDark={isThemeDark} toggleTheme={toggleTheme} />
      </section>
    </nav>
  );
};
