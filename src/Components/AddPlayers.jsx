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
      <div style={{margin: '0 auto 0 auto'}}>
        <h2 style={headerStyle}>Enter your players here</h2>
        <div style={{ height: 10 }}/>
        <form onSubmit={e => this.onSubmit(e)}>
          {this.state.players.map((player, i) => (
          <div style={headerStyle} key={i}>
            <label style={labelStyle}>
            Player {i + 1}:
            </label>
            <input
            style={inputStyle}
            type="text"
            value={player.playerName}
            onChange={e => this.onChange(e, i)}/>
          </div>
          ))}
          <div style={{ marginTop: 20, marginBottom: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr'}}>
              <div style={{ height: 20 }}/>
              {error ? errorMessage : null}
              <div style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, GridRowEnd: 2, justifySelf: 'center', alignSelf: 'center'}}>
                <p style= {{color: "white", marginTop: 6}}>Generate Tournament</p>
              </div>
              <div style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 2, GridRowEnd: 2, justifySelf: 'center', alignSelf: 'center'}}>
                <input
                onSubmit={e => this.onSubmit(e)}
                type="submit"
                className={'push--flat'}
                style={{}}
                value=""
                />
              </div>
              <div style={{gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 1, GridRowEnd: 2, justifySelf: 'center', alignSelf: 'center'}}>
                <p style= {{color: "white", marginTop: 6}}>Change Combatant Quantity</p>
              </div>
              <div style={{gridColumnStart:2, gridColumnEnd: 3, gridRowStart: 2, GridRowEnd: 2, justifySelf: 'center', alignSelf: 'center'}}>
                <Link to={"/players/"}>
                <button
                style={{}}
                className={"push--flat"}></button>
                </Link>
              </div>
          </div>
        </form>
      </div>
    </Fragment>
    );
  }
}

const headerStyle = {
  textAlign: 'center',
};

const backgroundColour = {
  backgroundColor: 'black',
};

const inputStyle = {
  backgroundColor: 'black',
};

const labelStyle = {
  width: 100,
  textAlign: 'center',
           
};

export default AddPlayers;