import ProductCard from "../../components/Product Card/ProductCard";
import useFetch from "../../hooks/useFetch";
import styles from "./Product.module.css";

const Products = () => {
  const [data] = useFetch("http://localhost:8080/MensData");

  return (
    <div className={styles.main_container}>
      <div className={styles.filter_container}></div>
      <div className={styles.products_container}>
        {data.length > 0
          ? data.map((item, index) => (
              <ProductCard key={index} product={data[index]} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Products;
