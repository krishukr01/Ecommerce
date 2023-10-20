import ProductCard from "../../components/Product Card/ProductCard";
import styles from "./Product.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const URL = "http://localhost:8080/MensData";
const Products = () => {
  const getData = async () => {
    const response = await axios.get(URL);
    return response.data;
  };

  const { isPending, data } = useQuery({
    queryKey: ["productsData"],
    queryFn: getData,
  });

  return (
    <main className={styles.main_container}>
      <section className={styles.filter_container}></section>
      <section className={styles.products_container}>
        {isPending ? (
          <div className={styles.spinner_container}>
            <h2>Loading...</h2>
          </div>
        ) : data?.length > 0 ? (
          data.map((item, index) => (
            <ProductCard key={index} product={data[index]} />
          ))
        ) : null}
      </section>
    </main>
  );
};

export default Products;
