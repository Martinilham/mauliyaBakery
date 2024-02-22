import * as React from "react";
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Box from "@mui/material/Box";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import {
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
} from "./pages";
import Footer from "./components/common/Footer";

// const router = createBrowserRouter([
//   {
//     path:"/dashboard/",
//     element:<Dashboard/>
//   },
//   {
//     path:"/dashboard/products",
//     element:<Products />
//   },
//   {
//     path:"/dashboard/products/add",
//     element:<AddProduct />
//   },
//   {
//     path:"/dashboard/products/:id",
//     element:<SingleProduct />
//   },
//   {
//     path:"/dashboard/products/categories",
//     element:<ProductCategories />
//   },
//   {
//     path:"/dashboard/customers",
//     element:<Customers />
//   },
//   {
//     path:"/dashboard/customers/:id",
//     element:<SingleCustomer />
//   },
//   {
//     path:"/dashboard/sales/analysis",
//     element:<SalesAnalytics />
//   },
//   {
//     path:"/dashboard/sales",
//     element:<ProductSales />
//   },
//   {
//     path:"/dashboard/orders",
//     element:<Orders />
//   }
// ])

const sideBarWidth = 250;

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        sideBarWidth={sideBarWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Sidebar
        sideBarWidth={sideBarWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 1, md: 2 },
          width: { xs: "100%", md: `calc(100% - ${sideBarWidth}px)` },
        }}
      >
        {/* <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode> */}
        {/* Routes */}
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard/products/add" component={<AddProduct />} />
          <Route path="/dashboard/products/:id" component={<SingleProduct />} />
          <Route path="/dashboard/products/categories" component={<ProductCategories />} />
          <Route path="/dashboard/customers" component={<Customers />} />
          <Route path="/dashboard/customers/:id" component={<SingleCustomer />} />
          <Route path="/dashboard/sales/analysis" component={<SalesAnalytics />} />
          <Route path="/dashboard/sales" component={<ProductSales />} />
          <Route path="/dashboard/orders" component={<Orders />} />
          <Route path="/dashboard/orders/template" component={<OrderTemplate />} />
          <Route path="/dashboard/orders/:id" component={<SingleOrder />} />
          <Route path="/dashboard/suppliers" component={<Suppliers />} />
          <Route path="/dashboard/transactions" component={<Transactions />} />
          <Route path="/dashboard/brands" component={<Brands />} />
          <Route path="/dashboard/reviews" component={<Reviews />} />
          <Route path="/dashboard/settings" component={<Settings />} />
          <Route path="/dashboard/reviews" component={<Reviews />} />
          <Route path="/dashboard/inbox" component={<Inbox />} />
   
        </Routes>
        
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
