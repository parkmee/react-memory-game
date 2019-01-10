import React from "react";
import "./style.css";

const Navbar = () =>
  <div>
    <div className="navbar bg-dark row sticky-top shadow">
      <div className="nav-section game-logo col-4 text-center">
        Clicky Game
      </div>
      <div className="nav-section col-4 text-center">
        Click to Start!
      </div>
      <div className="nav-section col-4 text-center">
        Score: 0 | Top Score: 0
      </div>
    </div>
  </div>

export default Navbar;