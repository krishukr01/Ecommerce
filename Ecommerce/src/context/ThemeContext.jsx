/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(() =>
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const toggleTheme = () => {
    localStorage.setItem("theme", isThemeDark ? "white" : "dark");
    setIsThemeDark(!isThemeDark);
  };

  return (
    <ThemeContext.Provider value={{ isThemeDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
