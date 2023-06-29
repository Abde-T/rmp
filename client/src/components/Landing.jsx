import React from "react";
import code from "../assets/code.gif";
import logo from "../assets/logo.png";

const Landing = () => {
  return (
    <div className="landing__container">
      <div className="row">
        <nav>
            <img src={logo} className="logo" alt="React logo" />
        </nav>
        <div className="landing__wrapper">
            <h1>Always ready to make your life better</h1>
            <img src={code} className="code" alt="React logo" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
