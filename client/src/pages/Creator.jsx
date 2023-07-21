import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getPostsByCreator, getPostsBySearch } from "../actions/posts";
import { Avatar, CircularProgress } from "@mui/material";
import Post from "../Home page components/Post/Post";
import Nav from "../Home page components/Nav";
import SideBar from "../Home page components/SideBar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Creator = ({ currentID, setCurrentId }) => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user)

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/tags")) {
      dispatch(getPostsBySearch({ tags: name }));
    } else {
      dispatch(getPostsByCreator(name));
    }
  }, []);

  if (!posts.length && !isLoading)
    return (
      <>
        <Nav currentID={currentID} setCurrentId={setCurrentId} />
        <SideBar />
        <div className="creatorPosts__container">
          <div className="creatorPosts__wrapper">
            <div className="creatorPosts__details">
              <div className="creatorPosts_">
                <Avatar
                  className="user__icon"
                  alt={user?.result.name}
                  src={user?.result.selectedFile}
                  sx={{ width: 100, height: 100 }}
                  style={{
                    backgroundColor: "#242424",
                    fontSize: "40px",
                    borderRadius:'5px'
                  }}
                  variant="square"
                >
                  {user?.result.name.charAt(0)}
                </Avatar>
                <div className="creator_credentials">
                  <h1>{user?.result.name}</h1>
                  <p>@{user?.result.name}</p>
                </div>
                <div className="creatorPosts__links">
                  <Link to={user?.result.linkedin} target="_blank">
                    <LinkedInIcon className="post__icon" />
                  </Link>
                  <Link to={user?.result.gitHub} target="_blank">
                    <GitHubIcon className="post__icon" />
                  </Link>
                  <Link to={user?.result.website} target="_blank">
                    <OpenInNewIcon className="post__icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          No posts
          
        </div>
      </>
    );

  return (
    <>
      <Nav currentID={currentID} setCurrentId={setCurrentId} />
      <SideBar />
      <div className="creatorPosts__container">
        <div className="creatorPosts__wrapper">
          <div className="creatorPosts__details">
            <div className="creatorPosts_">
              <Avatar
                className="user__icon"
                alt={user?.result.name}
                sx={{ width: 50, height: 50 }}
                style={{
                  backgroundColor: "#242424",
                  fontSize: "40px",
                }}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <div className="creator_credentials">
                <h1>{user?.result.name}</h1>
                <p>@{user?.result.name}</p>
              </div>
              <div className="creatorPosts__links">
                <Link to={user?.result.linkedin} target="_blank">
                  <LinkedInIcon className="post__icon" />
                </Link>
                <Link to={user?.result.gitHub} target="_blank">
                  <GitHubIcon className="post__icon" />
                </Link>
                <Link to={user?.result.website} target="_blank">
                  <OpenInNewIcon className="post__icon" />
                </Link>
              </div>
            </div>
          </div>

          {isLoading ? (
            <CircularProgress />
          ) : (
            <div className="creatorPost__wrapper">
              {posts?.map((post, index) => (
                  <Post
                    currentID={currentID}
                    post={post}
                    setCurrentId={setCurrentId}
                    key={index}
                  />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Creator;
