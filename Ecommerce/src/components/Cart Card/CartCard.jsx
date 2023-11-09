/* eslint-disable react/prop-types */
import styles from "./CartCard.module.css";

import { INC, DEC } from "../../constants";
import { RiDeleteBin6Line } from "react-icons/ri";
export const CartCard = ({
  product,
  quantity,
  handleDeleteFromCart,
  handleQuantityChange,
}) => {
  const { discounted_price, title, images } = product;

  const finalPrice = discounted_price * quantity;

  return (
    <section data-test="cart" className={styles.product}>
      <section className={styles.detailsContainer}>
        <section>
          <img
            className={styles.productImage}
            alt="Product image"
            src={images[0]}
          />
        </section>
        <section className={styles.productDetails}>
          <h2 className={styles.productName}>{title}</h2>
          <p className={styles.productPrice}>Price : {finalPrice} ₹</p>
        </section>
      </section>
      <section className={styles.quantityContainer}>
        <button
          disabled={quantity === 1}
          className={styles.button}
          onClick={() => handleQuantityChange(product.id, DEC)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className={styles.button}
          onClick={() => handleQuantityChange(product.id, INC)}
        >
          +
        </button>
      </section>
      <button
        data-test="delete_button"
        onClick={() => handleDeleteFromCart(product.id)}
        className={styles.removeButton}
      >
        <RiDeleteBin6Line />
      </button>
    </section>
  );
};
