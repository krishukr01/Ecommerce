/* eslint-disable react/prop-types */

import { FaCartPlus } from "react-icons/fa";

import styles from "./ProductCard.module.css";
import axios from "axios";
const URL = "http://localhost:8080/Cart";
const ProductCard = ({ product }) => {
  const { title, strike_price, images, rating } = product;

  const handleAddToCart = async (product) => {
    try {
      await axios.post(URL, product);
    } catch (error) {
      throw new Error("Adding to cart failed: " + error);
    }
  };

  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={images[0]} alt={title} />
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productPrice}>Price: {strike_price}₹</p>
      <div className={styles.productRating}>
        <span className={styles.ratingValue}>Reviews : {rating.rate}</span>
        <span className={styles.ratingCount}>({rating.count} reviews)</span>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className={styles.addToCartButton}
      >
        <FaCartPlus className={styles.cartIcon} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
