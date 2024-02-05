import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { AppRoutes } from "./routes";
import AppProvider from "./AppProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>,
);
