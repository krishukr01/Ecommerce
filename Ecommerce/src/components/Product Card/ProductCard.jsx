/* eslint-disable react/prop-types */

import axios from "axios";
import styles from "./ProductCard.module.css";

import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";
export const ProductCard = ({ product, handleIncCartCount }) => {
  const { title, discounted_price, images, rating } = product;

  const handleAddToCart = async (product) => {
    try {
      const res = await axios.post("/Cart", product);
      if (res.status === 201) {
        handleIncCartCount();
      }
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Product already in cart",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <section className={styles.product_card}>
      <img className={styles.product_image} src={images[0]} alt={title} />
      <h3 className={styles.product_title}>{title}</h3>
      <p className={styles.product_price}>Price: {discounted_price}₹</p>
      <section className={styles.product_rating}>
        <span className={styles.rating_value}>Reviews : {rating.rate}</span>
        <span className={styles.rating_count}>({rating.count} reviews)</span>
      </section>
      <button
        onClick={() => handleAddToCart(product)}
        className={styles.add_to_cartButton}
      >
        <FaCartPlus className={styles.cartIcon} />
        Add to Cart
      </button>
    </section>
  );
};
