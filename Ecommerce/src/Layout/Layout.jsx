import "../index.css";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { DARK, LIGHT, THEME } from "../constants";

export const Layout = () => {
  const [isThemeDark, setIsThemeDark] = useState(
    () => localStorage.getItem(THEME) === DARK,
  );

  
  const toggleTheme = () => {
    localStorage.setItem(THEME, isThemeDark ? LIGHT : DARK);
    setIsThemeDark(!isThemeDark);
  };

  return (
    <main className={isThemeDark ? DARK : LIGHT}>
      <Navbar isThemeDark={isThemeDark} toggleTheme={toggleTheme} />
      <Outlet />
    </main>
  );
};
