/* eslint-disable no-unused-vars */
import React from "react";
import "./Clients.css";

function Clients() {
  return (
    <section className="customer" id="customer">
      <div className="container">
        <div className="customer-content">
          <h6>What Clients Say</h6>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="customer_cards">
            <div className="customer_card">
              <img src="star.svg" alt="icon" />
              <p className="customer_text">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <div className="custo_card">
                <img src="customer-1.svg" alt="img" />
                <div className="custo_text">
                  <h6 className="custo_title">Wahid Ari</h6>
                  <b>Designer</b>
                </div>
              </div>
            </div>
            <div className="customer_card">
              <img src="star.svg" alt="icon" />
              <p className="customer_text">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <div className="custo_card">
                <img src="customer-2.svg" alt="img" />
                <div className="custo_text">
                  <h6 className="custo_title">Wahid Ari</h6>
                  <b>Designer</b>
                </div>
              </div>
            </div>
            <div className="customer_card">
              <img src="star.svg" alt="icon" />
              <p className="customer_text">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <div className="custo_card">
                <img src="customer-3.svg" alt="img" />
                <div className="custo_text">
                  <h6 className="custo_title">Wahid Ari</h6>
                  <b>Designer</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
