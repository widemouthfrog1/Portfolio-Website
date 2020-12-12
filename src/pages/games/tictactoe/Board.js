import React, { useContext } from 'react';
import { State } from "./State";
import Tile from "./Tile";
import "./Board.css"

const Board = () => {
  const { board } = useContext(State);
  let tileList = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      tileList.push({ i, j });
    }
  }
  return (
    <div className="board">
      {
        tileList.map(
          (obj, i) => {
            return <Tile x={obj.i} y={obj.j} key={i} />;
          }
        )
      }
    </div>
  );
}

export default Board;
