const initState = {
    topNavActive: 0,
    langOnoff: false,
    langData: 'CN',
    a_text: [
        {
            text: '首页',
            path: '/'
        },
        {
            text: '交易中心',
            path: '/market'
        },
        {
            text: 'C2C交易',
            path: '/c2c'
        },
        {
            text: '新闻资讯',
            path: '/news'
        },
        {
            text: '个人中心',
            path: '/me'
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