import React from "react";
import { useDashboard } from "../Context/StockContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const DepartmentCard = ({ depatmentInfo }) => {
  console.log(depatmentInfo);
  const { setSelectedDepartment } = useDashboard();
  const nav = useNavigate();
  return (
    <div
      className="flex p-3 m-2 flex-row justify-around bg-slate-300 w-80 h-20 cursor-pointer "
      onClick={() => {setSelectedDepartment(depatmentInfo);nav("/products")}}
    >
      <div className="flex flex-row my-4 cursor-pointer">
      {depatmentInfo}</div>
    </div>
  );
};
