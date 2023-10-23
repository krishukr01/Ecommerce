import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoute from "./routes/MainRoute";

function App() {
  const [isThemeDark, setIsThemeDark] = useState(() =>
    localStorage.getItem("theme") === "dark" ? true : false,
  );

  const toggleTheme = () => {
    localStorage.setItem("theme", isThemeDark ? "white" : "dark");
    setIsThemeDark(!isThemeDark);
  };

  return (
    <main className={isThemeDark ? "dark" : "white"}>
      <Navbar isThemeDark={isThemeDark} toggleTheme={toggleTheme} />
      <MainRoute />
    </main>
  );
}

export default App;
