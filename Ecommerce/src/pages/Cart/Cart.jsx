import styles from "./Cart.module.css";
import axios from "axios";
import Swal from "sweetalert2";

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

  const handleCheckout = () => {
    if (data.length) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to checkout",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          for (let i = 0; i < data.length; i++) {
            handleDeleteFromCart(data[i].id);
          }
          Swal.fire(
            "Order Placed",
            "Your order is placed successfully.",
            "success",
          );
        }
      });
    }
  };

  return (
    <main className={styles.container}>
      <section data-test="cart_container">
        {data.map((product, index) => (
          <CartCard
            handleDeleteFromCart={handleDeleteFromCart}
            handleQuantityChange={handleQuantityChange}
            quantity={dataObj[index]?.quantity}
            product={product}
            key={product.id}
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
      <button onClick={handleCheckout} className={styles.checkoutButton}>
        Checkout
      </button>
    </main>
  );
};
