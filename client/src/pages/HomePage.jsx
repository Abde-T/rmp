import React, { useEffect, useState } from "react";
import SideBar from "../Home page components/SideBar";
import Featured from "../Home page components/Featured";
import Nav from "../Home page components/Nav";
import Developers from "../Home page components/Developers";
import NewProjects from "../Home page components/NewProjects";
import Projects from "../Home page components/Projects";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
function HomePage(props) {
  const [currentID, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentID, dispatch]);

  return (
    <>
      <SideBar />
      <Nav currentID={currentID} setCurrentId={setCurrentId} />
      <div className="HomePage__container">
          <Featured currentID={currentID} setCurrentId={setCurrentId} />
          <Developers />
          <NewProjects currentID={currentID} setCurrentId={setCurrentId} />
          <Projects currentID={currentID} setCurrentId={setCurrentId} />
      </div>
    </>
  );
}

export default HomePage;
