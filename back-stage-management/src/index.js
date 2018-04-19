import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../src/store/store'
import App from './App';

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
, document.getElementById('root'));
//热更新
if (module.hot) {module.hot.accept();}
