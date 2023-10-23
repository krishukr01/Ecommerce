/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import styles from "./Navbar.module.css";
import CartIcon from "../Cart Icon/CartIcon";

import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { useContext } from "react";
import { CiDark } from "react-icons/ci";
import { CartContext } from "../../context/CartContext";

const Navbar = ({ isThemeDark, toggleTheme }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <nav
      className={`${styles.nav_container} ${
        isThemeDark ? styles.dark_box_shadow : null
      }`}
    >
      <div className={styles.logo_container}>
        <Link to="/">Men's Fashion</Link>
      </div>
      <div className={styles.link_container}>
        <Link to="/products">Products</Link>
      </div>
      <section className={styles.cart_container}>
        <Link className={styles.login_button} to="/cart">
          {" "}
          <CartIcon itemCount={cartCount} />
        </Link>
        <Link className={styles.login_button} to="/login">
          <BiLogIn />
        </Link>
        {isThemeDark ? (
          <MdDarkMode onClick={toggleTheme} className={styles.login_button} />
        ) : (
          <CiDark
            onClick={toggleTheme}
            style={{ color: "black" }}
            className={styles.login_button}
          />
        )}
      </section>
    </nav>
  );
};

export default Navbar;
