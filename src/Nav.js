import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="navigation">
          <Link className="link" to="/Portfolio-Website">
            <li>About</li>
          </Link>
          <Link className="link" to="/Portfolio-Website/tictactoe">
            <li>Tic-Tac-Toe</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
