import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/base.css'

import store from '../src/store/store'
import App from './App';

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));
//热更新
if (module.hot) {module.hot.accept();}
