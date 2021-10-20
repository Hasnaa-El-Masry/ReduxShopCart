import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import {
  removeFromCart,
  adjustItemQty,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ product }) => {
  
  const [input, setInput] = useState(product.qty);

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeFromCart(product.id));
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);

    const inputVal = e.target.value;

    dispatch(adjustItemQty(product.id, inputVal));
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>${product.price} </p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={removeItemHandler}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
