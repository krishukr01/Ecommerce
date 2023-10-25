import styles from "./Cart.module.css";

import { RiDeleteBin6Line } from "react-icons/ri";

export const Cart = () => {
  return (
    <main className={styles.container}>
      <section>
        <section className={styles.product}>
          <img className={styles.productImage} />
          <section className={styles.productDetails}>
            <h2 className={styles.productName}>{"Krishan"}</h2>
            <p className={styles.productPrice}>Price : {100} ₹</p>
          </section>
          <button className={styles.removeButton}>
            <RiDeleteBin6Line />
          </button>
        </section>
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
