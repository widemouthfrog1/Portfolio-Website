import React from 'react'
import { Link } from 'react-router-dom'

const AboutNav = () => {
  let root = "/Portfolio-Website";
  return (
    <div className="navigation">
      <Link className="link-highlight" to={root}>About</Link>
      <Link className="link" to={root + "/games"}>Games</Link>
    </div>
  );
}

export default AboutNav;