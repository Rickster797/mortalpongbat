import React, { Component, Fragment } from 'react';

class Winner extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {winner: this.props.winner};
  }

  render() {

    const winner = this.state.winner[0].playerName;

    return (
      <Fragment>
        <h2>{winner} wins, flawless victory</h2>
        <iframe src="https://giphy.com/embed/7d7lKk2nH5RJu" width="480" height="323" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </Fragment>
    );
  };
}

export default Winner;