import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// 异步组件
import asyncComponent from '../components/AsyncComponent'
// routes
const Login 	= asyncComponent(() => import('../containers/login/Login'));
const Nav 		= asyncComponent(() => import('../containers/nav/Nav'));
const Product 	= asyncComponent(() => import('../containers/product/Product'));

export default () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Product} />
				<Route path="/nav" component={Nav} />
				<Route path="/login" component={Login} />
			</Switch>
		</Router>
	);
};
