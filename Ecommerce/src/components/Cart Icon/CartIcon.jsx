/* eslint-disable react/prop-types */
//? All Imports
import styles from "./CartIcon.module.css";

import { BsFillBagHeartFill } from "react-icons/bs";

const CartIcon = ({ itemCount }) => {
  return (
    <div className={styles.cart}>
      <span className={styles.count}>{itemCount}</span>
      <i className={styles.Icons}>
        <BsFillBagHeartFill />
      </i>
    </div>
  );
};

export default CartIcon;
