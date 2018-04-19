import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import reducer from '../reducer/reducer';


 // 创建一个初始化的state
 let initState = {
    btn1Data: {},
    btn2Data: {},
    changeNum: 0
}

const sagaMiddleware = createSagaMiddleware();

// 创建store
const store = createStore(reducer, initState, applyMiddleware(sagaMiddleware));
//监听saga
sagaMiddleware.run(rootSaga);
export default store
