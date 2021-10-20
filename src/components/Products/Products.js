import React from "react";
import styles from "./Products.module.css";

import { useSelector } from "react-redux";

import Product from "./Product/Product";

const Products = () => {
  
  const products = useSelector((state) => state.shop.products);
  
  return (
    <div className={styles.products}>
      {products.map((prod) => {
      return  <Product key={prod.id} product={prod} />;
      })}
    </div>
  );
};

export default Products;
