import React, { Component, Fragment } from 'react';
import NameGenerator from '../Data/NameGenerator';
import TournamentBracket from './TournamentBracket';

class AddPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTournament: false,
      players: this.getNewPlayers(props.numberOfPlayers)
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
        id: i,
        value: playerName,
        win: false
      });
    }

    return players;
  }

  onChange(e, i) {
    let players = this.state.players;
    players[i].value = e.target.value;
    this.setState({
      players: players,
      showTournament: false
    });

    /** TODO - REMOVE */
    console.warn('onChange', this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ 
      showTournament: true });

    /** TODO - REMOVE */
    console.log('onSubmit', this.state);
  }

  render() {
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
            value={player.value}
            onChange={e => this.onChange(e, i)}/>
          </div>
          ))}
          <div style={{ height: 20 }}/>
          <input
          onSubmit={e => this.onSubmit(e)}
          type="submit"
          className="btn btn-success"
          style={{ marginLeft: 30 }}
          value="Generate Tournament Bracket"
          />
        </form>
      </div>
      {this.state.showTournament ? <TournamentBracket players={this.state.players}/> : null}
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