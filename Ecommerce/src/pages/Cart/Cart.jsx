import styles from "./Cart.module.css";

import { CartCard } from "../../components/Cart Card/CartCard";

export const Cart = () => {
  return (
    <main className={styles.container}>
      <section>
        <CartCard />
        <CartCard />
        <section className={styles.product}>
          <section className={styles.productDetails}>
            <section>
              <span className={styles.boldText}>Total Items:</span>{" "}
              <span className={styles.blueBadge}>{10}</span>
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
