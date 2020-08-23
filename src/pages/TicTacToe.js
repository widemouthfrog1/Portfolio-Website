import React from "react";
import Game from "../pageObjects/tictactoe/Game";
import TicTacToeContextProvider from "../pageObjects/tictactoe/TicTacToeContext";

const TicTacToe = () => {
  return (
    <TicTacToeContextProvider>
      <Game />
    </TicTacToeContextProvider>
  );
};

export default TicTacToe;
