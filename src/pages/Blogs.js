import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Data from "../Data";
import style from "../styles/blogs.module.css";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState(Data);

  const truncataStr = (str, num) => {
    if (str.length > num) return str.slice(0, 100) + ".....";
    else return str;
  };
  return (
    <div>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{truncataStr(body, 500)}</p>
              <NavLink
                to={title}
                state={{ title, body }}
                className={style.link}
              >
                Learn more
              </NavLink>
            </article>
          );
        })}
        <button onClick={() => navigate("/")}>Go to home</button>
      </section>
    </div>
  );
};

export default Blogs;
