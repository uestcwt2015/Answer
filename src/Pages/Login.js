import React from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import CSSModules from 'react-css-modules';
import style from '../css_modules/login.css';

function Login(props) {
 	return (
 		<div className={style.main}>
			<form className={style.form}>
				<Input label="Username" name="uid" type="text" id="uid" key="uid" />
				<Input label="Password" name="password" type="password" id="password" key="password" />
				<Button href="questionlist" submit={true} url={"http://jcuan.org/user/login"} className={style.button} linkStyle={style.link}>立即登录</Button>
			</form>
 		</div>
 	)
 }

 export default CSSModules(Login, style);