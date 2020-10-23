import React from 'react'
import { Link } from 'react-router-dom'

const GamesNav = () => {
  let root = "/Portfolio-Website";
  return (
    <div className="navigation">
      <Link className="link" to={root}>About</Link>
      <Link className="link-highlight" to={root + "/games"}>Games</Link>
    </div>
  );
}
export default GamesNav;