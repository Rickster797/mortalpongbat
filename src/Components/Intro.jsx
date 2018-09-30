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
    /** arguably don't really need this logic since I've changed changed the
     number input to a select as it made more sense given that only set amounts 
     work for a sudden death tournament but seemed silly to change it */
    const players = this.state.players;
    if (players % 2 === 0 && players > 1 && players < 65) {
      this.setState({playerAmountValid : true});

      this.props.history.push({
      pathname: '/players/names',
      state: { numberOfPlayers : this.state.players }
    })

    } else {
      this.setState({playerAmountValid : false});

    }
  }

  render() {
    const playerAmountValid = this.state.playerAmountValid;
    return (
      <Fragment>
        <div style={divStyle}>
            <h2>How many are brave enough to enter?</h2>
            <div style={{ marginLeft: 30 }}>
                <form onSubmit={e => this.onSubmit(e)}>
                    <select style={backgroundColour} onChange={ e => this.onChange(e) } value={this.state.players}>
                      <option value="4">4</option>
                      <option value="8">8</option>
                      <option value="16">16</option>
                      <option value="32">32</option>
                      <option value="64">64</option>
                    </select>
                      <input style={submitButton} type="submit"></input>
                </form>
                <div style={{ height: 10 }}/>
                <p>{`Hit submit to create a Tournament for ${this.state.players} players`}</p>
            </div>
           <iframe src="https://giphy.com/embed/kjReZ2vUmMBfG" width="320" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
      </Fragment>
      )
  };
}

const divStyle = {
  textAlign: 'center',
};

const backgroundColour = {
  backgroundColor: 'black',
};

const submitButton = {
  backgroundColor: 'black',
  marginLeft: 10,
};


export default Intro;