import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './header.less'
class App extends Component {
	render() {
		return (
			<div>
				<ul>
					<li><NavLink to="/login">退出登录</NavLink></li>
					<li><NavLink to="/">去产品</NavLink></li>
					<li><NavLink activeClassName="header-link-active" to="/nav/report">报告</NavLink></li>
					<li><NavLink activeClassName="header-link-active" to="/nav/resource">资源库</NavLink></li>
				</ul>
			</div>
		);
	}
}

export default App;