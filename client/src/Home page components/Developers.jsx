import React from "react";

const Developers = () => {
  return (
    <>
      <div className="devContainer">
        <div className="dev__wrapper">
          <h1>Developers</h1>
          <p>see more</p>
        </div>
        <div className="cards">
          {new Array(4).fill(0).map((_, index) =>(
            <div className="card-" key={index}>
              <div className="card_load"></div>
              <div className="card_load_extreme_title"></div>
              <div className="card_load_extreme_descripion"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Developers;
