import React, {Component} from 'react';
import {Link} from 'react-router';
import 'isomorphic-fetch';
import 'es6-promise';
import CSSModules from 'react-css-modules';
import style from '../css_modules/questionList.css';

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
		)
	}

	render() {
		let i = 0;
		return (
			<ul className={style.ul}>
				{
					this.state.detail.map((e) => {
						i++;
						return(
							<span key={i} className={e ? style.button_active : style.button}>
								<Link to={'question/' + keys[i-1]} style={{color: 'inherit', textDecoration: 'none'}}>{keys[i-1]}</Link>
							</span>
						)
					})
				}
			</ul>
			
		)
	} 
}

export default CSSModules(QuestionList, style);