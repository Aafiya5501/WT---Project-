// src/components/BlogList.js
import React from 'react';

const BlogList = ({ posts, onDelete }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
