import React, { useContext } from 'react';
import { State } from './State';
import "./Tile.css"

const Tile = ({ x, y }) => {
  const { board, play } = useContext(State);
  const size = 20;
  return <button onClick={() => play(x, y)} className="tile" style={{ marginLeft: (x - 1) * (size - 1) + 1 + "vh", marginTop: (y - 1) * (size - 1) + 1 + "vh" }}>{board[x][y]}</button>
}

export default Tile;
