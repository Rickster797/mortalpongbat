import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import StartScreen from "./Components/StartScreen";
import AddPlayers from "./Components/AddPlayers";
import TournamentBracket from "./Components/TournamentBracket";

class App extends Component {
  render() {
    return (
      <Router>
          <Fragment>
            <Header />
            <Route exact path="/" component={ StartScreen } />
            <Route exact path="/players" component={ Intro } />
            <Route exact path="/players/names" component={ AddPlayers } />
            <Route exact path="/tournament" component={ TournamentBracket } />
          </Fragment>
      </Router>
    );
  }
}

export default App;

