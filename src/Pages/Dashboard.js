import React from "react";
import { inventoryData } from "../database/db";
import { DashboardCard } from "../Components/DashboardCard";

export const Dashboard = () => {
  return (
    <div>
      <DashboardCard dashboardInfo={inventoryData} />
    </div>
  );
};
