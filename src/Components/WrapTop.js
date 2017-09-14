import React, {Component} from 'react';
import {Link} from 'react-router';
import 'isomorphic-fetch';
import 'es6-promise';
import CSSModules from 'react-css-modules';
import style from '../css_modules/wrap.css';

class WrapTop extends Component {
	constructor(props) {
		super(props)

		this.state = {
			logined: false
		}

		this.logout = this.logout.bind(this);
	}

	logout() {
		fetch('http://jcuan.org/user/logout',{
			method:'POST',
			body: {}
		})
		.then((res) => {return res.json()})
		.then((data) => {
			this.setState({
				logined: false
			})
		})
	}

	componentDidMount() {
		fetch('http://jcuan.org/user/info',{
			method:'POST',
			body:" ",
			credentials: 'include'
		})
		.then(res => res.json())
		.then((data) => {
			if(data.errorCode !== 110) {
				this.setState({
					logined: true
				})
			} 
		})
	}

	render() {
		return (
			<div className={style.wrap_top}>
				<div className={style.center}>
					<p className={style.text}>{this.props.text}</p>
					{
						this.props.needLogined ? 
						<span className={style.span}>
							{this.state.logined ? <a onClick={this.logout} className={style.button}>已登录</a> 
							: 
							<Link to='/login' className={style.link}>登录</Link>}
						</span>
						: ""
					}
				</div>
			</div>
		)
	}

}

export default CSSModules(WrapTop, style);