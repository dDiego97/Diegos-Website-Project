import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleScrollNav = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={() => handleScrollNav("top")}>
      </div>

      <div className="navbar-links">
        <button onClick={() => handleScrollNav("top")}>Home</button>
        <button onClick={() => handleScrollNav("resume")}>Resumes</button>
        <button onClick={() => handleScrollNav("experience")}>Experience</button>
        <button onClick={() => handleScrollNav("projects")}>Projects</button>
      </div>
    </nav>
  );
}

export default Navbar;
