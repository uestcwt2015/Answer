import React from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import Select from '../Components/Select.js';

const towards = ["交互&设计", "产品&运营", "安卓", "前端", "运维开发", "后台"];

const mainStyle = {
	'position': 'absolute',
	'width': '100%',
	'backgroundImage': 'url("../images/bg2.jpg")',
	'backgroundColor': 'black',
	'backgroundSize': 'cover',
	'backgroundRepeat': 'no-repeat',
	'backgroundPosition': '0px -100px'
}

const formStyle = {
	'position': 'relative',
	'top': '2%',
	'textAlign': 'center'
}

const buttonStyle = {
	'display': 'inline-block',
	'width': '60%',
	'height': '2.5rem',
	'borderRadius': '5px',
	'background': '#00BC9B',
	'outline': 'none',
	'marginTop': '4rem',
	'marginBottom': '3rem'
}

const linkStyle = {
	'color': '#fcfcfc',
	'fontSize': '1rem',
	'lineHeight': '2.5rem',
	'textDecoration': 'none',
	'textAlign': 'center',
}


function StepTwo() {
	return (
		<div style={mainStyle}>
			<form className="form" style={formStyle}>
				<Input label="用户名" name="uid" type="text" id="uid" key="uid" />
				<Input label="密码" name="password" type="password" id="password" key="password" />
				<Input label="重复密码" name="passwordCopy" type="password" id="passwordCopy" key="passwordCopy" />
				<Input label="学院" name="academy" type="text" id="academy" key="academy" />
				<Input label="邮箱" name="email" type="text" id="email" key="email" />
				<Input label="手机号码" name="phoneNumber" type="text" id="phoneNumber" key="phoneNumber" />
				<Select label="方向" name="toward" id="toward" key="toward" arr={towards}/>
				<Button href="questionlist" className="button next-step-button" submit={true} url={"/uesr/registerTwo"} style={buttonStyle} linkStyle={linkStyle}>立即注册</Button>
			</form>
		</div>
	)
}

export default StepTwo;


