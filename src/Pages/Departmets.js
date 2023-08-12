import React from "react";
import { DepartmentCard } from "../Components/DepartmentCard";
import { inventoryData } from "../database/db";

export const Departmets = () => {
  const departments = ["Kitchen", "Clothing", "Toys"];
  return (
    <div className="flex flex-row justify-evenly m-4">
      {departments.map((department) => (
        <DepartmentCard key={department} depatmentInfo={department} />
      ))}
    </div>
  );
};
