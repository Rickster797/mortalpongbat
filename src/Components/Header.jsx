import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import '../css/fonts.css';

class Header extends Component {

  render() {
    return (
      <Fragment>
        <div>
          <h2 className={'headerColour deepshadow'} style={mainHeader}>MORTAL PONGBAT</h2>
          <hr style={hrStyle} />
        </div>
      </Fragment>
      )
  };
}

const mainHeader = {
  fontFamily: 'Almendra',
  fontWeight: 'bold',
  color: 'black',
  fontStyle: 'italic',
  textAlign: "center",
  backgroundColor: "black",
  borderRadius: 2,
  padding: 10,
  boxShadow: "0 0 8px 5px black",
  fontSize: '4em',
};

const hrStyle = {
    border: 0,
    height: 0, /* Firefox... */
    boxShadow: "0 0 8px 1px white",
    width: "99%",
};


export default Header;