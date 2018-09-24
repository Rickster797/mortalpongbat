import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Intro from "./Intro";

class AddPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { name: "Player1:", value: "" },
        { name: "Player2:", value: "" },
        { name: "Player3:", value: "" },
        { name: "Player4:", value: "" },
        { name: "Player5:", value: "" },
        { name: "Player6:", value: "" },
        { name: "Player7:", value: "" },
        { name: "Player8:", value: "" }

      ]
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, i) {
    let players = this.state.players.slice();
    players[i].value = e.target.value;
    this.setState({ players: players });
    // console.log(fields)
  }

  onSubmit(e) {
    e.preventDefault();

    let newUserData = {
      name: "name",
      email: this.state.fields[0].value,
      password: this.state.fields[0].value
    };

    this.props.registerUser(newUserData);

    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <Fragment>
        <div> 
          <h2>Enter your players here</h2>
          <form onSubmit={e => this.onSubmit(e)}>
            {this.state.players.map((player, i) => ( 
              <div key={i}>
                <label>{player.name}</label>
                <input
                  type="text"
                  value={player.value}
                  onChange={e => this.onChange(e, i)}
                />
              </div>
            ))}

            <input
              type="submit"
              className="btn btn-danger"
              value="Generate Tournament Bracket"
            />
          </form>
        </div>
      </Fragment>
    );
  }
}
export default AddPlayers;