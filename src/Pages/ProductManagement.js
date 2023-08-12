// ProductListPage.jsx
import React, { useContext, useState } from "react";
// import { ProductContext } from "./ProductContext";
import { useProduct } from "../Context/ProductContext";

const ProductListPage = () => {
  const { products, addProduct } = useProduct();

  const [newProduct, setNewProduct] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  const handleAddProduct = () => {
    addProduct(newProduct);
    // Reset the form after adding a new product
    setNewProduct({
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    });
  };

  return (
    <div>
     <form className="flex flex-col text-left p-4">
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          value={newProduct.department}
          onChange={(e) => setNewProduct({ ...newProduct, department: e.target.value })}
        />

        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        />

        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
        />

        <label htmlFor="sku">SKU:</label>
        <input
          type="text"
          id="sku"
          value={newProduct.sku}
          onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
        />

        <label htmlFor="supplier">Supplier:</label>
        <input
          type="text"
          id="supplier"
          value={newProduct.supplier}
          onChange={(e) => setNewProduct({ ...newProduct, supplier: e.target.value })}
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={newProduct.imageUrl}
          onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
        />

        <button type="button" onClick={handleAddProduct}>
          Add
        </button>
      </form>
      <form>
        {/* Input fields for product details */}
        {/* ... */}
        <button type="button" onClick={handleAddProduct}>
          Add
        </button>
      </form>

      {/* Display existing products */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListPage;
