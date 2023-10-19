/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import CartIcon from "../Cart Icon/CartIcon";

import { MdDarkMode } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CiDark } from "react-icons/ci";

const Navbar = () => {
  const { isThemeDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.navContainer}>
      <div className={styles.logo_container}>
        <Link to="/">Men's Fashion</Link>
      </div>
      <div className={styles.link_container}>
        <Link to="/products">Products</Link>
      </div>
      <div className={styles.cart_container}>
        <Link className={styles.login_button} to="/cart">
          {" "}
          <CartIcon itemCount={1} />
        </Link>
        <Link className={styles.login_button} to="/login">
          <BiLogIn />
        </Link>
        {isThemeDark ? (
          <MdDarkMode
            onClick={toggleTheme}
            style={{ color: "white" }}
            className={styles.login_button}
          />
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
