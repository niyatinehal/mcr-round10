import React from "react";

export const DashboardCard = ({ dashboardInfo }) => {
  const totalDelivered = dashboardInfo.reduce((acc, curr) => {
    return acc + curr.delivered;
  }, 0);
  const totalStock = dashboardInfo.reduce((acc, curr) => {
    return acc + curr.stock;
  }, 0);
 const lowStockItems=dashboardInfo.filter((inventory=>inventory.stock<=10));
const lowStock=lowStockItems.length;
 
  return (
    <div className="flex p-3 m-2 flex-row justify-around ">
      <div className="flex flex-col bg-slate-200 p-4 rounded">
        <p className="text-green-700 font-bold">{totalStock}</p><p className="text-lg font-bold">Total Stock</p>
        
      </div>
      <div className="flex flex-col bg-slate-200 p-4 rounded ">
        <p className="text-yellow-500 font-bold ">{totalDelivered}</p><p className="text-lg font-bold">Total Delivered</p>
      </div>
      <div className="flex flex-col bg-slate-200 p-4 rounded">
        <p className="text-red-500 font-bold">{lowStock}</p><p className="text-lg font-bold">Low Stock Items</p>
      </div>
    </div>
  );
};
