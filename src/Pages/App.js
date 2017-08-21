import React from 'react';
import Button from '../Components/Button.js';

const mainStyle = {
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'bottom': '0px',
	'right': '0px',
	'background': 'url("images/bg.jpg")',
	'backgroundSize': 'cover',
	'backgroundRepeat': 'no-repeat',
	'backgroundPosition': '0px -100px'
}

const linkStyle = {
	'color': '#b6b1b4',
	'textDecoration': 'none',
	'lineHeight': '2rem',
	'fontSize': '1rem'
}

const signupButton = {
	'width': '120px',
	'height': '2rem',
	'position': 'absolute',
	'top': '65%',
	'left': '50%',
	'marginLeft': '-60px',
	'border': '1px solid #b6b1b4',
	'borderRadius': '15px'
}

const loginButton = {
	'width': '120px',
	'height': '2rem',
	'position': 'absolute',
	'top': '72%',
	'left': '50%',
	'marginLeft': '-60px',
	'border': '1px solid #b6b1b4',
	'borderRadius': '15px'
}

const copyRight = {
	'color': '#b6b1b4',
	'width': '80px',
	'display': 'inline-block',
	'position': 'absolute',
	'top': '90%',
	'textAlign': 'center',
	'marginLeft': '-40px'
}

const App = ({children}) => {
	if(children) {
		return (
			<div>
				{children}
			</div>
		)
	} else {
		return (
			<div className="main" style={mainStyle}>
				<Button className="button index-button" href="signup" submit={false} style={signupButton} linkStyle={linkStyle}>注册</Button>
				<Button className="button index-button" href="login" submit={false} style={loginButton} linkStyle={linkStyle}>登录</Button>
				<span style={copyRight}>©星辰工作室</span>
			</div>
		);
	}
};

export default App;

