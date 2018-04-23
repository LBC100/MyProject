import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/bootstrap.min.css'
import './css/fonts/font-awesome.min.css'
import './css/app.css'
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
