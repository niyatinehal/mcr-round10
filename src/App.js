import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ContainerPage } from "./Pages/ContainerPage";
import { Dashboard } from "./Pages/Dashboard";
import { Departmets } from "./Pages/Departmets";
import { Products } from "./Pages/Products";
import { ProductDetails } from "./Pages/ProductDetails";
import ProductListPage from "./Pages/ProductManagement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContainerPage/>}>
          <Route path="/" element={<Dashboard />}/>
           <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/depatments" element={<Departmets/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/add-product" element={<ProductListPage/>} />
          <Route/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
