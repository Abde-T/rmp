import React from "react";
import CardLoadingstate from "../ui/CardLoadingstate";
import Post from "../Home page components/Post/Post";
import { useSelector } from "react-redux";


const RandomProject = ({ currentID, setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledPosts = shuffleArray(posts);

  return (
    <>
      <div className="Random-project__container">
        <div className="cards-">
          {!isLoading
            ? new Array(8)
                .fill(0)
                .map((_, index) => <CardLoadingstate key={index} />)
            : shuffledPosts.map((post) => (
                <Post
                  currentID={currentID}
                  post={post}
                  setCurrentId={setCurrentId}
                  key={post._id}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default RandomProject;
