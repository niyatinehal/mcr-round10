// ProductContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { inventoryData } from "../database/db";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(inventoryData);

  useEffect(() => {
    // Retrieve product data from localStorage on page load
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    // Update localStorage when products change
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct=()=>useContext(ProductContext)

export { ProductProvider, useProduct };
