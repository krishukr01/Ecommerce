/* eslint-disable react/prop-types */
import styles from "./CartIcon.module.css";

import { BsCart } from "react-icons/bs";

export const CartIcon = ({ itemCount }) => {
  return (
    <main className={styles.cart}>
      <span data-test="cart_count" className={styles.count}>
        {itemCount}
      </span>
      <section className={styles.icons}>
        <BsCart />
      </section>
    </main>
  );
};
