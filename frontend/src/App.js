import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
} from "./pages";
import Footer from "./components/common/Footer";

const sideBarWidth = 250;

function App() {
  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          {isUserSignedIn &&  <Route path="/dashboard" element={<Dashboard />} />}
          {isUserSignedIn &&  <Route path="/profil" element={<UserProfil />} />}
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/products/categories" element={<ProductCategories />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<SingleCustomer />} />
          <Route path="/sales/analysis" element={<SalesAnalytics />} />
          <Route path="/sales" element={<ProductSales />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/template" element={<OrderTemplate />} />
          <Route path="/orders/:id" element={<SingleOrder />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/inbox" element={<Inbox />} />
          
          
        </Routes>

      </BrowserRouter>
    </>
    
        
  );
}

export default App;
