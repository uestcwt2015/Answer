import React, {Component} from 'react';
import Question from '../Components/Question';
import {browserHistory} from 'react-router';
import StepButton from '../Components/StepButton';
import WrapTop from '../Components/WrapTop';
import WrapBottom from '../Components/WrapBottom';
import 'isomorphic-fetch';
import 'es6-promise';

let stableNum;

class QuestionPage extends Component {
	constructor() {
		super();
		
		

		this.state = getOrder();
	}

	componentDidMount() {
		let xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		xhr.onreadystatechange = () => {
			if(xhr.readyState === 4) {
				if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
					console.log(xhr.responseText);
					let res = JSON.parse(xhr.responseText);
					let num = Object.keys(res.detail).length;
					console.log(num);
					this.setState(getOrder(num));
				}
			}
		}
		
		xhr.open('GET', 'http://jcuan.org/exam/status');

		xhr.send(null);

	}
	
	componentWillReceiveProps(nextProps) {
		if(nextProps.params.splat) {
			this.setState(getOrder());
		}
	}

	render() {
		return (
			<div>
				<WrapTop text={"第" + this.state.order + "题"} needLogined={true}/>
				<Question order={this.state.order} />
				<WrapBottom>
					<div className="buttons-box">
						<StepButton key="prev-button"
								className={!this.state.position.first ? "button" : "no-button"} 
								href={!this.state.position.first ? "/questionlist/" + String(this.state.prevOrder) : "/questionlist/"}
								linkStyle={{color: '#00BC9B', fontSize: '1rem', textDecoration: 'none'}}
								style={{display: 'inline-block', width: '33%', textAlign: 'center'}}
						>
							上一题
						</StepButton>
						<StepButton key="back-list" 
								className={"button"} 
								href="/questionlist"
								linkStyle={{color: '#00BC9B', fontSize: '1rem', textDecoration: 'none'}}
								style={{display: 'inline-block', width: '33%', textAlign: 'center'}}
						>
							返回目录
						</StepButton>
						<StepButton key="next-button"
								className={!this.state.position.last ? "button" : "no-button"} 
								href={!this.state.position.last ? "/questionlist/" + String(this.state.nextOrder) : "/questionlist/"}
								linkStyle={{color: '#00BC9B', fontSize: '1rem', textDecoration: 'none'}}
								style={{display: 'inline-block', width: '33%', textAlign: 'center'}}
						>
							下一题
						</StepButton>
					</div>
				</WrapBottom>
			</div>
		)
	}
}

function getOrder(num) {
	if(num !== undefined) {
		stableNum = num;
	}
	let path = browserHistory.getCurrentLocation().pathname;
	let order = path.split("/");
	let l = order.length;
	let o = order[l - 1];
	let position;
	console.log(o, stableNum);
	if (o === 1) {
		position = {
			first: true,
			last: false
		}
	} else if (o === stableNum) {
		position = {
			first: false,
			last: true
		}
	} else {
		position = {
			first: false,
			last: false
		}
	}

	return {
		order: parseInt(o, 10),
		prevOrder: parseInt(o, 10) - 1,
		nextOrder: parseInt(o, 10) + 1,
		position: position
	}
}

export default QuestionPage;