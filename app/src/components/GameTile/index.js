import React from "react";
import "./style.css";

const GameTile = (props) =>
<div className="card">
  <div className="img-container">
    <img alt={props.name} src={props.image} onClick={props.onItemClicked} />
  </div>
</div>

export default GameTile;