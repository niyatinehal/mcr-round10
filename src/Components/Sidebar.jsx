import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-evenly items-center w-25 bg-black h-screen p-4 text-lg">
      <NavLink to="/dashboard" className="flex justify-start items-center w-32">
        <p className=" px-2 py-1 text-white "> Dashboard</p>
      </NavLink>
      <NavLink
        to="/depatments"
        className="flex justify-start items-center w-32"
      >
        <p className=" px-2 py-1 text-white "> Department</p>
      </NavLink>
      <NavLink to="/products" className="flex justify-start items-center w-32">
        <p className=" px-2 py-1 text-white "> Products</p>
      </NavLink>
    </div>
  );
};
