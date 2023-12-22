/* eslint-disable no-unused-vars */
import React from "react";
import "./Products.css";

function Products() {
  return (
    <section className="product" id="product">
      <div className="container">
        <div className="product-content">
          <h2>Product was Built Specifically for You</h2>
          <div className="product_cards">
            <div className="product_card">
              <img src="product1.svg" alt="icon" />
              <h3>First click tests</h3>
              <p>While most people enjoy casino gambling,</p>
            </div>
            <div className="product_card">
              <img src="product2.svg" alt="icon" />
              <h3>Design surveys</h3>
              <p>Sports betting, lottery and bingo playing for the fun</p>
            </div>
            <div className="product_card">
              <img src="product3.svg" alt="icon" />
              <h3>Preference tests</h3>
              <p>The Myspace page defines the individual.</p>
            </div>
            <div className="product_card">
              <img src="product4.svg" alt="icon" />
              <h3>Five second tests</h3>
              <p>Personal choices and the overall personality of the person.</p>
            </div>
          </div>
          <div className="product_btns">
            <a href="#" className="product-btn">
              SIGN UP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
