import React from "react";

const Details = () => {
  return (
    <div className="details__container">
      <div className="row">
        <h2 className="details__title">How It Works:</h2>
        <div className="details__wrapper">
          <div className="detail">
            <h2> create an account </h2>
            <button> JOIN NOW </button>
          </div>
          <div className="detail">
            <h2> Upload your Portfolio </h2>
            <button> JOIN NOW </button>
          </div>
          <div className="detail">
            <h2> GET FEEDBACK </h2>
            <button> JOIN NOW </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
