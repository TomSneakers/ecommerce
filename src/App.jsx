import "./App.css";
import "./component/navbar.jsx";
import NavBar from "./component/navbar.jsx";
import Box from "./component/box-marques";
import React from "react";
import Card from "./component/Card";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <h1 className="text-center font-bold text-6xl">
        Bienvenue sur mon ecommerce
      </h1>
      <Box className="m-auto" />
      <Card />
    </React.Fragment>
  );
}
