import React, {Component} from 'react';
import Button from '../Components/Button.js';
import {hashHistory} from 'react-router';
import CSSModules from 'react-css-modules';
import style from '../css_modules/app.css';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		fetch('http://exam.stuhome.com/user/info',{
			method:'POST',
			body:" ",
			credentials: 'include'
		})
		.then(res => res.json())
		.then((data) => {
			if(data.errorCode !== 110) {
				hashHistory.push('questionlist');
			}
		})
	}

	render(children) {
		{
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
		}
	}
}

export default CSSModules(App, style);

