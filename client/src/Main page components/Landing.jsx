import React from "react";
import code from "../assets/code.gif";
import logo from "../assets/logo.png";
import "./MainPage.css";
const Landing = () => {
  return (
    <div className="landing__container">
      <div className="row">
        <nav className="main__nav">
          <img src={logo} className="logo" alt="React logo" />
        </nav>
        <div className="landing__wrapper">
          <div className="containerGlitch">
            <h1 className="landing__phrase">
              Transform Your Portfolio Experience: Engage with a Supportive
              Community on<span className="glitch" id="textGlitch"> Review My Portfolio
              </span> and Witness the Difference.
            </h1>
          </div>
          <img src={code} className="code" alt="React logo" />
        </div>
        <button className="landing__button"> Level up your portfolio - Join now! </button>
      </div>
    </div>
  );
};

export default Landing;
