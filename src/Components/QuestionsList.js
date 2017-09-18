import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';
import 'isomorphic-fetch';
import 'es6-promise';
import CSSModules from 'react-css-modules';
import style from '../css_modules/questionList.css';
import File from './File';

let details = [];
let keys;
class QuestionList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			detail: []
		}
	}

	componentWillReceiveProps(nextProps) {
		if(details.length === 0) {
			keys = Object.keys(nextProps.detail);

			for(let i = 0; i < keys.length; i++) {
				let key = keys[i];
				details.push(nextProps.detail[key]);
			}
		}
	}

	componentDidMount() {
		this.setState(
			{
				detail: details
			}
		);

	}

	componentWillUnmount() {
		details = [];
	}

	render() {
		return (
			<div className={style.main}>
				<ul className={style.ul}>
					{
						this.state.detail.map((n, i) => {
							return(
								<span key={i} className={n ? style.button_active : style.button} onClick = {(e)=>{hashHistory.push('question/' + keys[i])}}>
									<Link to={'question/' + keys[i]} style={{color: 'inherit', textDecoration: 'none'}}>{keys[i]}</Link>
								</span>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

export default CSSModules(QuestionList, style);
