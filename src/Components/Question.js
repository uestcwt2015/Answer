import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import 'isomorphic-fetch';
import 'es6-promise';
import CSSModules from 'react-css-modules';
import style from '../css_modules/question.css';

let order = '';
let answer = [];
let checked = true;


class Question extends Component {
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		order = this.props.order;
		this.checked = this.checked.bind(this);
		this.submit = this.submit.bind(this);

		answer = [];
 	}

	getInitialState() {
		return {
			"order": 0,
			    "question": "",
			    "questionImages": [],
			    "options": {
			        "type": "image",
			        "list": [

			        ]
			    },
			    "type": "选择",
			    "answer": [
			    ],
			    "errorCode": 0
		}
	}

	componentDidMount() {
		answer = [];
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.order !== nextState.order;
	}

	componentDidUpdate(nextProps, nextState) {
		answer = [];
		let list = [];
		if(document.getElementById('options-list')) {
			list = document.getElementById('options-list').getElementsByTagName('li');
			for(let i = 0; i < list.length; i++) {
				list[i].firstChild.style.background = 'none';
				list[i].firstChild.style.borderColor = '#3c3c3c';
				list[i].firstChild.style.color = 'black';
			}
		}

		if(nextProps) {
			checked = true;
		}

		if(checked === true && this.state.answer !== false) {
			if(this.state.type === '选择') {
				let answers = this.state.answer || [];

				answers.map((e) => {
					list[e].click();
					checked = false;
					return ' ';
				})
			} else if(this.state.type === '简答') {
				let text = document.getElementById('text');
				text.value = this.state.answer;

			}
		} else {
			let text = document.getElementById('text');
			if(this.state.type === '简答' && this.state.answer === false) {
					text.value = ' ';
			}
		}



	}

	componentWillReceiveProps(nextProps) {
		fetch('http://exam.stuhome.com/exam/subject?order=' + nextProps.order, {credentials: 'include'})
            .then((res) => {return res.json()})
            .then((data) => {this.setState(data)})
            .catch((e) => {alert(e)})
    }

	submit() {
		if(this.state.type === '简答') {
			let text = document.getElementById('text').value;
			answer = text;
		}
		let o = {
			'order': this.state.order,
			'answer': answer
		}

		let formData = new FormData();
		formData.append("data", JSON.stringify(o));

		fetch('http://exam.stuhome.com/exam/submitAnswer' ,{
			method:'POST',
			credentials: 'include',
			body: formData
		})
		.then((res) => (res.json()))
		.then((data)=>{
			if(data.errorCode === 0){
				if(this.state.order === this.props.num){
					hashHistory.push('/questionlist');
				} else {
					hashHistory.push('/questionlist/' + String(this.state.order + 1));
				}
			} else {
				alert(data.errorMsg);
			}
		})
	}

	checked(e) {
		let n;
		if(e.target.nodeName === 'LI') {
			n = e.target.getElementsByTagName('span')[0];
		} else if(e.target.nodeName === 'SPAN' || e.target.nodeName === 'IMG' ) {
			n = e.target.parentNode.getElementsByTagName('span')[0];
		}

		if(n.style.background !== 'rgb(0, 188, 155)') {
			n.style.background = '#00BC9B';
			n.style.borderColor = '#00BC9B';
			n.style.color = 'white';
			let m = parseInt(n.getAttribute('data-num'), 10);
			if(!Array.isArray(answer)) return;
			answer.push(m);
		} else if (n.style.background === 'rgb(0, 188, 155)'){
			n.style.background = 'none';
			n.style.borderColor = '#3c3c3c';
			n.style.color = 'black';

			(function(arr, val) {
				for(var i=0; i<arr.length; i++) {
			    	if(arr[i] === parseInt(val, 10)) {
				        arr.splice(i, 1);
			    	}
  				}
			}(answer, n.getAttribute('data-num')));

		}
	}

	render() {
		if(this.state.type === "选择") {
			return(
				<div className={style.container}>
					<div className={style.main}>
						<p className={style.question}>
							{this.state.order + '.' + this.state.question}
						</p>
						<img alt={this.state.questionImages} src={this.state.questionImages} className={style.image}/>
						<Options key="options" order={this.state.order} type={this.state.options.type} list={this.state.options.list} onClick={this.checked}/>
						<button className={style.button} onClick={this.submit}>确认提交</button>
					</div>
				</div>
			)
		}
		else if (this.state.type === "简答") {
			return(
				<div  className={style.container}>
					<div  className={style.main}>
						<p  className={style.question}>
							{this.state.order + '.' + this.state.question}
						</p>
						<img  alt={this.state.questionImages} src={this.state.questionImages} className={style.image}/>
						<textarea id="text" className={style.textarea}></textarea>
						<button  onClick={this.submit} className={style.button}>确认提交</button>
					</div>
				</div>
			)
		}
	}
};

function Options(props) {
	let charCode = 65;
	let i = 0;

	if(props.type === "text") {
		return (
			<ul className={style.ul} id="options-list">
				{
					props.list.map((text) => {
					 	return (
							<li key={i} className={style.text_li} onClick={props.onClick}>
								<span order={props.order} data-num={i++} className={style.option} key={text}>{String.fromCharCode(charCode++)}</span>
								<span className={style.optionText}>{text}</span>
							</li>
					 	)
					})
				}
			</ul>
		)
	} else if(props.type === "image") {
		return (
			<ul className={style.ul} id='options-list'>
				{
					props.list.map((url) => {
					 	return (
							<li key={i} className={style.li} onClick={props.onClick}>
								<span order={props.order} data-num={i++} className={style.option} >{String.fromCharCode(charCode++)}</span>
								<img src={url} alt={url} className={style.optionImage}/>
 							</li>
					 	)
					 })
				}
			</ul>
		)
	}
};


export default CSSModules(Question, style);
