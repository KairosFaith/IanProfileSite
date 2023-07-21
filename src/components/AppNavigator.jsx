import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "../screens/Welcome";
import ErrorPage from "../screens/ErrorPage";
import Ian from "../assets/ian.png";
import AboutMe from "../screens/aboutMe/AboutMe";
import Blogs from "../screens/blogs/Blogs";

const AppNavigator = () => {
  return (
    <div>
    <Router>
      <nav
        style={{
          textAlign: "center",
          flexDirection: "row",
          padding: "1.25rem",
          backgroundColor:"black",
          display: "flex",
          justifyContent:"center"
        }}
      >
         <Link
          to="/"
          style={{
            color: "purple",
            textDecoration: "none",
          }}
        >
          <img
            style={{ marginRight: "0.625rem", width: "5rem", height: "5rem", margin:"-0.625rem", paddingRight:"0.625rem" }}
            src={Ian}
            alt="Company Logo"
          ></img>
         
        </Link>
        <Link
          to="/gameProjects"
          style={{
            fontSize:"1.125rem",
            color: "gold",
            textDecoration: "none",
            padding: "1.25rem"
          }}
        >
          
          Game Projects
        </Link>

        <Link
          to="/musicProjects"
          style={{
            fontSize:"1.125rem",
            color: "gold",
            textDecoration: "none",
            padding: "1.25rem"
          }}
        >
          
          Music Projects
        </Link>

        <Link
          to="/"
          style={{
            fontSize:"1.125rem",
            color: "gold",
            textDecoration: "none",
            padding: "1.25rem"
          }}
        >
          
          Contact
        </Link>
      </nav>

      <Routes>
       
        <Route path="/gameProjects" element={<AboutMe />} />
        <Route path="/musicProjects" element={<Blogs />} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default AppNavigator;
