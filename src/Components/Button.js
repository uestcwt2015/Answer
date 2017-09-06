import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import 'whatwg-fetch';
import 'es6-promise';

class Button extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		let submitData = this.props.data || {};
		let towards = [];
		let dataHasFull = false;
		if(JSON.stringify(submitData) === '{}') {
			let inputs = document.getElementsByTagName("form")[0].getElementsByTagName("input");
			
			for(let i = 0; i < inputs.length; i++) {
				let name = inputs[i].name;
				let value = inputs[i].value;
				if(name === "toward") {
					if(inputs[i].checked){
						towards.push(parseInt(value, 10));
					}
					submitData[name.toString()] = towards;
				} else {
					submitData[name.toString()] = value;
				}
			}
		}
		console.log(submitData);
		let keys = Object.keys(submitData);
		for(let i = 0; i < keys.length; i++) {
			dataHasFull = true;
			if(submitData[keys[i]] === "") {
				dataHasFull = false;
			}
		}
		console.log(dataHasFull);
		if(!dataHasFull) {
			e.preventDefault();
		}


		let formData = new FormData();
	
		formData.append("data", JSON.stringify(submitData));
		//submitData: {"studentId":"2014070902022","password":"123"}
		console.log(formData.get('data'));

		fetch(this.props.url,{
			method:'POST',
			credentials: 'include',
	  		body: formData
		})
		.then((res) => {return res.json()})
		.then((data) => {
			console.log(data);
			if(data.errorCode === 0) {
				browserHistory.push(this.props.href);
			} else {
				alert(data.errorMsg);
			}
		})

		// let xhr = new XMLHttpRequest();
		// xhr.withCredentials = true;
		// xhr.onreadystatechange = () => {
		// 	if(xhr.readyState === 4) {
		// 		if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
		// 			console.log(xhr.responseText);
		// 			let res = JSON.parse(xhr.responseText);
		// 			console.log(res)
		// 			if(res.errorCode === 0) {
		// 				browserHistory.push(this.props.href);
		// 			} else {
		// 				alert(res.errorMsg);
		// 			}
		// 		}
		// 	}
		// }
		
		// xhr.open('POST', this.props.url , true);

		// xhr.send(formData);
	}

	render() {
		return(
			<span className={this.props.className} style={this.props.style}>
				<Link style={this.props.linkStyle} onClick={this.props.submit ? this.handleSubmit : ()=>{console.log(this.props.href);browserHistory.push(this.props.href)}}>{this.props.children}</Link>
			</span>
		)
	}
}

export default Button;