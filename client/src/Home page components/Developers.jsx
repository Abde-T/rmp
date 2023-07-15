import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../api";


const Developers = () => {
  // const { users } = useSelector((state) => state.users);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  return (
    <>
      <div className="devContainer">
        <div className="dev__wrapper">
          <h1>Developers</h1>
          <p>see more</p>
        </div>
        <div className="card_load_">
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
