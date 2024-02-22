import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router ,createBrowserRouter,RouterProvider} from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import { Login } from "./pages";
import { ThemeToggleProvider } from "./contexts/ThemeContext";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/app",
    element:<App/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <CssBaseline />
      <Router>
      {/* <RouterProvider router={router} /> */}
      <App/>
      </Router>
    </ThemeToggleProvider>
  </React.StrictMode>
);
