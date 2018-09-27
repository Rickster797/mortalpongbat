import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AddPlayers from "./AddPlayers";


class Intro extends Component {
constructor(props) {
    super(props);
    this.state = {
      players: 4,
      playerAmountValid: false,
    };
  }

  onChange(e) { 
    this.setState({ playerAmountValid : false });
    this.setState({ players: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    /** This forces the <AddPlayers/> component to re-render. */
    const players = this.state.players;
    if (players % 2 === 0 && players > 1 && players < 65) {
      this.setState({playerAmountValid : true});
    } else {
      this.setState({playerAmountValid : false});

    }
  }

  render() {
    return (
      <Fragment>
          <h2>How many are brave enough to enter?</h2>
          <div style={{ marginLeft: 30 }}>
              <form onSubmit={e => this.onSubmit(e)}>
                  <select onChange={ e => this.onChange(e) } value={this.state.players}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="32">32</option>
                    <option value="64">64</option>
                  </select>
                  <input style={{ marginLeft: 10 }} type="submit"></input>
              </form>
              <div style={{ height: 10 }}/>
              <p>{`Hit submit to create a Tournament for ${this.state.players} players`}</p>
          </div>
          { this.state.playerAmountValid ? <AddPlayers numberOfPlayers={this.state.players} /> : null }
      </Fragment>
      )
  };
}

export default Intro;