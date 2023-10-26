/* eslint-disable react/prop-types */
import styles from "./CartCard.module.css";
import axios from "axios";

import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useRevalidator } from "react-router";

export const CartCard = ({ product }) => {
  const { discounted_price, title, images } = product;
  const { handleDecCartCount } = useContext(CartContext);
  let { revalidate } = useRevalidator();

  const handleDeleteFromCart = async () => {
    try {
      const res = await axios.delete(`/Cart/${product.id}`);
      if (res.status === 200) {
        revalidate();
        handleDecCartCount();
      }
    } catch (error) {
      throw new Error("Error deleting Cart");
    }
  };

  return (
    <section className={styles.product}>
      <img
        className={styles.productImage}
        alt="Product image"
        src={images[0]}
      />
      <section className={styles.productDetails}>
        <h2 className={styles.productName}>{title}</h2>
        <p className={styles.productPrice}>Price : {discounted_price} ₹</p>
      </section>
      <button onClick={handleDeleteFromCart} className={styles.removeButton}>
        <RiDeleteBin6Line />
      </button>
    </section>
  );
};
