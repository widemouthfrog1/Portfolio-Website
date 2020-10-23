import React from 'react'
import { Route } from 'react-router-dom';
import GameNav from './nav/GameNav';
import TicTacToe from './tictactoe/TicTacToe';
import "./Games.css";
import About from './about/About';

const Games = ({ match }) => {

  return (
    <div className="games">
      <GameNav />
      <Route exact path={`${match.path}/`} component={About} />
      <Route exact path={`${match.path}/tictactoe`} component={TicTacToe} />
    </div>
  );
}

export default Games;