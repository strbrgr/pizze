import React from "react";
import ReactDOM from "react-dom/client";
import "./UI/Layout/index.css";
import "@radix-ui/themes/styles.css";
import { AppRoutes } from "./routes";
import AppProvider from "./AppProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>,
);
