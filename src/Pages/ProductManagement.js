// ProductListPage.jsx
import React, { useContext, useState } from "react";
// import { ProductContext } from "./ProductContext";
import { useProduct } from "../Context/ProductContext";

const ProductListPage = () => {
  const { products, addProduct } = useProduct();
  console.log(products);

  const [newProduct, setNewProduct] = useState({
    department: "Select department",
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
      <h1 className="font-bold text-2xl">Add New Products</h1>
      <form className="flex flex-col text-left p-4 w-1/2 ">
        <label htmlFor="department">Department:</label>
        <select
          id="department"
          className="block w-full border p-1 border-solid "
          value={newProduct.department}
          onChange={(e) =>
            setNewProduct({ ...newProduct, department: e.target.value })
          }
        >
          <option value="" disabled>
            Select a department
          </option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
          {/* Add more options for other departments */}
        </select>

        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="border border-solid border-slate-400 px-2"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          className="border border-solid border-slate-400 px-2"
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
          }
          className="border border-solid border-slate-400 px-2"
        />

        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          value={newProduct.stock}
          onChange={(e) =>
            setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })
          }
          className="border border-solid border-slate-400 px-2"
        />

        <label htmlFor="sku">SKU:</label>
        <input
          type="text"
          id="sku"
          value={newProduct.sku}
          onChange={(e) =>
            setNewProduct({ ...newProduct, sku: e.target.value })
          }
          className="border border-solid border-slate-400 px-2"
        />

        <label htmlFor="supplier">Supplier:</label>
        <input
          type="text"
          id="supplier"
          value={newProduct.supplier}
          onChange={(e) =>
            setNewProduct({ ...newProduct, supplier: e.target.value })
          }
          className="border border-solid border-slate-400 px-2"
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={newProduct.imageUrl}
          onChange={(e) =>
            setNewProduct({ ...newProduct, imageUrl: e.target.value })
          }
          className="border border-solid border-slate-400 px-2"
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
    </div>
  );
};

export default ProductListPage;
