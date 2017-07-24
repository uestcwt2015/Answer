import React, {Component} from 'react';
import {Link} from 'react-router'
class Button extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		if(!document.getElementsByClassName("form")[0].getAttribute("canUse")) {
			e.preventDefault();
		}
		
		let inputs = document.getElementsByClassName("form")[0].getElementsByTagName("input");

		let formData = {}

		for (let i = 0; i < inputs.length; i++) {
			let name = inputs[i].name;
			let value = inputs[i].value;

			formData[name] = value;
		}
	}

	render() {
		return(
			<span className={this.props.className}><Link to={this.props.href} onClick={this.props.submit ? this.handleSubmit : ()=>(0)}>{this.props.children}</Link></span>
		)
	}
}

export default Button;