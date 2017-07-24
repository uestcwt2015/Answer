import React from 'react';
import Button from '../Components/Button.js';

const App = ({children}) => {
	if(children) {
		return (
			<div>
				{children}
			</div>
		)
	} else {
		return (
			<div className="main">
				<img id="logo" src="images/logo.png" alt="logo" />
				<Button className="button index-button" href="signup" submit={false}>注册</Button>
				<Button className="button index-button" href="login" submit={false}>登录</Button>
			</div>
		);
	}
};

export default App;

