import React from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';

function StepOne() {
	return (
		<form className="form">
			<Input label="姓名" type="text" name="userName" id="username" key="username"/>
			<Input label="学号" type="text" name="studentNumber" id="studentNumber" key="studentNumber"/>
			<Button href="/signup/steptwo" className="button next-step-button" submit={true}>下一步</Button>
		</form>
	)
}

export default StepOne;