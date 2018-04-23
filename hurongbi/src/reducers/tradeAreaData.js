const initState = {
        tradeAreaActive: 0,
        text: [
            'USDT 交易区',
            'BTC 交易区'
        ],
        transactionData: [
        {
            "areaname": "USDT",
            "data": [
                {
                    "currentExchangPrice": "5.5000",
                    "RiseAndFall": 10,
                    "usdttormb": 6,
                    "openPrice": "5.5000",
                    "maxPrice": "6.2",
                    "yesterdayPrice": "5.0000",
                    "lastExchangPrice": "5.5000",
                    "picturePath": "http://www.hurongbi.cn/hryfile/e/e/1fc2bbc9cc85407b862b68da4a7bdc0a.png",
                    "usdtcount": 5.5,
                    "name": "BTC_USDT",
                    "transactionSum": "133.0000",
                    "coinCode": "BTC_USDT",
                    "minPrice": "5.5"
                }
            ],
            "areanameview": "USDT 交易区"
        },
        {
            "areaname": "BTC",
            "data": [
                {
                    "currentExchangPrice": 0,
                    "RiseAndFall": 0,
                    "usdttormb": 6,
                    "openPrice": 0,
                    "maxPrice": 0,
                    "yesterdayPrice": "0.0000",
                    "lastExchangPrice": 0,
                    "lastEndPrice": 0,
                    "picturePath":"http://www.hurongbi.cn/hryfile/4/4/562c3e1a26e94741a0b0bf275f3273f9.jpg",
                    "usdtcount": 0,
                    "name": "USDT_BTC",
                    "transactionSum": 0,
                    "coinCode": "USDT_BTC",
                    "minPrice": 0
                }
            ],
            "areanameview": "BTC 交易区"
        }
    ]
};

//reducer
export default function tradeAreaData(state = initState, action) {
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