import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import style from '../css_modules/input.css';

class Input extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			valid: false,
			value: '',
			error: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let name = this.props.name;
		let inputValue = event.target.value;
		let value = '';
		
		let newState = {
			valid: true,
			value: '',
			error: ''
		};

		switch(name) {
			case "userName": 
				if(inputValue.length > 8 || inputValue.length < 2) {
					newState = {
						valid: false,
						value: '',
						error: "请输入2到8个汉字"
					}
				} else if(inputValue === "") {
					newState = {
						valid: false,
						value: '',
						error: "姓名不能为空"
					}
				} else {
					newState = {
						valid: true,
						value: value,
						error: ''
					}
				}
				
				break;
			case "studentNumber":
				if(inputValue.length === 12 || inputValue.length === 13) {
					newState = {
						valid: true,
						value: value,
						error: ''
					}
				} else if(inputValue === "") {
					newState = {
						valid: false,
						value: '',
						error: "学号不能为空"
					}
				} else {
					newState = {
						valid: false,
						value: '',
						error: "请输入正确的学号"
					}
				}
				
				break;
			case "uid": 
				let Reg1 = new RegExp( /^[A-Za-z0-9_-]+$/);

				if(Reg1.test(inputValue)) {
					newState = {
						valid: true,
						value: inputValue,
						error: ''
					}
				} else if(inputValue === "") {
					newState = {
						valid: false,
						value: '',
						error: "用户名不能为空"
					}
				} else {
					newState = {
						valid: false,
						value: '',
						error: '用户名只允许由字母，数字和下划线组成'
					}
				}

				break
			case "password": 
				let Reg2 = new RegExp(/^[A-Za-z0-9]+$/);

				if(Reg2.test(inputValue)) {
					newState = {
						valid: true,
						value: inputValue,
						error: ''
					}
				} else if(inputValue === "") {
					newState = {
						valid: false,
						value: '',
						error: "密码不能为空"
					}
				} else {
					newState = {
						valid: false,
						value: '',
						error: '密码只允许由字母，数字组成'
					}
				}

				break;
			case "passwordCopy": 
				let Reg3 = new RegExp(/^[A-Za-z0-9]+$/);

				let prevPassword = document.getElementById("password").value;
				if(Reg3.test(inputValue) && inputValue === prevPassword ) {
					newState = {
						valid: true,
						value: inputValue,
						error: ''
					}
				} else if(inputValue !== prevPassword ) {
					newState = {
						valid: false,
						value: '',
						error: '两次密码输入不一致'
					}
				}

				break;
			case "email": 
				let Reg4 = new RegExp(/^[\w-\._]{2,64}@[\w-\._]{1,200}\.[a-z]{2,6}$/);

				if(Reg4.test(inputValue)) {
					newState = {
						valid: true,
						value: inputValue,
						error: ''
					}
				} else if(inputValue === "") {
					newState = {
						valid: false,
						value: '',
						error: "邮箱不能为空"
					}
				} else {
					newState = {
						valid: false,
						value: '',
						error: '邮箱不正确'
					}
				}

				break;
			case "phoneNumber": 
				let Reg5 = new RegExp(/^1[3|4|5|8][0-9]\d{4,8}$/);

				if(Reg5.test(inputValue)) {
					newState = {
						valid: true,
						value: inputValue,
						error: ''
					}
				} else if(inputValue === "") {
					newState = {
						valid: false,
						value: '',
						error: "手机号不能为空"
					}
				} else {
					newState = {
						valid: false,
						value: '',
						error: '手机号码不正确'
					}
				}

				break;
			default: 
				newState = {
					valid: true,
					value: inputValue,
					error: ''
				}
		}
		
		
		this.setState(newState);
	}

	render() {
		return (
			<label>
				<input placeholder={this.props.label} type={this.props.type} styleName="input" id={this.props.id} name={this.props.name} onBlur={this.handleChange} />
		    	<span styleName='error'>{this.state.error}</span>
			</label>
		)
	}
}

export default CSSModules(Input, style);