import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../src/actions/posts';
import { CircularProgress, Divider, Paper, Typography } from '@mui/material';
import Nav from '../Home page components/Nav';
import SideBar from '../Home page components/SideBar';
import CardLoadingstate from '../ui/CardLoadingstate';

const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
      dispatch(getPost(id));
    }, [id]);
  
    useEffect(() => {
      if (post) {
        dispatch(getPostsBySearch({ search: 'none', tags: post?.tags?.join(',') }));
      }
    }, [post]);
  
    if (!post) return null;
  
    const openPost = (_id) => navigate(`/posts/${_id}`);
  
    if (isLoading) {
      return (
        <Paper elevation={6} className={''}>
          <CardLoadingstate  />
        </Paper>
      );
    }
  
    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
    console.log(post)

    return (
      <>
        <Nav/>
        <SideBar/>
        <div className='post__container' style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className='post__wrapper'>
        <div className='post__details'>
          <h1 >{post.title}</h1>
          <p >{post?.tags?.map((tag) => `#${tag} `)}</p>
          <p >{post.message}</p>
          <p >Created by: <span>{post.name}</span></p>
          <p>{moment(post.createdAt).fromNow()}</p>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className='post__image--wrapper'>
          <img className='post__image' src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>
      {recommendedPosts.length && (
        <div className='recommendedPosts'>
          <h1 gutterBottom variant="h5">You might also like:</h1>
          <Divider />
          <div className=''>
            {recommendedPosts.map(({ title, name, likes, selectedFile, _id }) => (
              <div className='recommendedPost' onClick={() => openPost(_id)} key={_id}>
                <p >{post?.tags?.map((tag) => `#${tag} `)}</p>
                <p gutterBottom variant="h6">{title}</p>
                <p gutterBottom variant="subtitle2">{name}</p>
                <p gutterBottom variant="subtitle1">Likes: {likes.length}</p>
                <img src={selectedFile} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
      </>
    );
};

export default PostDetails;