import styles from "./Product.module.css";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading/Loading";
import { ProductCard } from "../../components/Product Card/ProductCard";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Products = () => {
  const { handleIncCartCount } = useContext(CartContext);

  const getData = async () => {
    const response = await axios.get("/MensData");
    return response.data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["productsData"],
    queryFn: getData,
  });

  return (
    <main className={styles.main_container}>
      <section className={styles.filter_container}></section>
      <section className={styles.products_container}>
        {isLoading ? (
          <Loading />
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <ProductCard
              handleIncCartCount={handleIncCartCount}
              key={item.id}
              product={data[index]}
            />
          ))
        ) : null}
      </section>
    </main>
  );
};
