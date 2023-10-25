import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./CartCard.module.css";

export const CartCard = () => {
  return (
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
  );
};
