import React, { Component } from 'react';
import {Route, Switch,NavLink,Redirect} from 'react-router-dom';
// 异步组件
import asyncComponent from '@/components/AsyncComponent'
// header
import Header from './header/Header.js'
// routes
const Report 	= asyncComponent(() => import('./report/Report.js'));
const Resource 	= asyncComponent(() => import('./resource/Resource.js'));

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/nav/" render={()=><Redirect to="/nav/report"/>} />
					<Route path="/nav/report" component={Report}/>
					<Route path="/nav/resource" component={Resource}/>
				</Switch>
			</div>
		);
	}
}

export default App;