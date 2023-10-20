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
    <main className={styles.product_card}>
      <img className={styles.product_image} src={images[0]} alt={title} />
      <h3 className={styles.product_title}>{title}</h3>
      <p className={styles.product_price}>Price: {strike_price}₹</p>
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
    </main>
  );
};

export default ProductCard;
