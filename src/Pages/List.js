import React, {Component}from 'react';
import QuestionList from '../Components/QuestionsList';
import WrapTop from '../Components/WrapTop';
import WrapBottom from '../Components/WrapBottom';
import File from '../Components/File';
import {Link} from 'react-router';
import 'isomorphic-fetch';
import 'es6-promise';

class List extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			detail: {}
		}

		this.check = this.check.bind(this);
	}

	
    check(e) {
    	let details = this.state.detail;
		for(let i = 0; i < details.length; i++) {
			if(details[i] === false) {
				e.preventDefault();
			}
		}
	}
	
	sureSubmit() {
		fetch('http://jcuan.org/exam/submitExam', {
			credentials: 'include',
			method: 'POST',
			body:JSON.stringify({})
		})
		.then((res) => {return res.json()})
		.then((data) => {
			if(data.errorCode === 100) {
				alert(data.errorMsg);
			}
		})
	}

	componentDidMount() {
		let xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		xhr.onreadystatechange = () => {
			if(xhr.readyState === 4) {
				if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
					console.log(xhr.responseText);
					let res = JSON.parse(xhr.responseText);
					console.log(res)
					if(res.errorCode === 0) {
						this.setState({detail: res.detail})
					} else {
						alert(res.errorMsg);
					}
				}
			}
		}
		
		xhr.open('GET', 'http://jcuan.org/exam/status', true);

		xhr.send(null);
	}

	render() {
		return (
			<div className="question-list-box">
				<WrapTop text="答题卡" needLogined={true}/>
				<QuestionList detail={this.state.detail} />
				<File />
				<WrapBottom>
					<button className="submitSure">
						<Link  onClick={this.sureSubmit} style={{color: '#00BC9B', fontSize: '1rem', textDecoration: 'none'}} >确认交卷</Link>
					</button>
				</WrapBottom>
			</div>
		)
	}
}

export default List;