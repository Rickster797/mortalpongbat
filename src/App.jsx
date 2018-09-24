import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import AddPlayers from "./Components/AddPlayers";
import Intro from "./Components/Intro";

class App extends Component {
  render() {
    return (
      <Router>
          <Fragment>
            <Header />
            <Intro />
          </Fragment>
      </Router>
    );
  }
}

export default App;

