import React, {Component} from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import CSSModules from 'react-css-modules';
import style from '../css_modules/login.css';
import {Link} from 'react-router';

class Login extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className={style.main}>
				<form className={style.form}>
					<Input label="Username" name="uid" type="text" id="uid" key="uid" />
					<Input label="Password" name="password" type="password" id="password" key="password" />
					<Button href={"questionlist"} submit={true} url={"http://exam.stuhome.com/user/login"} className={style.button} linkStyle={style.link}>立即登录</Button>
					<Link to="/" className={style.link}>返回首页</Link>
				</form>
	 		</div>
		 )
	}
}

export default CSSModules(Login, style);
