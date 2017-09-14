import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import style from '../css_modules/select.css';

let sum = 0;
class Select extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
				<p className={style.label}>{this.props.label + '(最多选择两项)'} </p>
				<ul name={this.props.name} id={this.props.id} className={style.ul}>
					<p styleName='error'>{this.state.error}</p>
					{
						this.props.arr.map((a, i) => {
							return (
								<p key={i} className={style.p}>
									<label htmlFor={"toward" + i}>
										<input name="toward" type="checkbox" className={style.checkbox} id={"toward" + i} value={i+1} onClick={this.CheckState} />
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

export default CSSModules(Select, style); 