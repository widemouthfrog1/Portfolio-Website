import React from 'react'
import { Route } from 'react-router-dom';
import AboutNav from './AboutNav';
import './GameNav.css'
import TicTacToeNav from './TicTacToeNav';

function Nav() {
  let root = "/Portfolio-Website/games";
  return (
    <nav className="game-navigation-wrapper">
      <Route exact path={root} component={AboutNav} />
      <Route path={root + "/tictactoe"} component={TicTacToeNav} />
    </nav>
  );
}

export default Nav;