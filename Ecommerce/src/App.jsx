import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoute from "./routes/MainRoute";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isThemeDark } = useContext(ThemeContext);
  return (
    <div className={isThemeDark ? "dark" : "white"}>
      <Navbar />
      <MainRoute />
    </div>
  );
}

export default App;
