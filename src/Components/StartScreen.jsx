import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class StartScreen extends Component {
  
  render() {
    return (
	<Fragment>
	<div style={divStyle}>
		<iframe src="https://giphy.com/embed/31mFmfMQHaoSI" width="480" height="357" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
		<p>Choose your destiny</p>
		<Link to={"/players/"}>
			<button style={buttonStyle}>Start</button>
		</Link>
	</div>
    </Fragment>
    )
  };
}

const buttonStyle = {
  width: '240px',
  height: '240px',
  border: 0,
  margin: '1em',
  outline: 'none',
  backgroundColor: '#c2290a',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'boxShadow 200ms',
};

// .push--flat {
//   box-shadow: inset 0 7.5px 0 #da2e0b, inset 0 -7.5px 0 #aa2409, inset 0 0 0 7.5px #b32609, inset 0 0 0 20px #c2290a, inset 0 0 0 24px #611405, inset 0 0 0 26.0869565217px black, inset 0 0 0 32px rgba(247, 133, 110, 0.7), inset 0 0 0 43.6363636364px #c2290a, inset 0 96px 32px #aa2409, inset 0 0 24px 40px #911f08, 0 12px 0 rgba(0, 0, 0, 0.3);
// }
// .push--flat:after {
//   content: "";
//   position: absolute;
//   bottom: 12px;
//   left: 24px;
//   display: block;
//   width: 192px;
//   height: 192px;
//   border: 16px solid rgba(0, 0, 0, 0.3);
//   border-width: 0 0 16px;
//   border-radius: 50%;
//   transition-duration: 200ms;
// }
// .push--flat:active, .push--flat.is-pushed {
//   box-shadow: inset 0 7.5px 0 #da2e0b, inset 0 -7.5px 0 #aa2409, inset 0 0 0 7.5px #b32609, inset 0 0 0 20px #c2290a, inset 0 0 0 24px #611405, inset 0 0 0 28.2352941176px black, inset 0 0 0 32px rgba(247, 133, 110, 0.2), inset 0 0 0 43.6363636364px #b32609, inset 0 96px 32px #9b2108, inset 0 0 24px 40px #791a06, 0 12px 0 rgba(0, 0, 0, 0.3);
//   background-color: #b8270a;
// }
// .push--flat:active:after, .push--flat.is-pushed:after {
//   bottom: 28px;
//   border-width: 0;
// }

const divStyle = {
	textAlign: 'center',
};

export default StartScreen;