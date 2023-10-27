import styles from "./Cart.module.css";
import axios from "axios";

import { CartCard } from "../../components/Cart Card/CartCard";
import { useLoaderData, useRevalidator } from "react-router";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { INC } from "../../constants";

export const Cart = () => {
  const data = useLoaderData();
  const { revalidate } = useRevalidator();
  const { handleDecCartCount } = useContext(CartContext);

  const [dataObj, setDataObj] = useState(
    data.map((item) => ({
      id: item.id,
      price: item.discounted_price,
      quantity: 1,
    })),
  );

  const subTotal = dataObj.reduce((acc, item) => {
    return acc + parseFloat(item.price) * item.quantity;
  }, 0);

  const handleQuantityChange = (productId, increment) => {
    let finalValue = increment === INC ? 1 : -1;
    setDataObj((prevDataObj) => {
      return prevDataObj.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + finalValue,
          };
        }
        return item;
      });
    });
  };

  const handleDeleteFromCart = async (productId) => {
    try {
      const res = await axios.delete(`/Cart/${productId}`);
      if (res.status === 200) {
        revalidate();
        handleDecCartCount();
        let remainDataObj = dataObj.filter((data) => data.id !== productId);
        setDataObj([...remainDataObj]);
      }
    } catch (error) {
      throw new Error("Error deleting Cart");
    }
  };

  return (
    <main className={styles.container}>
      <section>
        {data.map((item, index) => (
          <CartCard
            handleDeleteFromCart={handleDeleteFromCart}
            handleQuantityChange={handleQuantityChange}
            quantity={dataObj[index]?.quantity}
            product={item}
            key={item.id}
          />
        ))}
        <section className={styles.product}>
          <section className={styles.productDetails}>
            <section>
              <span className={styles.boldText}>Total Items:</span>{" "}
              <span className={styles.blueBadge}>{data.length}</span>
            </section>
            <section>
              <span className={styles.boldText}>Subtotal:</span> {subTotal} ₹
            </section>
          </section>
        </section>
      </section>
      <button className={styles.checkoutButton}>Checkout</button>
    </main>
  );
};
