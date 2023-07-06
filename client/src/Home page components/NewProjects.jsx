import React from 'react';
import CardLoadingstate from '../ui/CardLoadingstate';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const NewProjects = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  return (
    <>
      <div className="cardContainer">
        <div className="card__wrapper">
          <h1>Latest Projects</h1>
          <p>see more</p>
        </div>
        {/* cards */}
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
      </div>
    </>
  );
};

export default NewProjects;