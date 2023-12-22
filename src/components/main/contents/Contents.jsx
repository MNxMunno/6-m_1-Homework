/* eslint-disable no-unused-vars */
import React from "react";
import "./Contents.css";

function Contents() {
  return (
    <section className="carousel">
      <div className="container">
        <div className="carousel-content">
          <h6 className="carousel_text">Contents Strategies</h6>
          <p>
            We focus on ergonomics and meeting you where you work. It`s only a
            keystroke away.
          </p>
          <div className="owl-carousel owl-theme items">
            <div className="item">
              <img src="img1.png" alt="Image" />
              <p>
                By <b>Wahid Ari</b> | 03 March 2019
              </p>
              <h6>Increasing Prosperity With Positive Thinking</h6>
            </div>
            <div className="item">
              <img src="img2.png" alt="Image" />
              <p>
                By <b>Wahid Ari</b> | 03 March 2019
              </p>
              <h6>Motivation Is The First Step To Success</h6>
            </div>
            <div className="item">
              <img src="img3.png" alt="Image" />
              <p>
                By <b>Wahid Ari</b> | 03 March 2019
              </p>
              <h6>Success Steps For Your Personal Or Business</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contents;
