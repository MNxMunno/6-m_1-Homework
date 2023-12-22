/* eslint-disable no-unused-vars */
import React from "react";
import Clients from "./clients/Clients";
import Contents from "./contents/Contents";
import Hero from "./hero/Hero";
import Join from "./join/Join";
import Price from "./price/Price";
import Products from "./products/Products";
import "./Main.css";

function Main() {
  return (
    <div>
      <Hero />
      <Products />
      <Contents />
      <Price />
      <Clients />
      <Join />
    </div>
  );
}

export default Main;
