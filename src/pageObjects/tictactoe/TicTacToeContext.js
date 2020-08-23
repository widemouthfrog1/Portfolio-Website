import React, { createContext, useState } from "react";

export const TicTacToeContext = createContext();

const TicTacToeContextProvider = (props) => {
  let [turn, setTurn] = useState("X");
  let [board, setBoard] = useState(
    Array(3)
      .fill(0)
      .map(() => new Array(3).fill(null))
  );
  let [history, setHistory] = useState([]);
  let [moveNumber, setMoveNumber] = useState(-1);
  let [players, setPlayers] = useState([]);

  const insertLetter = (letter, x, y) => {
    if (letter !== turn) {
      return;
    }
    setHistory([...history, board.slice(0, board.length)]);

    let copy = board.slice(0, board.length);
    copy[x][y] = letter;
    setBoard(copy);
    if (letter === "X") {
      setTurn("X");
    } else {
      setTurn("O");
    }
  };

  const getWinner = () => {
    for (let i = 0; i < board.length; i++) {
      if (colWin(i, board)) {
        return board[i][0];
      }
      if (rowWin(i, board)) {
        return board[0][i];
      }
    }
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board[x].length; y++) {
        if (diagWin(x, y, true, 3, board)) {
          return board[x][y];
        }
        if (diagWin(x, y, false, 3, board)) {
          return board[x][y];
        }
      }
    }
    return null;
  };
  const colWin = (col) => {
    let value = null;
    value = board[col][0];
    if (value === null) {
      return false;
    }
    for (let i = 1; i < board[col].length; i++) {
      if (board[col][i] !== value) {
        return false;
      }
    }
    return true;
  };

  const rowWin = (row) => {
    let value = board[0][row];
    if (value === null) {
      return false;
    }
    for (let i = 1; i < board.length; i++) {
      if (board[i][row] !== value) {
        return false;
      }
    }
    return true;
  };

  const diagWin = (x, y, increasing, count) => {
    let value = board[x][y];
    if (value === null) {
      return false;
    }
    for (let i = 0; i < count; i++) {
      if (
        x + i === board.length ||
        x + i < 0 ||
        y + (increasing ? i : -i) === board[x].length ||
        y + (increasing ? i : -i) < 0 ||
        board[x + i][y + (increasing ? i : -i)] !== value
      ) {
        return false;
      }
    }
    return true;
  };

  return (
    <TicTacToeContext.Provider
      value={{
        board,
        history,
        moveNumber,
        players,
        insertLetter,
        getWinner,
        setMoveNumber,
        setPlayers,
      }}
    >
      {props.children}
    </TicTacToeContext.Provider>
  );
};

export default TicTacToeContextProvider;
