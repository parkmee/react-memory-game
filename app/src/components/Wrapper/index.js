import React from "react";
import "./style.css";

const Wrapper = (props) =>
<div className="game-board rounded shadow">
  {props.children}
</div>

export default Wrapper;