import React from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';

const mainStyle = {
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'bottom': '0px',
	'right': '0px',
	'background': 'url("images/bg2.jpg")',
	'backgroundSize': 'cover',
	'backgroundRepeat': 'no-repeat',
	'backgroundPosition': '0px -100px'
}

const formStyle = {
	'position': 'relative',
	'top': '20%'
}

const buttonStyle = {
	'display': 'inline-block',
	'width': '60%',
	'height': '2.5rem',
	'borderRadius': '5px',
	'background': '#00BC9B',
	'outline': 'none',
	'marginTop': '4rem'
}

const linkStyle = {
	'color': '#fcfcfc',
	'fontSize': '1rem',
	'lineHeight': '2.5rem',
	'textDecoration': 'none',
	'textAlign': 'center',
}

function Login(props) {
 	return (
 		<div style={mainStyle}>
			<form className="form" style={formStyle}>
				<Input label="Username" name="uid" type="text" id="uid" key="uid" />
				<Input label="Password" name="password" type="password" id="password" key="password" />
				<Button href="questionlist" submit={true} className="button next-step-button" url={"/user/login"} style={buttonStyle} linkStyle={linkStyle}>立即登录</Button>
			</form>
 		</div>
 	)
 }

 export default Login;