import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class StartScreen extends Component {
  
  render() {
    return (
	<Fragment>
	<div className={'startScreenGradient'} style={divStyle}>
		<iframe src="https://giphy.com/embed/31mFmfMQHaoSI" width="480" height="357" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
		<p>Choose your destiny</p>
		<Link to={"/players/"}>
			<button className={'push--flat'}>Start</button>
		</Link>
	</div>
    </Fragment>
    )
  };
}

const divStyle = {
	textAlign: 'center',
};

export default StartScreen;