// action types
const NUM_INCREMENT = 'NUM_INCREMENT';
const NUM_DECREMENT = 'NUM_DECREMENT';
const AXIOS_DATA = 'AXIOS_DATA';

// Action creators
export function increment() {
    return {
        type: NUM_INCREMENT
    }
}

export function decrement() {
    return {
        type: NUM_DECREMENT
    }
}

// AXIOS_DATA字段发送到store。请求数据
export function axios_data(action) {
    return {
        type: AXIOS_DATA,
        payload: {
            // url: 'http://localhost:4000/recommend/songs'
            url: action.url,
            type: action.type
        }
    }
}
