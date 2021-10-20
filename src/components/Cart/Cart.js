import React from "react";
import { useSelector } from "react-redux";

import styles from "./Cart.module.css";


import CartItem from "./CartItem/CartItem";

const Cart = () => {

  const cartProducts = useSelector(state=>state.shop.cart);
  const totalItems = cartProducts.length;
  const totalPrice = cartProducts.reduce((curr,prod)=>{return curr+(+prod.price*prod.qty)},0);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cartProducts.map(prod=><CartItem key={prod.id} product={prod} />)}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems})</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};



export default Cart;
