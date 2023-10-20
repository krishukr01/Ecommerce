import ProductCard from "../../components/Product Card/ProductCard";
import useFetch from "../../hooks/useFetch";
import styles from "./Product.module.css";

const Products = () => {
  const [data, isLoading] = useFetch("http://localhost:8080/MensData");

  return (
    <main className={styles.main_container}>
      <section className={styles.filter_container}></section>
      <section className={styles.products_container}>
        {isLoading ? (
          <div className={styles.spinner_container}>
            <h2>Loading...</h2>
          </div>
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <ProductCard key={index} product={data[index]} />
          ))
        ) : null}
      </section>
    </main>
  );
};

export default Products;
