import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
      <ToastContainer />
    </BrowserRouter>
  </React.Fragment>
);
