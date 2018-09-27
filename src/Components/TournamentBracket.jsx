import React, { Component, Fragment } from 'react';
import shuffle from 'shuffle-array';

class TournamentBracket extends Component {

  constructor(props) {
    super(props);

    const players = this.props.players;
    const matches = [];

    shuffle(players);

    while (players.length >= 2) {
      const match = [players.pop(), players.pop()];

      /** Set initial style(s) and resultTxt(s). */
      match[0].style = buttonNeutralStyle;
      match[1].style = buttonNeutralStyle;
      match[0].resultTxt = '';
      match[1].resultTxt = '';

      matches.push(match);
    }

    this.state = {
      players: players,
      matches: matches,
      winners: [],
    };
  }

  /** matchWinner needs to be array index of 0 or 1 (for left or right player). */
  setResult(matchIdx, matchWinner) {

    /** Gets the current match. */
    const matches = this.state.matches;
    const match = matches[matchIdx];
    const winners = this.state.winners;

    /** Sets the winners, styles and resultTxt. */
    match[0].win = (matchWinner === 0);
    match[1].win = (matchWinner === 1);
    match[0].style = this.computeButtonStyle(matchIdx, 0)
    match[1].style = this.computeButtonStyle(matchIdx, 1)
    match[0].resultTxt = (matchWinner === 0) ? ' wins' : ' loses'
    match[1].resultTxt = (matchWinner === 1) ? ' wins' : ' loses'

    /** Replaces the match (in the state) with the updated version
    & add's winner to winners array ;) kinda */
    matches[matchIdx] = match;
    this.setState({ matches: matches });

    if(matchWinner === 1) {
        winners.push(match); 
    } else if (matchWinner === 0) {
        winners.splice(match); 
    } else {
       
    }
  }

  computeButtonStyle(matchIdx, playerIdx) {

    /** Gets the current match. */
    let match = this.state.matches[matchIdx];

    if(!match[0].win && !match[1].win) {
      return buttonNeutralStyle;          // If no winners..
    } else if(match[playerIdx].win) {
      return buttonWinStyle;              // If this player is won...
    } else {
      return buttonLoseStyle;             // If this player shit-bagged it...
    }
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <h2>Round 1... Fight!</h2>
        {this.state.matches.map((match, i) => (
        <div key={i} style={ divStyle }>
          <p style={matchesBox}>{ match[0].value }&nbsp;<span style={ spanStyle }>VS</span>&nbsp;{ match[1].value }</p>
          <button onClick={e => this.setResult(i, 0)} style={ match[0].style }>{match[0].value + match[0].resultTxt }</button>
          <button onClick={e => this.setResult(i, 1)} style={ match[1].style }>{match[1].value + match[1].resultTxt }</button>
          <hr />
        </div>
        ))}
      </Fragment>
    );
  }
}

const spanStyle = {
  color: 'red',
  fontWeight: 'bold'
};

const divStyle = {
  width: 280,
  textAlign: 'center',
  marginTop: 10
};

const matchesBox = {
  border: 'black 1 solid',
  boxShadow: "0 0 8px 1px black",
  margin: 10,
};

const buttonNeutralStyle = {
  border: 'black 1 solid',
  color: 'white',
  width: 125,
  margin: 5,
  backgroundColor: 'grey',
};

const buttonWinStyle = {
  border: 'black 1 solid',
  color: 'white',
  width: 125,
  margin: 5,
  backgroundColor: 'green',
  boxShadow: "0 0 8px 1px black",
};

const buttonLoseStyle = {
  border: 'black 1 solid',
  color: 'white',
  width: 125,
  margin: 5,
  backgroundColor: 'red',
};

export default TournamentBracket;