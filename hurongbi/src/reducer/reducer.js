import { combineReducers } from 'redux';

// function changeNum(state={}, action) {
//     switch (action.type) {
//         case 'NUM_INCREMENT':
//             return state + 1;
//         case 'NUM_DECREMENT':  
//             return state - 1;
//         default:
//             return state
//     }
// }

function topNavData(state={}, action) {
    switch (action.type) {
        case 'changeTopNavActive':
            return {
                ...state,
                topNavActive: action.index
            };
        case 'langOnoff':
            return {
                ...state,
                langOnoff: !state.langOnoff
            };
        case 'langData':
            return {
                ...state,
                langData: action.text
            };    
        default:
            return state
    }
}

function tradeAreaData(state={}, action) {
    switch (action.type) {
        case 'trade_area_active':
            return {
                ...state,
                tradeAreaActive: action.index
            };
        default:
            return state
    }
}

function newsData(state={}, action) {
    switch (action.type) {
        case 'trade_area_active':
            return {
                ...state,
                tradeAreaActive: action.index
            };
        default:
            return state
    }
}

  
  export default combineReducers({
    topNavData,
    tradeAreaData,
    newsData
  })