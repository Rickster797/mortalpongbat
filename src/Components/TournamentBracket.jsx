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
      matches.push(match);
    }

    this.state = {
      players: players,
      matches: matches,
      winners: [],
    };
  }

  render() {
    return (
      <Fragment>
        <h2>Round 1... Fight!</h2>
        {this.state.matches.map((match, i) => (
        <div key={i} style={ divStyle }>
          <p style={matchesBox}>{ match[0].value }&nbsp;<span style={ spanStyle }>VS</span>&nbsp;{ match[1].value }</p>
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

export default TournamentBracket;