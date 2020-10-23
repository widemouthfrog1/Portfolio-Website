import React from 'react'
import { Route } from 'react-router-dom';
import AboutNav from './AboutNav';
import GamesNav from './GamesNav';
import './Nav.css'

function Nav() {
  let root = "/Portfolio-Website";
  return (
    <nav className="navigation-wrapper">
      <Route exact path={root} component={AboutNav} />
      <Route path={root + "/games"} component={GamesNav} />
    </nav>
  );
}

export default Nav;
