import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import style from '../css_modules/achieve.css';
import {hashHistory} from 'react-router';

class Achieve extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		fetch('http://exam.stuhome.com/user/logout',{
			method:'POST',
			credentials: 'include',
			body: {}
		})
		.then((res) => {return res.json()})
		.then((data) => {
			if(data.errorMsg){
				alert(data.errorMsg);
			}
		})
	}

	render() {
		return(
			<div className={style.container}>
				<h3>你已完成答题，请等候短信通知</h3>
				<div className={style.img}></div>
			</div>
		)
	}
}

export default CSSModules(Achieve, style);