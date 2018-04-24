import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import combineReducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

// 创建store，把合并的reducers传入。里边有每个data的集合。
const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
//监听saga
sagaMiddleware.run(rootSaga);
export default store
