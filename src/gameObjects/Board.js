import React from "react";
import Tile from "./Tile";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: Array(3)
        .fill(0)
        .map((row) => new Array(3).fill(null)),
      xTurn: true,
    };
  }

  handleClick(x, y) {
    const tiles = this.state.tiles.slice();
    if (calculateWinner(tiles) || tiles[x][y]) {
      return;
    }
    tiles[x][y] = this.state.xTurn ? "X" : "O";
    this.setState({ tiles: tiles, xTurn: !this.state.xTurn });
  }

  renderTile(x, y) {
    return (
      <Tile
        value={this.state.tiles[x][y]}
        onClick={() => this.handleClick(x, y)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.tiles);
    let status;
    if (winner !== null) {
      status = "Winner:" + winner;
    } else {
      status = "Next player:" + (this.state.xTurn ? "X" : "O");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderTile(0, 2)}
          {this.renderTile(1, 2)}
          {this.renderTile(2, 2)}
        </div>
        <div className="board-row">
          {this.renderTile(0, 1)}
          {this.renderTile(1, 1)}
          {this.renderTile(2, 1)}
        </div>
        <div className="board-row">
          {this.renderTile(0, 0)}
          {this.renderTile(1, 0)}
          {this.renderTile(2, 0)}
        </div>
      </div>
    );
  }
}

function calculateWinner(tiles) {
  for (let i = 0; i < tiles.length; i++) {
    if (colWin(i, tiles)) {
      return tiles[i][0];
    }
    if (rowWin(i, tiles)) {
      return tiles[0][i];
    }
  }
  for (let x = 0; x < tiles.length; x++) {
    for (let y = 0; y < tiles[x].length; y++) {
      if (diagWin(x, y, true, 3, tiles)) {
        return tiles[x][y];
      }
      if (diagWin(x, y, false, 3, tiles)) {
        return tiles[x][y];
      }
    }
  }
  return null;
}
function colWin(col, tiles) {
  let value = null;
  value = tiles[col][0];
  if (value === null) {
    return false;
  }
  for (let i = 1; i < tiles[col].length; i++) {
    if (tiles[col][i] !== value) {
      return false;
    }
  }
  return true;
}

function rowWin(row, tiles) {
  let value = tiles[0][row];
  if (value === null) {
    return false;
  }
  for (let i = 1; i < tiles.length; i++) {
    if (tiles[i][row] !== value) {
      return false;
    }
  }
  return true;
}

function diagWin(x, y, increasing, count, tiles) {
  let value = tiles[x][y];
  if (value === null) {
    return false;
  }
  for (let i = 0; i < count; i++) {
    if (
      x + i === tiles.length ||
      x + i < 0 ||
      y + (increasing ? i : -i) === tiles[x].length ||
      y + (increasing ? i : -i) < 0 ||
      tiles[x + i][y + (increasing ? i : -i)] !== value
    ) {
      return false;
    }
  }
  return true;
}
export default Board;
