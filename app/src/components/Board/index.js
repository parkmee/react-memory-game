import React from "react";
import "./style.css";

const Board = (props) =>
<div className="game-board rounded shadow">
  {props.children}
</div>

export default Board;