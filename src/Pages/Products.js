import React, { useState } from "react";
import { useDashboard } from "../Context/StockContext";
import { inventoryData } from "../database/db";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";

export const Products = () => {
  const nav = useNavigate();

  const {
    departmentFilter,
    setDepartmentFilter,
    lowStockFilter,
    sortOption,
    setSortOption,
    setLowStockFilter,
    selectDepartment,
  } = useDashboard();
  const { products } = useProduct();

  const [searchTerm, setSearchTerm] = useState("");

  const departments = ["All departments", "Kitchen", "Clothing", "Toys"];

  const filteredProducts = products.filter((product) => {
    return (
      (departmentFilter === "All departments" ||
        product.department === departmentFilter) &&
      (!lowStockFilter || product.stock <= 10) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "Price") {
      return a.price - b.price;
    } else if (sortOption === "Stock") {
      return a.stock - b.stock;
    }
    return 0;
  });

  return (
    <div>
      <div className="flex flex-row justify-evenly m-4 p-4 align-middle">
        <h1 className="text-2xl font-bold text-left mr-4">Product List</h1>
        <div>
          {/* <label>Sort by:</label> */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-solid border-slate-400 rounded"
          >
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Stock">Stock</option>
          </select>
        </div>

        <div>
          <select
            value={selectDepartment}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="border border-solid border-slate-400 rounded"
          >
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={lowStockFilter}
              onChange={() => setLowStockFilter(!lowStockFilter)}
            />{" "}
            Low Stock
          </label>
        </div>

        <div>
          <label>Search:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-solid border-slate-400 px-2 rounded"
          />
        </div>
        <div className="border border-solid  p-1 bg-blue-500 rounded text-white px-3">
          <button onClick={() => nav("/add-product")}>New</button>
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-auto max-h-screen max-w-screen-lg mx-auto">
        <table class="table w-full border">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left">Image</th>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Description</th>
              <th class="px-4 py-2 text-left">Price</th>
              <th class="px-4 py-2 text-left">Stock</th>
              <th class="px-4 py-2 text-left">Supplier</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product) => (
              <tr key={product.id} class="bg-gray-100">
                <td class="px-4 py-2">
                  <img src={product.imageUrl} className="w-32 h-32 shadow-md" />
                </td>
                <td class="px-4 py-2">{product.name}</td>
                <td class="px-4 py-2">{product.description}</td>
                <td class="px-4 py-2">${product.price}</td>
                <td class="px-4 py-2">{product.stock}</td>
                <td class="px-4 py-2">{product.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
