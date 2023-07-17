import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../actions/posts";
import { useNavigate } from "react-router-dom";

const Form = ({ currentID, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const navigate = useNavigate()
  const post = useSelector((state) => (currentID ? state.posts.posts.find((message) => message._id === currentID) : null));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const user = JSON.parse(localStorage.getItem("profile"));
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentID === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
      clear();
    } else {
      dispatch(
        updatePost(currentID, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  return (
    <>
      <form className="nav__form" onSubmit={handleSubmit} autoComplete="off">
        <div name="title">{currentID ? `Editing "${post.title}"` : 'Upload project' }</div>
        <input
          type="text"
          placeholder="Project title"
          name="ProjectName"
          className="input_"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <textarea
          type="text"
          placeholder="Description"
          name="Description"
          className="input_ input__desc"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        >
        </textarea>
        <input
          type="text"
          placeholder="tags"
          name="tags"
          className="input_"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className="form__buttons">
          <div className="input__button">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <button className="button-confirm" type="button" onClick={clear}>
            Clear
          </button>
        </div>
        <button type="submit" className="button-confirm" id="post__button">
          Post →
        </button>
      </form>
    </>
  );
};

export default Form;
