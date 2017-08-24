import React, {Component} from 'react';
import {Link} from 'react-router';
import 'isomorphic-fetch';
import 'es6-promise';

const wrapStyle = {
	'width': '100%',
	'height': '2.5rem',
	'background': '#3d444c',
	'fontSize': '1rem',
	'color': '#ffffff',
	'textAlign': 'center',
	'position': 'fixed',
	'top': '0px',
	'left': '0px'
}

const textStyle = {
	'display': 'inline-block',
	'width': '4rem',
	'textAlign': 'center',
	'position': 'fixed',
	'left': '50%',
	'top': '-0.2rem',
	'marginLeft': '-2rem'
}

class WrapTop extends Component {
	constructor(props) {
		super(props)

		this.state = {
			logined: false
		}

		this.logout = this.logout.bind(this);
	}

	logout() {
		fetch('/user/logout',{
			method:'POST',
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
				},
			body:JSON.stringify({})
		})
		.then(() => {
			this.setState = {
				logined: false
			}
		})
	}

	componentDidMount() {
		fetch('/user/info',{
			method:'POST',
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
				},
			body:JSON.stringify({})
		})
		.then(res => res.json())
		.then((data) => {
			if(data.uid !== '') {
				this.setState({
					logined: true
				})
			} 
		})
	}

	render() {
		return (
			<div className="wrap-top" style={wrapStyle}>
				<p className="wrap-top-text" style={textStyle}>{this.props.text}</p>
				{
					this.props.needLogined ? 
					<span style={{'float': 'right', 'lineHeight': '3rem', 'marginRight': '1rem'}}>
						{this.state.logined ? <button onClick={this.logout} style={{'color': '#00BC9B', 'fontSize': '0.8rem'}}>已登录</button> 
						: 
						<Link to='/login' style={{'color': '#00BC9B', 'fontSize': '0.8rem', 'textDecoration': 'none'}}>登录</Link>}
					</span>
					: ""
				}
			</div>
		)
	}

}

export default WrapTop;