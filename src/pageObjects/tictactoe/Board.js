import React, { useContext } from "react";
import Tile from "./Tile";
import "./Board.css";
import { TicTacToeContext } from "./TicTacToeContext";

const renderTile = (board, x, y) => {
  return <Tile value={board[x][y]} x={x} y={y} />;
};

const Board = () => {
  const [board, history, moveNumber] = useContext(TicTacToeContext);
  return (
    <div className="board-rows">
      <div className="board-row">
        {renderTile(board, 0, 2)}
        {renderTile(board, 1, 2)}
        {renderTile(board, 2, 2)}
      </div>
      <div className="board-row">
        {renderTile(board, 0, 1)}
        {renderTile(board, 1, 1)}
        {renderTile(board, 2, 1)}
      </div>
      <div className="board-row">
        {renderTile(board, 0, 0)}
        {renderTile(board, 1, 0)}
        {renderTile(board, 2, 0)}
      </div>
    </div>
  );
};

export default Board;
