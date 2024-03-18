import * as React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import {
  Login,
  AddProduct,
  Brands,
  Customers,
  Inbox,
  Orders,
  OrderTemplate,
  ProductCategories,
  Products,
  ProductSales,
  Reviews,
  SalesAnalytics,
  Settings,
  SingleCustomer,
  SingleOrder,
  SingleProduct,
  Suppliers,
  Transactions,
  UserProfil,
  Register,
  Edit,
} from "./pages";
import Footer from "./components/common/Footer";

const sideBarWidth = 250;

function App() {
  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={isUserSignedIn ? "/dashboard" : "/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={isUserSignedIn ? <Dashboard /> : <Navigate to="/login" />} />
          {isUserSignedIn && (
            <>
              <Route path="/profil" element={<UserProfil />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/products/categories" element={<ProductCategories />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/:id" element={<SingleCustomer />} />
              <Route path="/sales/analysis" element={<SalesAnalytics />} />
              <Route path="/sales" element={<ProductSales />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/template" element={<OrderTemplate />} />
              <Route path="/orders/:id" element={<SingleOrder />} />
              <Route path="/transactions" element={<Transactions />} />
            </>
          )}
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
