import React, {Component} from 'react';
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
 	}
	
	getInitialState() {
		return {
			"order": 1,
			    "question": "公共简单选择题选项是图",
			    "questionImages": [],
			    "options": {
			        "type": "image",
			        "list": [
			            "aaa.jpg",
			            "bbb.jpg",
			            "ccc.jpg",
			            'ddd.jpg'
			        ]
			    },
			    "type": "选择",
			    "answer": [
			        5
			    ],
			    "errorCode": 0
		}
	}

	componentDidMount() {
		fetch('http://jcuan.org/exam/subject?order=' + this.props.order, {credentials: 'include'})
            .then((res) => {return res.json()})
            .then((data) => {console.log(data);this.setState(data)})
            .catch((e) => { console.log(e) })
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state !== nextState;
	}

	componentDidUpdate(nextProps, nextState) {
		if(nextProps) {
			checked = true;
		}

		if(checked === true && this.state.answer !== false) {
			console.log(this.state.answer);
			if(this.state.type === '选择') {
				let list = document.getElementById('options-list').getElementsByTagName('li');
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
		}
		
	}
	
	componentWillReceiveProps(nextProps) {
		fetch('http://jcuan.org/exam/subject?order=' + nextProps.order, {credentials: 'include'})
            .then((res) => {return res.json()})
            .then((data) => {console.log(data);this.setState(data)})
            .catch((e) => { console.log(e) })
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
		alert(o.answer);
		let formData = new FormData();
		formData.append("data", JSON.stringify(o));
		console.log(formData.get('data'));
		fetch('http://jcuan.org/exam/submitAnswer' ,{
			method:'POST',
			credentials: 'include',
			body: formData
		})
		.then((res) => (res.json()))
		.then((data)=>{console.log(data)})
	}

	checked(e) {
		let n;
		if(e.target.nodeName === 'LI') {
			n = e.target.getElementsByTagName('span')[0];
		} else if(e.target.nodeName === 'SPAN') {
			n = e.target.parentNode.getElementsByTagName('span')[0];
		}

		if(n.style.background !== 'rgb(0, 188, 155)') {
			n.style.background = '#00BC9B';
			n.style.borderColor = '#00BC9B';
			n.style.color = 'white';
			let m = parseInt(n.getAttribute('data-num'), 10);
			answer.push(m);
		} else if (n.style.background === 'rgb(0, 188, 155)'){
			n.style.background = 'none';
			n.style.borderColor = '#3c3c3c';
			n.style.color = 'black';
			removeByValue(answer, n.getAttribute('data-num'))
		}
	}

	render() {
		if(this.state.type === "选择") {
			return( 
				<div className="question-box" styleName="container">
					<div className="question-main" styleName="main">
						<p className="question-text" styleName='question'>
							{this.state.order + '.' + this.state.question}
						</p>
						<img className="question-image" alt={this.state.questionImages} src={this.state.questionImages} styleName="image"/>
						<Options key="options" type={this.state.options.type} list={this.state.options.list} onClick={this.checked}/>
						<button className='submit' onClick={this.submit} styleName='button'>确认提交</button> 
					</div>
				</div>
			)
		}
		else if (this.state.type === "简答") {
			return(
				<div className="question-box" styleName="container">
					<div className="question-main" styleName="main">
						<p className="question-text" styleName='question'>
							{this.state.order + '.' + this.state.question}
						</p>
						<img className="question-image" alt={this.state.questionImages} src={this.state.questionImages} styleName="image"/>
						<textarea cols='40' rows='10' styleName="text" id="text"></textarea>
						<button className='submit' onClick={this.submit} styleName='button'>确认提交</button> 
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
			<ul className={style.main} id="options-list">
				{
					props.list.map((text) => {
					 	return (
							<li key={i} className={style.textLi} onClick={props.onClick}>
								<span data-num={i++} className={style.option} key={text}>{String.fromCharCode(charCode++)}</span>
								<span className={style.optionText}>{text}</span>
							</li>
					 	)
					})
				}
			</ul>
		)
	} else if(props.type === "image") {
		return (
			<ul className={style.main} id='options-list'>
				{
					props.list.map((url) => {
					 	return (
							<li key={i} className={style.li} onClick={props.onClick}>
								<span data-num={i++} className={style.option} >{String.fromCharCode(charCode++)}</span>
								<img src={url} alt={url} className={style.optionImage}/>
 							</li>
					 	)
					 })
				}
			</ul>
		)
	}
};

function removeByValue(arr, val) {
    for(var i=0; i<arr.length; i++) {
    	if(arr[i] === val) {
	        arr.splice(i, 1);
	        break;
    	}
  	}
}

export default CSSModules(Question, style);