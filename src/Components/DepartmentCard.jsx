import React from "react";
import { useDashboard } from "../Context/StockContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const DepartmentCard = ({ depatmentInfo }) => {
  console.log(depatmentInfo);
  const { setSelectedDepartment, selectDepartment, setDepartmentFilter } =
    useDashboard();
  console.log(selectDepartment);
  const nav = useNavigate();
  return (
    <div
      className="flex p-3 m-2 flex-row justify-around bg-slate-300 w-96 h-20 cursor-pointer my-4"
      onClick={() => {
        setSelectedDepartment(depatmentInfo);
        nav("/products");
        setDepartmentFilter(depatmentInfo);
      }}
    >
      <div className="flex flex-row my-4 cursor-pointer">{depatmentInfo}</div>
    </div>
  );
};
