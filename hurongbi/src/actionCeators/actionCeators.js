// action types
const changeTopNavActive = 'changeTopNavActive';
const langOnoff = 'langOnoff';
const trade_area_active = 'trade_area_active';
const langData = 'langData';
const AXIOS_DATA = 'AXIOS_DATA';

// Action creators
export function cTopNavActive(index) {
    return {
        type: changeTopNavActive,
        index
    }
}

export function cLangOnoff() {
    return {
        type: langOnoff
    }
}

export function cTrade_area(index) {
    return {
        type: trade_area_active,
        index
    }
}

export function cLangData(text) {
    return {
        type: langData,
        text
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
