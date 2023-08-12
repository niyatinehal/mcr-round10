import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../Components/Sidebar";

export const ContainerPage = () => {
  return (
    <div className="flex item-center justify-between w-full">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
