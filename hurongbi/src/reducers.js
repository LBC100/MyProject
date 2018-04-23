import {combineReducers} from "redux";

import topNavData from './reducers/topNavData';
import tradeAreaData from './reducers/tradeAreaData';
import newsData from './reducers/newsData';


export default combineReducers({
    topNavData,
    tradeAreaData,
    newsData
});