import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <Fragment>
          <h2 style={mainHeader}>Mortal PongBat</h2>
        <hr style={hrStyle} />
      </Fragment>
      )
  };
}

const mainHeader = {
  fontFamily: 'Nunito Sans',
  textAlign: "center",
  color: "white",
  backgroundColor: "black",
  borderRadius: 2,
  padding: 10
};

const hrStyle = {
    border: 0,
    height: 0, /* Firefox... */
    boxShadow: "0 0 8px 1px black",
    width: "99%",
};


export default Header;