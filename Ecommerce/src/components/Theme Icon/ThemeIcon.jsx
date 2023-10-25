/* eslint-disable react/prop-types */
import styles from "./ThemeIcon.module.css";

import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export const ThemeIcon = ({ isThemeDark, toggleTheme }) => {
  return isThemeDark ? (
    <MdDarkMode onClick={toggleTheme} className={styles.login_button} />
  ) : (
    <CiDark
      onClick={toggleTheme}
      style={{ color: "black" }}
      className={styles.login_button}
    />
  );
};
