import React from 'react';
import ReactDOM from 'react-dom';
import getRoute from './app/router';
import store from './app/store';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
// css
import './app/common.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
ReactDOM.render(
    <LocaleProvider locale={zhCN}> 
        <Provider store={store}>
            {getRoute()}
        </Provider>
    </LocaleProvider>,
 document.getElementById('root'));
