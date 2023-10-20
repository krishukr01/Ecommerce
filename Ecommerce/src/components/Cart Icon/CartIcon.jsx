/* eslint-disable react/prop-types */
import styles from "./CartIcon.module.css";

import { BsCart } from "react-icons/bs";

const CartIcon = ({ itemCount }) => {
  return (
    <main className={styles.cart}>
      <text className={styles.count}>{itemCount}</text>
      <section className={styles.Icons}>
        <BsCart />
      </section>
    </main>
  );
};

export default CartIcon;
