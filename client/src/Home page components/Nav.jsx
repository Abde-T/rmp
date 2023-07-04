import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import FileBase from 'react-file-base64';
import { createPost } from "../actions/posts";

const Nav = ({ currentId, setCurrentId }) => {
  document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]");
      currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
  });


  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    Description: "",
    tags: "",
    selectedFile: "",
  });

  // const post = useSelector((state) =>
  //   currentId ? state.posts.find((message) => message._id === currentId) : null
  // );

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);

  const clear = () => {
    // setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
    // if (currentId === 0) {
    //   clear();
    // } else {
    //    dispatch(updatePost(currentId, postData));
    //   clear();
    // }
  };

  return (
    <nav className="nav__container">
      <img src={logo} className="SideBar__logo" alt="RMP logo" />
      <div className="search">
        <div className="search-box">
          <div className="search-field">
            <input placeholder="Search..." className="input" type="text" />
            <div className="search-box-icon">
              <button className="btn-icon-content">
                <i className="search-icon">
                  <svg
                    xmlns="://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                      fill="#fff"
                    ></path>
                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="bell"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>

        <div className="header">
          <div className="dropdown" data-dropdown>
            <button className="link card_load-" data-dropdown-button></button>
            <div className="dropdown-menu">
              <form className="nav__form" onSubmit={handleSubmit}>
                <div name="title">Upload project</div>
                <input
                  type="title"
                  placeholder="Project title"
                  name="ProjectName"
                  className="input_"
                  value={postData.title}
                  onChange={(e) =>
                    setPostData({ ...postData, title: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Description"
                  name="Description"
                  className="input_"
                  value={postData.Description}
                  onChange={(e) =>
                    setPostData({ ...postData, Description: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="tags"
                  name="tags"
                  className="input_"
                  value={postData.tags}
                  onChange={(e) =>
                    setPostData({ ...postData, tags: e.target.value })
                  }
                />
             <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                <button className="button-confirm">Post →</button>
                <button className="button-confirm" onClick={clear}>Clear</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
