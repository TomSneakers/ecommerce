import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Panier from "./views/panier";
import Root from "./routes/root";
import Accueil from "./views/Accueil";
import Jordan from "./views/Jordan";
import Nike from "./views/Nike";
import Adidas from "./views/Adidas";
import Inscription from "./views/Inscription";
import CartContextProvider from "./context/CartContext";

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
      {
        path: "Inscription",
        element: <Inscription />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CartContextProvider>
);
