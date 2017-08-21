import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {fetch} from 'react-fetch';

class Button extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		let submitData = this.props.data || {};
		let towards = new Array();
		let dataHasFull = false;
		if(JSON.stringify(submitData) == '{}') {
			let inputs = document.getElementsByTagName("form")[0].getElementsByTagName("input");
			
			for(let i = 0; i < inputs.length; i++) {
				let name = inputs[i].name;
				let value = inputs[i].value;
				if(name === "toward") {
					if(inputs[i].checked){
						towards.push(value);
					}
					
					submitData[name] = towards;
				} else {
					submitData[name] = value;
				}
			}
		}
		let keys = Object.keys(submitData);
		for(let i = 0; i < keys.length; i++) {
			dataHasFull = true;
			if(submitData[keys[i]] == "") {
				dataHasFull = false;
			}
		}

		if(!dataHasFull) {
			e.preventDefault();
		}



		// fetch(this.props.url,{
		// 	method:'POST',
		// 	headers: { 
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json' 
		// 		},
		// 	body:JSON.stringify(submitData)
		// })
		// .then(res => res.json())
	}
	
	render() {
		return(
			<span className={this.props.className} style={this.props.style}>
				<Link to={this.props.href} style={this.props.linkStyle} onClick={this.props.submit ? this.handleSubmit : ()=>{if(this.props.path){window.location.href = this.props.path}}}>{this.props.children}</Link>
			</span>
		)
	}
}

export default Button;