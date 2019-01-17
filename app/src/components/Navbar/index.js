import React from "react";
import "./style.css";

const Navbar = (props) =>
  <div>
    <div className="navbar bg-dark row sticky-top shadow">
      <div className="nav-section game-logo col-4 text-center">
        Clicky Game
      </div>
      <div className="nav-section col-4 text-center">
        {props.message}
      </div>
      <div className="nav-section col-4 text-center">
        Score: {props.score} | Top Score: {props.topScore}
      </div>
    </div>
  </div>

export default Navbar;