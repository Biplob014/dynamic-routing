import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// imported file
import Home from "./pages/Index";
import About from "./pages/About";
import Users from "./pages/Users";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import AddBlog from "./pages/AddBlog";
import Protected from "./layout/Protected";
import Navigate from "./layout/Navigate";
import { useState } from "react";
const App = () => {
  const [isloggedin, setIsloggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navigate isloggedin={isloggedin} />
      {
        <button onClick={() => setIsloggedIn(!isloggedin)}>
          {isloggedin ? "Log out" : "Log in"}
        </button>
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/add-blog"
          element={
            <Protected isloggedin={isloggedin}>
              <AddBlog />
            </Protected>
          }
        />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
