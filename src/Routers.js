import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './Pages/App.js';
import SignUp from './Pages/SignUp.js';
import StepOne from './Pages/SignUp_StepOne.js';
import StepTwo from './Pages/SignUp_StepTwo.js';
import NotFound from './Pages/NotFound.js';

const history = browserHistory;
const Routes = () => (
	<Router history={history}>
		<Route path="/" component={App}>
			<Route path="/signup" component={StepOne} />
			<Route path="/signup/steptwo" component={StepTwo}/>
		</Route>		
		<Route path="*" component={NotFound}/>
	</Router>
);

export default Routes;