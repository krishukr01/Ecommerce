import styles from "./EmptyCart.module.css";

import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <main>
      <h1 className={styles.heading}>Shopping Cart</h1>
      <p className={styles.emptyCart}>Your cart is empty.</p>
      <Link to="/products">
        <button className={styles.checkoutButton}>Shop Now</button>
      </Link>
    </main>
  );
};

export { EmptyCart };
