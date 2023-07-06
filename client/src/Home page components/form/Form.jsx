import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import FileBase from 'react-file-base64';
import { createPost, updatePost } from "../../actions/posts";

const Form = ({currentID, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        Description: "",
        tags: "",
        selectedFile: "",
      });
    
      const post = useSelector((state) =>
        currentID ? state.posts.find((message) => message._id === currentID) : null
      );
    
      const dispatch = useDispatch();
    
      useEffect(() => {
        if (post) setPostData(post);
      }, [post]);
    
      const clear = () => {
        setCurrentId(0);
        setPostData({
          creator: "",
          title: "",
          Description: "",
          tags: "",
          selectedFile: "",
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentID === 0) {
          dispatch(createPost(postData));
          clear();
        } else {
           dispatch(updatePost(currentID, postData));
          clear();
        }
      };
    return (
        <>
          <form className="nav__form" onSubmit={handleSubmit}>
                <div name="title">Upload project</div>
                <input
                  type="text"
                  placeholder="creator"
                  name="creator"
                  className="input_"
                  value={postData.creator}
                  onChange={(e) =>
                    setPostData({ ...postData, creator: e.target.value })
                  }
                />
                <input
                  type="text"
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
                    setPostData({ ...postData, tags: e.target.value.split(',')})
                  }
                />
             <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                <button className="button-confirm">Post →</button>
                <button className="button-confirm" onClick={clear}>Clear</button>
              </form>  
        </>
    );
};

export default Form;