import styles from "./Cart.module.css";

import { CartCard } from "../../components/Cart Card/CartCard";
import { useLoaderData } from "react-router";

export const Cart = () => {
  const data = useLoaderData();

  return (
    <main className={styles.container}>
      <section>
        {data.map((item) => (
          <CartCard product={item} key={item.id} />
        ))}
        <section className={styles.product}>
          <section className={styles.productDetails}>
            <section>
              <span className={styles.boldText}>Total Items:</span>{" "}
              <span className={styles.blueBadge}>{data.length}</span>
            </section>
            <section>
              <span className={styles.boldText}>Subtotal:</span> {100} ₹
            </section>
          </section>
        </section>
      </section>
      <button className={styles.checkoutButton}>Checkout</button>
    </main>
  );
};
