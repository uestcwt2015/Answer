import React, {Component} from 'react';
import {Link} from 'react-router';
import 'isomorphic-fetch';
import 'es6-promise';
import Button from '../Components/Button';

const acStyle = {
	'display': 'inline-block',
	'width': '2rem',
	'height': '2rem',
	'border': '1px solid green',
	'borderRadius': '100%',
	'textAlign': 'center',
	'margin': '0.8rem',
	'lineHeight': '2rem',
	'color': 'green'
}

const unacStyle = {
	'display': 'inline-block',
	'width': '2rem',
	'height': '2rem',
	'border': '1px solid #eee',
	'borderRadius': '100%',
	'textAlign': 'center',
	'margin': '0.8rem',
	'lineHeight': '2rem',
	'color': '#eee'
}


let details = new Array();
let keys;
class QuestionList extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		keys = Object.keys(this.props.detail);
		

		for(let i = 0; i < keys.length; i++) {
			let key = keys[i];
			details.push(this.props.detail[key]);
		}

		this.setState(
		{
			detail: details
		})

	}

	render() {
		let i = 0;
		return (
			<ul style={{width: '80%',margin: '3rem auto', padding: '10% 0', display: 'flex', flexWrap: 'wrap'}}>
				{
					details.map((e) => {
						i++;
						return(
							<span className="listItem" style={e ? acStyle : unacStyle}>
								<Link to={'question/' + keys[i-1]} style={{color: 'inherit', textDecoration: 'none'}}>{keys[i-1]}</Link>
							</span>
						)
					})
				}
			</ul>
			
		)
	} 
}

function QuestionItem(props) {
	return (
		<span style={props.style}><Link to={props.to} style={{textDecoration: 'none', color: 'inherit'}}>{props.num}</Link></span>
	)
}
export default QuestionList;