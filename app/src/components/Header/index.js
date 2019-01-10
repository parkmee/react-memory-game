import React from "react";
import "./style.css";

const Header = () =>
  <div className="game-header rounded shadow">
      <h1 className="game-title text-center">React Memory Game</h1>
      <h5 className="game-instructions text-center">Click on an image to win points, but don't click on an image more than once!</h5>
  </div>

export default Header;
