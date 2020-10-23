import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from "./Nav";
import About from "./pages/about/About";
import Games from "./pages/games/Games";

function App() {
  return (
    <div>

      <div>App</div>
      <Router>
        <Nav />
        <Route exact path="/Portfolio-Website/" component={About} />
        <Route path="/Portfolio-Website/games" component={Games} />
      </Router>
    </div>
  );
}

export default App;