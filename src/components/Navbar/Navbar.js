import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {

  const cartState = useSelector(state => state.shop.cart);

  const itemsCount = cartState.reduce((curr,prod)=>{ return curr + (+prod.qty)},0);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>ReduxCart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{itemsCount}</div>
        </div>
      </Link>
    </div>
  );
};



export default Navbar;
