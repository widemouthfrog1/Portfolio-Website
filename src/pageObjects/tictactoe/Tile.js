import React from "react";
import "./Tile.css";

function Tile(props) {
  return (
    <button className="tile" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Tile;
