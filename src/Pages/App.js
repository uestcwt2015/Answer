import React from 'react';
import Button from '../Components/Button.js';
import style from '../css_modules/app.css';
console.log(style);
const App = ({children}) => {
	if(children) {
		return (
			<div>
				{children}
			</div>
		)
	} else {
		return (
			<div className={style.main}>
				<Button className={style.signup_button} href="signup" submit={false}  linkStyle={style.link}>注册</Button>
				<Button className={style.login_button} href="login" submit={false}  linkStyle={style.link}>登录</Button>
				<span className={style.copyright}>©星辰工作室</span>
			</div>
		);
	}
};

export default App;

