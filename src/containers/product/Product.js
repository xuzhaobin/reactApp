import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				我是产品
				<Link to="/login">去登陆</Link>
				<Link to="/nav">去report</Link>
      		</div>
		);
	}
}

export default App;