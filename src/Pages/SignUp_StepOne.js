import React, {Component} from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import 'isomorphic-fetch';
import 'es6-promise';
import CSSModules from 'react-css-modules';
import style from '../css_modules/signup.css';

const mainStyle = {
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'bottom': '0px',
	'right': '0px',
	'backgroundImage': 'url("../images/bg2.jpg")',
	'backgroundColor': 'black',
	'backgroundSize': 'cover',
	'backgroundRepeat': 'no-repeat',
	'backgroundPosition': '0px -100px'
}

const formStyle = {
	'position': 'relative',
	'top': '20%',
	'margin': '0 auto',
	'textAlign': 'center'
}

const buttonStyle = {
	'display': 'inline-block',
	'width': '60%',
	'height': '2.5rem',
	'borderRadius': '5px',
	'background': '#00BC9B',
	'outline': 'none',
	'marginTop': '4rem'
}

const linkStyle = {
	'color': '#fcfcfc',
	'fontSize': '1rem',
	'lineHeight': '2.5rem',
	'textDecoration': 'none',
	'textAlign': 'center',
}

const captcha = {
	'width': '30%'
}

const img = {
	'width': '6rem'
}

class StepOne extends Component {
	constructor(props) {
		super(props);

		this.state = {
			imgUrl: 'http://jcuan.org/user/captcha/'
		}

		this.changeImage = this.changeImage.bind(this);
	}

	changeImage() {
		this.setState({
			imgUrl: this.state.imgUrl + 'a'
		})
	}

	render() {
		return (
			<div style={mainStyle}>
				<form className={formStyle}>
					<Input label="学号" type="text" name="studentId" id="studentNumber" key="studentNumber"/>
					<Input label="密码" type="password" name="password" id="password" key="password"/>
					<p>
						<Input label="验证码" type="text" name="captcha" id='captcha' key="captcha" className={captcha}/>
						<img src={this.state.imgUrl} onClick={this.changeImage} className={img}/>
					</p>
					<Button href="/signup/stepTwo" className="button next-step-button" submit={true} url={'http://jcuan.org/user/registerOne'} style={buttonStyle} linkStyle={linkStyle}>下一步</Button>
				</form>
			</div>
		)
	}

}


export default CSSModules(StepOne, style);