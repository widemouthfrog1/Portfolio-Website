import React, { useState, createContext } from 'react';

export const State = createContext();

const StateProvider = (props) => {
  const [board, setBoard] = useState([Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)]);
  const [history, setHistory] = useState([board]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const play = (x, y) => {
    if (winner !== null || historyIndex !== 0) {
      return;
    }
    let value = "";
    if (xIsNext) {
      value = "X";
    } else {
      value = "O";
    }
    let newBoard = [];
    for (let i = 0; i < board.length; i++) {
      let column = [...board[i]];
      for (let j = 0; j < board[i].length; j++) {
        if (x === i) {
          column[y] = value;
        }
      }
      newBoard.push(column);
    }
    let newHistory = [newBoard, ...history];
    setHistory(newHistory);
    setBoard(newBoard);
    if (wins(x, y, value)) {
      setWinner(value + " Wins!");
    } else if (tie(x, y)) {
      setWinner("Tie!");
    }
    setXIsNext(!xIsNext);
  }

  const lookup = (turnNumber) => {
    let newHistoryIndex = history.length - (turnNumber + 1);
    setHistoryIndex(newHistoryIndex);
    setBoard([...history[newHistoryIndex]]);
  }

  const reset = () => {
    setBoard([Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)]);
    setHistory([[Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)]]);
    setHistoryIndex(0);
    setXIsNext(true);
    setWinner(null);
  }

  const wins = (x, y, value) => {
    if (horizontalWin(x, y, value)) {
      console.log("horizontal win");
      return true;
    }
    if (verticalWin(x, y, value)) {
      console.log("vertical win");
      return true;
    }
    if (diagAscWin(x, y, value)) {
      console.log("diag asc win");
      return true;
    }
    if (diagDescWin(x, y, value)) {
      console.log("diag desc win");
      return true;
    }
    return false;
  }

  const horizontalWin = (x, y, value) => {
    for (let i = 0; i < board.length; i++) {
      if (i !== x && board[i][y] !== value) {
        return false;
      }
    }
    return true;
  }
  const verticalWin = (x, y, value) => {
    for (let i = 0; i < board[x].length; i++) {
      if (i !== y && board[x][i] !== value) {
        return false;
      }
    }
    return true;
  }

  const diagAscWin = (x, y, value) => {
    if ((x === 0 && y !== 2) || (x === 1 && y !== 1) || (x === 2 && y !== 0)) {
      return false;
    }
    for (let i = 0; i < board.length; i++) {
      if (2 - i !== y && board[i][2 - i] !== value) {
        return false;
      }
    }
    return true;
  }

  const diagDescWin = (x, y, value) => {
    if ((x === 0 && y !== 0) || (x === 1 && y !== 1) || (x === 2 && y !== 2)) {
      return false;
    }
    for (let i = 0; i < board.length; i++) {
      if (i !== y && board[i][i] !== value) {
        return false;
      }
    }
    return true;
  }
  const tie = (x, y) => {
    if (winner === null) {
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
          if (!(x === i && y === j) && board[i][j] === null) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  return (
    <State.Provider value={{ board, history, historyIndex, winner, xIsNext, lookup, play, reset }}>
      {props.children}
    </State.Provider>
  );
}

export default StateProvider;