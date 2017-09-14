import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';
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

		let keys = Object.keys(submitData);
		for(let i = 0; i < keys.length; i++) {
			dataHasFull = true;
			if(submitData[keys[i]] === "") {
				dataHasFull = false;
			}
		}

		if(!dataHasFull) {
			e.preventDefault();
		}


		let formData = new FormData();
	
		formData.append("data", JSON.stringify(submitData));

		fetch(this.props.url,{
			method:'POST',
			credentials: 'include',
	  		body: formData
		})
		.then((res) => {return res.json()})
		.then((data) => {
			if(data.errorCode === 0) {
				hashHistory.push(this.props.href);
				
			} else {
				alert(data.errorMsg);
			}
		})
	}

	render() {
		return(
			<span className={this.props.className} style={this.props.style}>
				<Link className={this.props.linkStyle} onClick={this.props.submit ? this.handleSubmit : ()=>{console.log(this.props.href);hashHistory.push(this.props.href)}}>{this.props.children}</Link>
			</span>
		)
	}
}

export default Button;