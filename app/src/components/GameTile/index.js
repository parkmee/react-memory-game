import React from "react";
import "./style.css";

const GameTile = (props) =>
<div className="card">
  <div className="img-container">
    <img id={props.id} alt={props.name} src={props.image} onClick={props.onItemClick} />
  </div>
</div>

export default GameTile;