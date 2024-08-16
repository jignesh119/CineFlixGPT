import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import useRoute from "./utils/useRoute";
import { FirebaseProvider } from "./context/firebase";
import "./index.css";

const router = useRoute();
createRoot(document.getElementById("root")).render(
  <FirebaseProvider>
    <RouterProvider router={router} />,
  </FirebaseProvider>,
);
