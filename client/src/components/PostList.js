// src/components/PostList.js
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <p>{post.content}</p>
            <p>Likes: {post.likes}</p>
            <p>Comments: {post.comments}</p>
            <p>Shares: {post.shares}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
