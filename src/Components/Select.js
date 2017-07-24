import React, {Component} from 'react';

class Select extends Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0
		}
	} 
	
	render(){
		return(
			<label>
				<span className="label-left">{this.props.label}:</span>
				<select name={this.props.name} id={this.props.id} >
					{
						this.props.arr.map((a) => {
							return (
								<option key={this.state.index} data-index={++this.state.index}>{a}</option>
							)
						})
					}
				</select>
			</label>
		)
	}
}

export default Select; 