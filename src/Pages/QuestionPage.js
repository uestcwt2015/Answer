import React, {Component} from 'react';
import Question from '../Components/Question';
import {hashHistory} from 'react-router';
import StepButton from '../Components/StepButton';
import WrapTop from '../Components/WrapTop';
import WrapBottom from '../Components/WrapBottom';
import CSSModules from 'react-css-modules';
import style from '../css_modules/question_page.css';
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
					let res = JSON.parse(xhr.responseText);
					let num = Object.keys(res.detail).length;
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
								className={style.button} 
								href={!this.state.position.first ? "/questionlist/" + String(this.state.prevOrder) : "/questionlist/"}
								linkStyle={style.link}
						>
							上一题
						</StepButton>
						<StepButton key="back-list" 
								className={style.button} 
								href="/questionlist"
								linkStyle={style.link}
						>
							返回目录
						</StepButton>
						<StepButton key="next-button"
								className={style.button} 
								href={!this.state.position.last ? "/questionlist/" + String(this.state.nextOrder) : "/questionlist/"}
								linkStyle={style.link}
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
	let path = hashHistory.getCurrentLocation().pathname;
	let order = path.split("/");
	let l = order.length;
	let o = order[l - 1];
	let position;

	if (parseInt(o, 10) === 1) {
		position = {
			first: true,
			last: false
		}
	} else if (parseInt(o, 10) === stableNum) {
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

export default CSSModules(QuestionPage, style);