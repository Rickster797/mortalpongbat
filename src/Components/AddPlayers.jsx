import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import NameGenerator from '../Data/NameGenerator';
import TournamentBracket from './TournamentBracket';

class AddPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTournament: false,
      players: this.getNewPlayers(props.location.state.numberOfPlayers),
      error: false
    };
  }

  /** Not really necessary but makes the code more robust. */
  componentWillReceiveProps(props) {
    this.setState({ players: this.getNewPlayers(props.numberOfPlayers) });
  }

  getNewPlayers(numberOfPlayers) {
    const players = [];
    const names = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      let playerName = null;
      while (playerName === null && names.indexOf(playerName) === -1) {
        playerName = NameGenerator.getRandomName();
      }
      players.push({
        playerName: playerName,
        win: false
      });
    }

    return players;
  }

  onChange(e, i) {
    let players = this.state.players;
    players[i].playerName = e.target.value;
    
    this.setState({
      players: players,
      showTournament: false
    }); 
    

    /** TODO - REMOVE */
    console.warn('onChange', this.state);
  }

  onSubmit(e, i) {
    e.preventDefault();
    let players = this.state.players;
    let playersAreValid = true;
    for (let i = 0; i < players.length; i++) {
      if (players[i].playerName.trim() === "") {
         playersAreValid = false
         break;
      }
    }

    if (playersAreValid) {
    this.setState({showTournament: true}); 
    this.props.history.push({
      pathname: '/tournament',
      state: { players: players }
    })

    } else {
    this.setState({error: true});
    }

    /** TODO - REMOVE */
    console.log('onSubmit', this.state);
  }

  render() {
    const error = this.state.error;
    const errorMessage = "Please enter all player names or go back to player amount selection";
    return (
    <Fragment>
      <div>
        <h2>Enter your players here</h2>
        <div style={{ height: 10 }}/>
        <form onSubmit={e => this.onSubmit(e)}>
          {this.state.players.map((player, i) => (
          <div key={i}>
            <label style={labelStyle}>
            Player {i + 1}:
            </label>
            <input
            type="text"
            value={player.playerName}
            onChange={e => this.onChange(e, i)}/>
          </div>
          ))}
          <div style={{ height: 20 }}/>
          {error ? errorMessage : null}
          <input
          onSubmit={e => this.onSubmit(e)}
          type="submit"
          className="btn btn-success"
          style={{ marginLeft: 30 }}
          value="Generate Tournament Bracket"
          />
          <Link to={"/players/"}>
          <button
          className="btn btn-primary">Change number of combatants</button>
          </Link>
        </form>
      </div>
    </Fragment>
    );
  }
}

const labelStyle = {
  width: 100,
  textAlign: 'right',
  paddingRight: 10         
};

export default AddPlayers;