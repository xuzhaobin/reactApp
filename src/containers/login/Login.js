import React, { Component } from 'react';
import {increment, decrement, reset, getUserInfo} from './actions';
import {connect} from 'react-redux';
import { DatePicker } from 'antd';
import './login.less'
class Login extends Component {
	render() {
		const {count, userInfo, isLoading, errorMsg} = this.props.login;
		return (
			<div>
                <div className="test">当前计数为{count}</div>
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
				{
					{count} !== 3 ?
					<button onClick={() => this.props.reset()}>重置</button> :
					''
				}
				<div>
                	{
						isLoading ? '请求信息中......' :
							(
								errorMsg ? errorMsg :
									<div>
										<p>用户信息：</p>
										<p>用户名：{userInfo.name}</p>
										<p>介绍：{userInfo.intro}</p>
									</div>
							)
					}
					<button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
				</div>
				<DatePicker />
            </div>
		);
	}
}
export default connect((state)=>({login: state.login}), {increment, decrement, reset, getUserInfo})(Login);