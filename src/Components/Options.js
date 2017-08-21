import React, {Component} from 'react';

let charCode = 65;
let i = 0;

const optionStyle = {
	'display': 'inline-block',
	'border': '1px solid #3c3c3c',
	'borderRadius': '50%',
	'height': '1.4rem',
	'width': '1.4rem',
	'lineHeight': '1.4rem',
	'textAlign': 'center'
}

const optionChecked = {
	'display': 'inline-block',
	'border': '1px solid #00BC9B',
	'background': '#00BC9B',
	'borderRadius': '50%',
	'height': '1.4rem',
	'width': '1.4rem',
	'lineHeight': '1.4rem',
	'textAlign': 'center'
}

class Options extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: ''
		}
	}
	
	checked(e) {
		if(this.props.checked !== true) {
			this.setState({
				checked: true
			})
		} else {
			this.setState({
				checked: false
			})
		}
		
	}

	render() {
		return(
			if(this.props.type === "text") {
				return (
					<ul className="question-options" style={{'padding': '0px', 'margin': '0px'}}>
						{
							this.props.list.map((text) => {
							 	return (
									<li style={{'listStyle': 'none', lineHeight: '2.4rem'}} className="question-option" onClick={this.checked}>
										<span style={this.state.checked ? optionChecked : optionStyle}>{String.fromCharCode(charCode++)}</span>
										<span style={{'marginLeft': '0.5rem', 'lineHeight': '1.4rem'}}>{text}</span>
									</li>
							 	)
							})
						}
					</ul>
				)
			} else if(this.props.type === "images") {
				return (
					<ul className="question-options" style={{'padding': 'none', 'margin': 'none'}}>
						{
							this.props.list.map((url) => {
							 	return (
									<li key={i++} className="question-option" onClick={this.onClick}>
										<span key={i++}>{String.fromCharCode(charCode++)}</span>
										<img key={i++} className="question-option-image" src={url} />
		 							</li>
							 	)
							 })
						}
					</ul>
				)
			}
		)
	}
}
