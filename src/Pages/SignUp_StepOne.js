import React, {Component} from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import 'isomorphic-fetch';
import 'es6-promise';
import CSSModules from 'react-css-modules';
import style from '../css_modules/signup.css';

class StepOne extends Component {
	constructor(props) {
		super(props);

		this.state = {
			imgUrl: 'http://exam.stuhome.com/user/captcha/'
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
			<div className={style.main1}>
				<form className={style.form}>
					<Input label="学号" type="text" name="studentId" id="studentNumber" key="studentNumber"/>
					<Input label="信息门户密码" type="password" name="password" id="password" key="password"/>
					<p className={style.p}>
						<Input label="验证码" type="text" name="captcha" id='captcha' key="captcha" className="captche" labelStyle="captche_label"/>
						<img src={this.state.imgUrl} onClick={this.changeImage} className={style.img}/>
					</p>
					<Button href="/signup/stepTwo" submit={true} url={'http://exam.stuhome.com/user/registerOne'} className={style.button} >下一步</Button>
				</form>
			</div>
		)
	}

}


export default CSSModules(StepOne, style);
