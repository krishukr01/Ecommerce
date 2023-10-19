/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const ThemeContext = React.createContext();

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
