import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from './actions';

const BlogList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
