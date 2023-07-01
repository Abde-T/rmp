import React from "react";
import coder from "../assets/coder.gif";

const FormSection = () => {
  return (
    <div className="form__container">
      <div className="row">
        <div className="form__wrapper">
          <form className="form">
            <div name="title">
              sign up to continue
            </div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input"
            />
            <button className="button-confirm">Let`s go →</button>
          </form>
          <img src={coder} className="coder" alt="coder gif" />
          <h2 className="form__phrase">
            Your Portfolio Journey Starts Here: Join <span className="glitch" id="textGlitch">Review My Portfolio
            </span> and Embark on a Path of Continuous Improvement.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
