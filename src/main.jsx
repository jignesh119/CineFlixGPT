import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import useRoute from "./utils/useRoute";
import "./index.css";

const router = useRoute();
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
