import { combineReducers } from 'redux';

function changeNum(state={}, action) {
    switch (action.type) {
        case 'NUM_INCREMENT':
            return state + 1;
        case 'NUM_DECREMENT':  
            return state - 1;
        default:
            return state
    }
}

function btn1Data(state={}, action) {
    switch (action.type) {
        case 'UPDATE_BTN1DATA':
            return action.data;
        default:
            return state
    }
}

function btn2Data(state={}, action) {
    switch (action.type) {
        case 'UPDATE_BTN2DATA':
            return action.data;
        default:
            return state
    }
}


  
  
  export default combineReducers({
    changeNum,
    btn1Data,
    btn2Data
  })