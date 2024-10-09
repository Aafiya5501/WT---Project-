// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

const App = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  // Save posts to localStorage on change
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    const newPost = { id: Date.now(), ...post };
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="container">
      <h1>Blog Application</h1>
      <BlogForm onSubmit={addPost} />
      <BlogList posts={posts} onDelete={deletePost} />
    </div>
  );
};

export default App;
