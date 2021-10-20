import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import styles from "./SingleItem.module.css";

const SingleItem = () => {

  const currentProduct = useSelector(state=>state.shop.currentItem);

  const dispatch = useDispatch();

  const addToCartHandler = ()=>{
    dispatch(addToCart(currentProduct.id))
  }

  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={currentProduct.image}
        alt={currentProduct.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{currentProduct.title}</p>
        <p className={styles.details__description}>{currentProduct.description}</p>
        <p className={styles.details__price}>${currentProduct.price}</p>

        <button
          onClick={addToCartHandler}
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};



export default SingleItem;
