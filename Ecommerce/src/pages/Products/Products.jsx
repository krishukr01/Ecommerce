import styles from "./Product.module.css";

const Products = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.filter_container}></div>
      <div className={styles.products_container}></div>
    </div>
  );
};

export default Products;
