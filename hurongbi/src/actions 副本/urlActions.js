// action types
const UPDATE_BTN1DATA = 'UPDATE_BTN1DATA';
const UPDATE_BTN2DATA = 'UPDATE_BTN2DATA';

// Action creators
export const btn1Data = {
    url: 'http://localhost:4000/personalized/newsong',
    type: 'UPDATE_BTN1DATA'
}

export const btn2Data = {
    url: 'http://localhost:4000/top/list?idx=1',
    type: 'UPDATE_BTN2DATA'
}