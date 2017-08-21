import React, {Component} from 'react';
import Question from '../Components/Question';
import {Link, browserHistory} from 'react-router';
import Button from '../Components/Button';
import WrapTop from '../Components/WrapTop';
import WrapBottom from '../Components/WrapBottom';
import {fetch} from 'react-fetch';

let num = 14;
let order = new Array();

class QuestionPage extends Component {
	constructor() {
		super();

		this.state = {

		}
	}

	componentWillMount() {
	// fetch('/exam/status')
//    	.then((res) => { console.log(res.status);return res.json() })
  //    .then((data) => {num = data.detail.length})
	}

	componentDidMount() {
		let path = browserHistory.getCurrentLocation().pathname;
		order = path.split("/");
		let l = order.length;
		let o = order[l - 1];
		this.setState({
			order: parseInt(o),
			prevOrder: parseInt(o) - 1,
			nextOrder: parseInt(o) + 1
		});

		if (o == 1) {
			this.setState({
				first: true,
				last: false
			})
		} else if (o == num) {
			this.setState({
				first: false,
				last: true
			})
		} else {
			this.setState({
				first: false,
				last: false
			})
		}
	}

	render() {
		return (
			<div>
				<WrapTop text={"第" + this.state.order + "题"} needLogined={true}/>
				<Question order={this.state.order} />
				<WrapBottom>
					<div className="buttons-box">
						<Button key="prev-button"
								className={!this.state.first ? "button" : "no-button"} 
								path={!this.state.first ? "/questionlist/" + String(this.state.prevOrder) : ""}
								submit={false}
								linkStyle={{color: '#00BC9B', fontSize: '1rem', textDecoration: 'none'}}
								style={{display: 'inline-block', width: '33%', textAlign: 'center'}}
						>
							上一题
						</Button>
						<Button key="back-list" 
								className={"button"} 
								href="questionlist"
								submit={false}
								linkStyle={{color: '#00BC9B', fontSize: '1rem', textDecoration: 'none'}}
								style={{display: 'inline-block', width: '33%', textAlign: 'center'}}
						>
							返回目录
						</Button>
						<Button key="next-button"
								className={!this.state.last ? "button" : "no-button"} 
								path={!this.state.last ? "/questionlist/" + String(this.state.nextOrder) : "/questionlist/"}
								submit={false}
								linkStyle={{color: '#00BC9B', fontSize: '1rem', textDecoration: 'none'}}
								style={{display: 'inline-block', width: '33%', textAlign: 'center'}}
						>
							下一题
						</Button>
					</div>
				</WrapBottom>
			</div>
		)
	}
}

export default QuestionPage;