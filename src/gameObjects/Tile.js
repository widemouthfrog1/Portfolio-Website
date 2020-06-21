import React from "react";

function Tile(props) {
  return (
    <button className="tile" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Tile;
