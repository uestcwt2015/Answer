import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from './Pages/App.js';
import Achieve from './Pages/Achieve.js';
import StepOne from './Pages/SignUp_StepOne.js';
import StepTwo from './Pages/SignUp_StepTwo.js';
import NotFound from './Pages/NotFound.js';
import Login from './Pages/Login';
import List from './Pages/List';
import Notice from './Pages/Notice.js';
import QuestionPage from './Pages/QuestionPage';

const history = hashHistory;

const Routes = () => (
	<Router history={history}>
		<Route path="/">
			<IndexRoute component={App} />
			<Route path="achieve">
				<IndexRoute component={Achieve} />
			</Route>
			<Route path="signup" component={StepOne} />
			<Route path="signup/steptwo" component={StepTwo}/>
			<Route path="notice" component={Notice} />
			<Route path="login" component={Login}/>
			<Route path='questionlist'>
				<IndexRoute component={List} />
				<Route path='/*' component={QuestionPage} />
			</Route>
		</Route>		
		<Route path="*" component={NotFound} />
	</Router>
);

export default Routes;