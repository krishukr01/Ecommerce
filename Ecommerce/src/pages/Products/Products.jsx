import useFetch from "../../hooks/useFetch";
import styles from "./Product.module.css";

const Products = () => {
  const [data, isLoading, isError] = useFetch(
    " http://localhost:8080/MensData"
  );

  return (
    <div className={styles.main_container}>
      <div className={styles.filter_container}></div>
      <div className={styles.products_container}></div>
    </div>
  );
};

export default Products;
