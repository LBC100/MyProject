const initState = {
    topNavActive: 0,
    langOnoff: false,
    langData: 'CN',
    a_text: [
        {
            text: '首页'
        },
        {
            text: '交易中心'
        },
        {
            text: 'C2C交易'
        },
        {
            text: '新闻资讯'
        },
        {
            text: '个人中心'
        }
    ]
};

//reducer
export default function topNavData(state = initState, action) {
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