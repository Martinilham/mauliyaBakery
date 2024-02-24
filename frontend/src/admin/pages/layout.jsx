import React from "react";

import Sidebar from "../components/sidebar.jsx";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="columns mt-6 bg-slate-800 " style={{ minHeight: "100vh" }}>
        <div className="column is-2 text-white">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
