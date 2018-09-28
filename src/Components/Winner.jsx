import React, { Component, Fragment } from 'react';

class Winner extends Component {

  constructor(props) {
    super(props);

    this.state = { winner: this.props.winner };
  }

  render() {

    const winner = this.state.winner[0].value;

    return (
    <p>{winner} wins, flawless victory</p>
    );
  };
}

export default Winner;