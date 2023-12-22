/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero_cards">
          <div className="hero_card">
            <h1>Work at the speed of thought</h1>
            <p>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="hero-btns">
              <a href="#" className="hero-btn">
                Get started
              </a>
              <a href="#" className="hero-btn">
                <svg
                  id="play"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 6v12l10-6z"></path>
                </svg>
                Watch the Video
              </a>
            </div>
          </div>
          <div className="hero_card">
            <img src="hero--img.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
