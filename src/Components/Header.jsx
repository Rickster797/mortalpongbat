import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  // componentDidMount() {
  //       this.props.onLoad()
  //   }

  render() {
    return (
      <Fragment>
          <h2 style={mainHeader}>Ping the Merciless</h2>
        <hr style={hrStyle} />
      </Fragment>
      )
  };
}

const mainHeader = {
  fontFamily: 'Nunito Sans',
  textAlign: "center",
  color: "blue",
  backgroundColor: "red",
  borderRadius: 2,
};

const headerDiv = {
  backgroundColor: "#181819",
  height: 70,
  borderRadius: 2,
  boxShadow: '0px 2px 10px 1px rgba(0,0,0,0.75)',
};

const hrStyle = {
    border: 0,
    height: 0, /* Firefox... */
    boxShadow: "0 0 8px 1px black",
    width: "99%",
};


export default Header;