/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  return (
    <ThemeContext.Provider value={{ isThemeDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export default ThemeProvider;
