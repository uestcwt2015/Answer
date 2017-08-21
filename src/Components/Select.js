import React, {Component} from 'react';

const labelStyle = {
	'fontSize':  '1.1rem',
	'width':  '60%',
	'margin': '1rem auto 0.5rem',
	'verticalAlign': 'top',
	'textAlign': 'left',
	'color': '#b6b1b4',
}

const ulStyle = {
	'width': '60%',
	'marginLeft': '0.6rem',
	'margin': ' 0.5rem auto',
	'padding': '0.4rem',
	'textAlign': 'left',
	'color': '#b6b1b4',
}

const errorStyle = {
	'display': 'block',
	'color': 'red',
	'fontSize': '1rem',
	'transform':  'scale(0.6)',
}

const checkboxStyle = {
	'lineHeight': '1.2rem',
	'height': '1.2rem',
	'float': 'left'
}

let sum = 0;
class Select extends Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			error: ''
		}

		this.CheckState = this.CheckState.bind(this);
	} 
	
	CheckState(e) {
		let checkboxes = document.getElementById(this.props.id).getElementsByTagName("input");
		
		let m = 0;
		if(sum >= 2) {
			e.target.checked = false;
			this.setState({error: '方向最多选两个'});
		}

		for(let i = 0; i < checkboxes.length; i++) {
			if(checkboxes[i].checked) {
			   ++m;
			}
		}
		sum = m;
	}

	render(){
		return(
			<div>
				<p className="label-left" style={labelStyle}>{this.props.label + '(最多选择两项)'} </p>
				<ul name={this.props.name} id={this.props.id} style={ulStyle}>
					<span className="error" style={errorStyle}>{this.state.error}</span>
					{
						this.props.arr.map((a) => {
							return (
								<p key={this.state.index}>
									<label htmlFor={"toward" + this.state.index}>
										<input name="toward" type="checkbox" id={"toward" + this.state.index} value={++this.state.index} onClick={this.CheckState}/>
										{a}
									</label>
								</p>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

export default Select; 