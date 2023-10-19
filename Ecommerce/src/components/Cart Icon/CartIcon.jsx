/* eslint-disable react/prop-types */
import styles from "./CartIcon.module.css";

import { BsCart } from "react-icons/bs";

const CartIcon = ({ itemCount }) => {
  return (
    <div className={styles.cart}>
      <span className={styles.count}>{itemCount}</span>
      <i className={styles.Icons}>
        <BsCart />
      </i>
    </div>
  );
};

export default CartIcon;
