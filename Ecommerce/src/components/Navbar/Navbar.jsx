/* eslint-disable react/no-unescaped-entities */

import styles from "./Navbar.module.css";
import CartIcon from "../Cart Icon/CartIcon";

import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CiDark } from "react-icons/ci";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const { isThemeDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.navContainer} ${
        isThemeDark ? styles.dark_box_shadow : null
      }`}
    >
      <div className={styles.logo_container}>
        <Link to="/">Men's Fashion</Link>
      </div>
      <div className={styles.link_container}>
        <Link to="/products">Products</Link>
      </div>
      <div className={styles.cart_container}>
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
      </div>
    </div>
  );
};

export default Navbar;
