import React from "react";

const Developers = () => {
  const array1 = [1, 2, 3, 4,5,6];
  return (
    <>
      <div className="devContainer">
        <div className="dev__wrapper">
          <h1>Developers</h1>
          <p>see more</p>
        </div>
        <div className="cards">
          {array1.fill(
            <div className="card-" >
              <div className="card_load"></div>
              <div className="card_load_extreme_title"></div>
              <div className="card_load_extreme_descripion"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Developers;
