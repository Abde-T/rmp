import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { likePost, deletePost } from "../../actions/posts";
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
      <div className="cardd" key={post.id}>
        <div className="Description">
          <img
            className="card__image"
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt=""
          />
        </div>
        <div className="imge">
          <div >
          <img src="" alt="" className="Usericon"/>  
          <p className="UserName"> {post.creator} </p>
          </div>
          <div>
          <p className="Id"> {post.title} </p>
          <p className="Id">{moment(post.createdAt).fromNow()}</p>
          <p className="Id">{post.tags.map((tag) => `#${tag} `)}</p>
        <button onClick={() => dispatch(likePost(post._id))}>
          Like {post.likeCount}
        </button>
        <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
        <button onClick={() => setCurrentId(post._id)}>update</button>

          </div>
        </div>
      </div>
  );
};

export default Post;
