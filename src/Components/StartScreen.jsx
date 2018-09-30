import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class StartScreen extends Component {
  
  render() {
    return (
	<Fragment>
	<div className={'startScreenGradient'} style={divStyle}>
		<iframe src="https://giphy.com/embed/31mFmfMQHaoSI" width="480" height="357" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
		<p style={blackText}>Choose your destiny</p>
		<Link to={"/players/"}>
			<button style={blackText} className={'push--flat'}>Start</button>
		</Link>
	</div>
    </Fragment>
    )
  };
}

const blackText = {
  color: 'black',
}

const divStyle = {
	textAlign: 'center',
  paddingTop: 20,
  boxShadow: "0 0 8px 1px black"
};

export default StartScreen;