import React from 'react'
import { Link } from 'react-router-dom'

const AboutNav = () => {
  let root = "/Portfolio-Website/games";
  return (
    <div className="game-navigation">
      <Link className="game-link-highlight" to={root}>About</Link>
      <Link className="game-link" to={root + "/tictactoe"}>TicTacToe</Link>
    </div>
  );
}

export default AboutNav;