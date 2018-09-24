import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AddPlayers from "./AddPlayers";


class Intro extends Component {
constructor(props) {
    super(props);
    this.state = {
      players: [0],
      playersValid: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) { 
    let players = e.target.value;
    if (players % 2 === 0 && players > 1 && players < 33)
      this.setState({ players: players });
    // console.log(players)
  }

  onSubmit(e) {
    e.preventDefault();

    let playerQuantity = {
      players: this.state.players.value,
    };

    this.setState({
      players: playerQuantity
    });
  }
  // componentDidMount() {
  //       this.props.onLoad()
  //   }

  render() {
    const { players } = this.state;
    return (
      <Fragment>
          <h2>How many are brave enough to enter?</h2>
          <form onSubmit={e => this.onSubmit(e)}>
              <input onChange={e => this.onChange(e)} type="number"></input>
              <input type="submit"></input>
          </form>
          <p>{"Hit submit to create a Tournament for " + this.state.players + " players"}</p>
          <AddPlayers />
      </Fragment>
      )
  };
}

export default Intro;