import { RiDeleteBin6Line } from "react-icons/ri";

import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <main className={styles.container}>
      <section>
        <section className={styles.product}>
          <img className={styles.productImage} />
          <div className={styles.productDetails}>
            <h2 className={styles.productName}>{"Krishan"}</h2>
            <p className={styles.productPrice}>Price : {100} ₹</p>
          </div>
          <button className={styles.removeButton}>
            <RiDeleteBin6Line />
          </button>
        </section>
        <section className={styles.product}>
          <div className={styles.productDetails}>
            <div>
              <span className={styles.boldText}>Total Items:</span>{" "}
              <span className={styles.blueBadge}>{10}</span>
            </div>
            <div>
              <span className={styles.boldText}>Subtotal:</span> {100} ₹
            </div>
          </div>
        </section>
      </section>
      <button className={styles.checkoutButton}>Checkout</button>
    </main>
  );
};

export default Cart;
