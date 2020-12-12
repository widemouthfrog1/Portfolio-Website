import React from 'react'
import Board from './Board';
import StateProvider from './State';
import WinText from './WinText';
import History from './History';
import Options from './Options';

const TicTacToe = () => {

  return (
    <StateProvider>
      <WinText />
      <History />
      <Options />
      <Board />
    </StateProvider>
  );
}

export default TicTacToe;