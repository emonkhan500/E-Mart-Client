import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "../src/Route.jsx";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
