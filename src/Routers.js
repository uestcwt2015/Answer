import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './Pages/App.js';
import StepOne from './Pages/SignUp_StepOne.js';
import StepTwo from './Pages/SignUp_StepTwo.js';
import NotFound from './Pages/NotFound.js';
import Login from './Pages/Login';
import List from './Pages/List';
import QuestionPage from './Pages/QuestionPage';

const history = browserHistory;

const Routes = () => (
	<Router history={history}>
		<Route path="/" component={App}>
			<Route path="signup" component={StepOne} />
			<Route path="signup/steptwo" component={StepTwo}/>
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