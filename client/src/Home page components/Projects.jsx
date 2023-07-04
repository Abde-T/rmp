import React from "react";

const Projects = () => {
  const array1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <div className="cards-">
        {array1.fill(
          <div className="card_" >
            <div className="card-1"></div>
            <div className="right">
              <div className="card-2"></div>
              <div className="card-3"></div>
              <div className="card-3"></div>
              <div className="card-3"></div>
              <div className="card-3"></div>
              <div className="bottom">
                <div className="card-4"></div>
                <div className="card-4"></div>
                <div className="card-4"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
