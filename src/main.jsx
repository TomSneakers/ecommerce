import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Panier from "./views/panier";
import Root from "./routes/root";
import Accueil from "./views/Accueil";
import Jordan from "./views/Jordan";
import Nike from "./views/Nike";
import Adidas from "./views/Adidas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "Panier",
        element: <Panier />,
      },
      {
        path: "",
        element: <Accueil />,
      },
      {
        path: "Jordan",
        element: <Jordan />,
      },
      {
        path: "Nike",
        element: <Nike />,
      },
      {
        path: "Adidas",
        element: <Adidas />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
