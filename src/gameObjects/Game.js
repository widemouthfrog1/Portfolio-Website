import React from "react";
import Board from "./Board";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          tiles: Array(3)
            .fill(0)
            .map((row) => new Array(3).fill(null)),
        },
      ],
      stepNumber: 0,
      xTurn: true,
    };
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.tiles);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to start";
      if (this.state.stepNumber != move) {
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      } else {
        return;
      }
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            tiles={current.tiles}
            onClick={(x, y) => this.handleClick(x, y)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  handleClick(x, y) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    let tiles = [];
    for (let i = 0; i < current.tiles.length; i++) {
      tiles.push(current.tiles[i].slice());
    }
    if (calculateWinner(tiles) || tiles[x][y]) {
      return;
    }
    tiles[x][y] = this.state.xTurn ? "X" : "O";
    this.setState({
      history: history.concat([{ tiles: tiles }]),
      stepNumber: history.length,
      xTurn: !this.state.xTurn,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xTurn: step % 2 === 0,
    });
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

export default Game;
