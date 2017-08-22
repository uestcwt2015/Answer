import React, {Component} from 'react';
import {fetch} from 'react-fetch';
let order;
let answer = [];
const optionStyle = {
	'display': 'inline-block',
	'border': '1px solid #3c3c3c',
	'borderRadius': '50%',
	'height': '1.4rem',
	'width': '1.4rem',
	'lineHeight': '1.4rem',
	'textAlign': 'center'
}

const textStyle = {
	'outline': 'none',
	'border': '1px solid #adadad',
	'resize': 'none',
}

const buttonStyle = {
	'display': 'block',
	'width': '100%',
	'height': '2.5rem',
	'border': 'none',
	'borderRadius': '5px',
	'background': '#00BC9B',
	'outline': 'none',
	'margin': '2rem auto',
	'color': 'white'
}

class Question extends Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
		order = this.state.order;
		this.checked = this.checked.bind(this);
		this.submit = this.submit.bind(this);
 	}
	
	componentWillMount() {
		fetch('/exam/subject?order=' + this.props.order)
            .then((res) => {return res.json()})
            .then((data) => {this.setState(data)})
            .catch((e) => { console.log(e) })
	}

	componentDidMount() {
		if(this.state.type === 'choice') {
			let list = document.getElementsByTagName('li');
			let answers = this.state.answer;

			answers.map((e) => {
				list[e].click();
			})
		} else if(this.state.type === 'jianda') {
			let text = document.getElementById('text');
			text.value = this.state.answer;
		}
	}

	submit() {
		let text = document.getElementById('text').value;
		answer = text;
	}

	checked(e) {
		let n = e.target.parentNode.getElementsByTagName('span')[0];
		if(n.style.background !== 'rgb(0, 188, 155)') {
			n.style.background = '#00BC9B';
			n.style.borderColor = '#00BC9B';
			answer.push(n.getAttribute('data-num'));
		} else if (n.style.background === 'rgb(0, 188, 155)'){
			n.style.background = 'none';
			n.style.borderColor = '#3c3c3c';
			removeByValue(answer, n.getAttribute('data-num'))
		}
	}

	render() {
		if(this.state.type == "choice") {
			return( 
				<div className="question-box" style={{margin: '3.5rem auto'}}>
					<div className="question-main" style={{'padding': '0 1rem', 'textAlign': 'left', 'fontSize': '0.9rem'}}>
						<p className="question-text">
							{this.state.order + '.' + this.state.question}
						</p>
						<img  className="question-image" src={'../images/girl.jpg'} style={{'width': '80%','display': 'block', 'margin': '1rem auto'}}/>
						<Options key="options" type={this.state.options.type} list={this.state.options.list} checked={this.checked}/>
					</div>
				</div>
			)
		}
		else if (this.state.type == "jianda") {
			return(
				<div className="question-box" style={{margin: '3.5rem auto'}}>
					<div className="question-main" style={{'padding': '0 1rem', 'textAlign': 'left', 'fontSize': '0.9rem'}}>
						<p className="question-text">
							{this.state.order + '.' + this.state.question}
						</p>
						<img  className="question-image" src={this.state.questionImage} style={{'width': '80%','display': 'block', 'margin': '1rem auto'}}/>
						<textarea cols='51' rows='10' style={textStyle} id="text"></textarea>
						<button className='submit' onClick={this.submit} style={buttonStyle}>确认提交</button> 
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
			<ul className="question-options" style={{'padding': '0px', 'margin': '0px'}} id="options-list">
				{
					props.list.map((text) => {
					 	return (
							<li style={{'listStyle': 'none', lineHeight: '2.4rem'}} className="question-option" onClick={props.checked}>
								<span data-num={i++} style={optionStyle}>{String.fromCharCode(charCode++)}</span>
								<span style={{'marginLeft': '0.5rem', 'lineHeight': '1.4rem'}}>{text}</span>
							</li>
					 	)
					})
				}
			</ul>
		)
	} else if(props.type === "image") {
		return (
			<ul className="question-options" style={{'padding': 'none', 'margin': 'none'}}>
				{
					props.list.map((url) => {
					 	return (
							<li style={{'listStyle': 'none'}}className="question-option" onClick={props.checked}>
								<span data-num={i++} style={optionStyle} key={i++}>{String.fromCharCode(charCode++)}</span>
								<img key={i++} className="question-option-image" src={url} style={{'width': '60%','display': 'inline-block', 'margin': '0.2rem 1rem 2rem', 'verticalAlign': 'top'}}/>
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
    	if(arr[i] == val) {
	        arr.splice(i, 1);
	        break;
    	}
  	}
}

window.onbeforeunload = function() {
	let o = {
		'order': order,
		'answer': answer
	}
	
	fetch('/exam/submitAnswer' ,{
		method:'POST',
		headers: { 
			'Accept': 'application/json',
			'Content-Type': 'application/json' 
			},
		body:JSON.stringify(o)
	})
	.then(res => res.json())
};

export default Question;