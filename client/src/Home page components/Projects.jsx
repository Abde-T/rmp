import React from "react";
import CardLoadingstate from "../ui/CardLoadingstate";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Projects = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  return (
    <>
      <div className="cards-">
      {!posts.length ? (
            new Array(4).fill(0).map((_, index) =>(
              <CardLoadingstate key={index} />
            ))
          ) : (
            posts.map((post) => (
              <Post post={post} setCurrentId={setCurrentId}  key={post.id}/>
            ))
          )}
      </div>
    </>
  );
};

export default Projects;
