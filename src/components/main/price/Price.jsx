/* eslint-disable no-unused-vars */
import React from "react";
import "./Price.css";

function Price() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-content">
          <h6>Price Table</h6>
          <p className="title_price">We offer competitive price</p>
          <div className="pricing_cards">
            <div className="pricing_card">
              <h6>Free</h6>
              <p className="price_title">Brief price description</p>
              <p className="price__">
                0 <sup>%</sup>
                <sub>Per / month</sub>
              </p>
              <p className="price_text">Only 2 Operators</p>
              <p className="price_text">Notifications</p>
              <p className="price_text">Landing Pages</p>
              <div className="price_btns">
                <a href="#" className="price_btn">
                  Order Now
                </a>
              </div>
            </div>
            <div className="pricing_card">
              <h6>Standard</h6>
              <p className="price_title">Brief price description</p>
              <p className="price__">
                5 <sup>%</sup>
                <sub>Per / month</sub>
              </p>
              <p className="price_text">5+ Operators</p>
              <p className="price_text">Notifications</p>
              <p className="price_text">Landing Pages</p>
              <div className="price_btns">
                <a href="#" className="price_btn">
                  Order Now
                </a>
              </div>
            </div>
            <div className="pricing_card">
              <h6>Premium</h6>
              <p className="price_title">Brief price description</p>
              <p className="price__">
                10 <sup>%</sup>
                <sub>Per / month</sub>
              </p>
              <p className="price_text">10+ Operators</p>
              <p className="price_text">Notifications</p>
              <p className="price_text">Landing Pages</p>
              <div className="price_btns">
                <a href="#" className="price_btn">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
