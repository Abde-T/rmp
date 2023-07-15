import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { likePost, deletePost } from "../../actions/posts";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { ButtonBase, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UpdateIcon from "@mui/icons-material/Update";
import Modal from "@mui/material/Modal";
import Form from "../form/Form";
import { useNavigate } from "react-router-dom";

const Likes = ({ likes, userId }) => {
  if (!likes || !Array.isArray(likes) || likes.length === 0) {
    return null;
  }

  const likedByUser = likes.includes(userId);

  return (
    <>
      {likedByUser ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length !== 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpOffAltIcon fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      )}
    </>
  );
};

const Post = ({ currentID, post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result.googleId || user?.result?._id;

  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hasLikedPost = post?.likes?.includes(userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes((prevLikes) => prevLikes.filter((id) => id !== userId));
    } else {
      setLikes((prevLikes) => [...prevLikes, userId]);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [Open, setOpen] = useState(false);
  const HandleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);

  const openPost = () => navigate(`/posts/${post._id}`);

  return (
    <div className="cardd">
      <ButtonBase className="card__button">
        <div className="Description">
          <img
            className="card__image"
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt="project image"
            loading="lazy"
          />
          {(user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <div className="dropMenu__button">
              <IconButton
                onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MoreHorizIcon fontSize="default" className="menu__icon" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <button
                    className="button-confirm delete__button"
                    onClick={() => dispatch(deletePost(post._id))}
                  >
                    <DeleteForeverIcon className="delet__ico" /> Delete
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="button-confirm delete__button"
                    onClick={(e) => {
                      setCurrentId(post._id);
                      HandleOpen();
                      e.stopPropagation();
                    }}
                  >
                    <UpdateIcon className="update__ico" /> update
                  </button>
                  <Modal open={Open} onClose={HandleClose}>
                    <div className="upload__modal">
                      <Form currentID={currentID} setCurrentId={setCurrentId} />
                    </div>
                  </Modal>
                </MenuItem>
              </Menu>
            </div>
          )}
        </div>
      </ButtonBase>
      <div className="imge">
        <div className="Id">
          <p onClick={openPost}> {post.title} </p>
          <p className="UserName"> {post.name} </p>
          <p>{moment(post.createdAt).fromNow()}</p>
          {Array.isArray(post.tags) && (
            <p>{post.tags.map((tag) => `#${tag} `)}</p>
          )}
          <button
            onClick={handleLike}
            disabled={!user?.result}
            className="like_button"
          >
            <Likes likes={likes} userId={userId} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
