import test from "../component/test.jsx";
import "../component/navbar.jsx";
import NavBar from "../component/navbar.jsx";
import React from "react";
import Footer from "../component/footer.jsx";
import { Outlet } from "react-router-dom";
import "../index.css";
import TTest from "../component/test.jsx";

export default function Root() {
  return (
    <React.Fragment>
      <TTest />
      <NavBar />
      <h1 className="text-center font-bold text-6xl">
        Bienvenue sur mon ecommerce
      </h1>
      <div className="outlet">
        Ceci est l'outlet
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
}
