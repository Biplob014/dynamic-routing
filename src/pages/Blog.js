import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/blog.module.css";
const Blog = () => {
  const location = useLocation();
  const { title, body } = location.state;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body.slice(0, 1000)}</p>
      <p>{body.slice(1001, 2000)}</p>
    </div>
  );
};

export default Blog;
