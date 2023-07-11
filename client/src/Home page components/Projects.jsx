import React, { useState } from "react";
import CardLoadingstate from "../ui/CardLoadingstate";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Projects = ({ currentID, setCurrentId }) => {
  const {posts} = useSelector((state) => state.posts);
 
  const query = useQuery();
  const page = query.get('page') || 1;
  const [tags, setTags] = useState([]);
  const searchQuery = query.get('searchQuery');

  return (
    <>
      <div className="cards-">
        {!posts?.length >0
          ? new Array(4)
              .fill(0)
              .map((_, index) => <CardLoadingstate key={index} />)
          : posts.map((post) => (
              <Post
                currentID={currentID}
                post={post}
                setCurrentId={setCurrentId}
                key={post._id}
              />
            ))}
      </div>
      {(!searchQuery && !tags.length) && (
      <div className="page">
        <Pagination page={page} />
      </div>  
      )}
    </>
  );
};

export default Projects;
