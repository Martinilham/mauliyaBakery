import React from 'react'

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "../components/common/Sidebar.jsx";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const sideBarWidth = 250;

function Layout({children}) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    return (
        <React.Fragment>
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
          {/* Routes */}
          <main>{children}</main>
          <Footer />
        </Box>
      </Box>
        </React.Fragment>
      
    );
}
export default Layout;
