/* eslint-disable react/prop-types */

import axios from "axios";
import styles from "./ProductCard.module.css";

import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { title, strike_price, images, rating } = product;
  const { handleIncCartCount } = useContext(CartContext);

  const handleAddToCart = async (product) => {
    try {
      const res = await axios.post("http://localhost:8080/Cart", product);
      if (res.status === 201) {
        handleIncCartCount();
      }
    } catch (error) {
      alert("Item already in cart");
    }
  };

  return (
    <main className={styles.productCard}>
      <img className={styles.productImage} src={images[0]} alt={title} />
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productPrice}>Price: {strike_price}₹</p>
      <section className={styles.productRating}>
        <span className={styles.ratingValue}>Reviews : {rating.rate}</span>
        <span className={styles.ratingCount}>({rating.count} reviews)</span>
      </section>
      <button
        onClick={() => handleAddToCart(product)}
        className={styles.addToCartButton}
      >
        <FaCartPlus className={styles.cartIcon} />
        Add to Cart
      </button>
    </main>
  );
};

export default ProductCard;
