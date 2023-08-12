import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [selectDepartment, setSelectedDepartment] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All departments");
  const [lowStockFilter, setLowStockFilter] = useState(false);
  const [sortOption, setSortOption] = useState("Name");

  return (
    <DashboardContext.Provider
      value={{
        selectDepartment,
        setSelectedDepartment,
        departmentFilter,
        setDepartmentFilter,
        lowStockFilter,
        setLowStockFilter,
        sortOption,
        setSortOption,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboard = () => useContext(DashboardContext);
export { useDashboard, DashboardProvider };
