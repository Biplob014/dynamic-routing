import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/navigate.module.css";
const Navigate = (props) => {
  const [isloggedin, setIsloggedIn] = useState(false);

  const handleClick = () => {
    setIsloggedIn(!isloggedin);
    props.isloggedin(isloggedin);
  };
  return (
    <nav>
      <NavLink to="/" className={style["nav-link"]}>
        Home
      </NavLink>
      <NavLink to="/about" className={style["nav-link"]}>
        About
      </NavLink>
      <NavLink to="/users" className={style["nav-link"]}>
        Users
      </NavLink>
      <NavLink to="/blogs" className={style["nav-link"]}>
        Blogs
      </NavLink>
      <NavLink to="/add-blog" className={style["nav-link"]}>
        Add Blog
      </NavLink>
    </nav>
  );
};

export default Navigate;
