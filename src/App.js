import React from "react";
import "./App.css";
import Nav from "./Nav";
import TicTacToe from "./pages/TicTacToe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <div className="switch">
          <Switch>
            <Route path="/Portfolio-Website" exact component={About} />
            <Route path="/Portfolio-Website/tictactoe" component={TicTacToe} />
          </Switch>
        </div>
        <div className="background"></div>
      </div>
    </Router>
  );
}

export default App;
