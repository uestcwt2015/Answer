import React from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';


const mainStyle = {
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'bottom': '0px',
	'right': '0px',
	'backgroundImage': 'url("../images/bg2.jpg")',
	'backgroundColor': 'black',
	'backgroundSize': 'cover',
	'backgroundRepeat': 'no-repeat',
	'backgroundPosition': '0px -100px'
}

const formStyle = {
	'position': 'relative',
	'top': '20%',
	'margin': '0 auto',
	'textAlign': 'center'
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

function StepOne() {
	return (
		<div style={mainStyle}>
			<form className="form" style={formStyle}>
				<Input label="学号" type="text" name="studentId" id="studentNumber" key="studentNumber"/>
				<Input label="密码" type="password" name="password" id="password" key="password"/>
				<Button href="/signup/stepTwo" className="button next-step-button" submit={true} url={'http://jcuan.org/user/registerOne'} style={buttonStyle} linkStyle={linkStyle}>下一步</Button>
			</form>
		</div>
	)
}

export default StepOne;