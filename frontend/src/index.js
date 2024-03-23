import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwinds.css"
import "./styles/index.css";
import "animate.css"
import App from "./App";
import { ThemeToggleProvider } from "./contexts/ThemeContext";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <CssBaseline />
      <App/>
    </ThemeToggleProvider>
  </React.StrictMode>
);
