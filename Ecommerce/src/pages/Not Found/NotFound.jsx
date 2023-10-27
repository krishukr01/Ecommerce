import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
export const NotFound = () => {
  return (
    <main className={styles.container}>
      <section>
        <h1>Page Not Found</h1>
        <Link to="/products">Go to Products</Link>
      </section>
    </main>
  );
};
