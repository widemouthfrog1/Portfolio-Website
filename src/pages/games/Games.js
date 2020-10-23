import React from 'react'
import { Route } from 'react-router-dom';
import TicTacToe from './tictactoe/TicTacToe';

const Games = ({ match }) => {

  return (
    <div>
      <div>Games</div>
      <Route exact path={`${match.path}/`} component={TicTacToe} />
    </div>
  );
}

export default Games;