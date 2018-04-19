import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import reducer from '../reducer/reducer';


 // 创建一个初始化的state
 let initState = {
     topNavData: {
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
     },
     tradeAreaData: {
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
     },
     newsData: {
        "success": true,
        "msg": "",
        "obj": [
            {
                "id": 108,
                "title": "比特币势不可挡再破3000美元 总市值已超500亿",
                "categoryName": null,
                "categoryId": null,
                "status": null,
                "seoTitle": null,
                "seoKeyword": null,
                "seoDescribe": null,
                "website": null,
                "sort": null,
                "isStick": null,
                "content": "<p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">在上周刚刚度过“分裂”危机之后，<a href=\"http://biz.finance.sina.com.cn/forex/quote.php?code=BTCMtGox&img_type=min\" class=\"keyword\" target=\"_blank\" style=\"color: rgb(17, 62, 170); text-decoration: none;\">比特币</a>就又疯了！价格涨幅在8月5日一天就超过了16%，达到了创纪录的水平。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">　　据CoinDesk的数据，比特币的价格在8月5日创下3360.87美元的历史新高。这一数字货币今年的价值已增加了两倍多，8月头几天上涨了15%左右。比特币打破了自六月中旬创纪录的3025美元以来的交易区间。 </p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">　　加密货币投资公司BlockTower Capital公司的信息主管Ari Paul表示，比特币买家在接下来的两个月里看到一个更为流行的升级方案，即“隔离见证”。据CoinDesk的数据显示， 另一种数字货币：以太币的涨幅在8月5日超过12%至250美元。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">　　当比特币在8月1日分裂成原始比特币和比特币现金时，少数开发商提出了升级的建议。在分裂时持有比特币的投资者应收到同等数量的比特币现金，并能够在8月1日交易。然而，一些主要交易所在8月3日起才开始接受比特币的存款。 </p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">中国的交易所ViaBTC发Twitter表示，由于比特币现金网络遭到了攻击，因此该公司暂停了取款，后来才恢复了取款业务。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">　　但无论外部消息如何干扰，都无法阻止比特币价格在周末飙升至3000美元以上，创下历史新高，这距离比特币的拆分引发部分投资者担忧过去不到一周时间。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">　　8月5日，比特币突然大幅上涨，使其总市值首次超过了500亿美元，让投资者欢呼雀跃。比特币的价格在过去一周上涨了逾10%，比特币现金（Bitcoin Cash）是由一小部分比特币开发者推出的不同配置的新版比特币。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">　　尽管比特币价格持续波动，但总体来看，比特币今年的价值已经增长了两倍多，今年5月突破了2000美元大关，在6月份首次突破3000美元大关，但是随后下跌大约20%，之后再次快速上涨。与比特币竞争的以太币（Ethereum）也在上周末大涨。 以太币的价格在8月5日飙升12%，随后又在8月6日上涨7%至270.07美元，市值为252亿美元。</p><p><br/></p>",
                "isOutLink": null,
                "outLink": null,
                "titleImage": null,
                "shortContent": null,
                "writer": "24",
                "source": null,
                "hits": 364,
                "modified": "2018-01-31",
                "created": "2017-08-07 20:17:44"
            },
            {
                "id": 77,
                "title": "沙箱机制中国初试水 上海区块链创新沙箱筹备成立",
                "categoryName": null,
                "categoryId": null,
                "status": null,
                "seoTitle": null,
                "seoKeyword": null,
                "seoDescribe": null,
                "website": null,
                "sort": null,
                "isStick": null,
                "content": null,
                "isOutLink": null,
                "outLink": null,
                "titleImage": null,
                "shortContent": null,
                "writer": "互融云",
                "source": null,
                "hits": 70,
                "modified": "2018-01-22",
                "created": "2017-04-19 09:34:01"
            },
            {
                "id": 107,
                "title": "数字货币格局再遭改写！比特币现金强势跻身前三之列",
                "categoryName": null,
                "categoryId": null,
                "status": null,
                "seoTitle": null,
                "seoKeyword": null,
                "seoDescribe": null,
                "website": null,
                "sort": null,
                "isStick": null,
                "content": "<p style=\"white-space: normal;\">根据CoinMarketCap报道，“<a href=\"http://biz.finance.sina.com.cn/forex/quote.php?code=BTCMtGox&img_type=min\" class=\"keyword\" target=\"_blank\" style=\"color: rgb(17, 62, 170); text-decoration: none;\">比特币</a>现金”自发布以来价格已经大幅飙升，其市值已经超过80亿美元，并跻身三大数字货币之一。CoinMarketCap的数据显示，目前，市值大于“比特币现金”的两种数字货币是比特币和以太币。</p><p style=\"white-space: normal;\"><br/></p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">“比特币现金”是一种相较比特币拥有更大区块容量的数字货币，而它上市后的大涨，也快速吸引了市场的眼球买卖数字货币是一项高度投机的行为，数字市场的交易基本不受监管。任何考虑参与这项交易的人都应该做好输光本金的心理准备。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">提前交易</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">市场参与者在“比特币现金”诞生的前几天里以交易和它相关的期货合约为主。因此，交易员们能够在这一新奇的数字货币问世之前就对其价值进行推测。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">第一个“比特币现金”区块是通过比特币池创建的，这个区块并不被传统的比特币网络所接受，因此它代表了一个全新的区块链。在这个新区块中，比特币网络成功地经历了一个硬叉，创建了两个独立的区块链，其中有两种截然不同的货币。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">这一分叉可以被视为比特币社区成员之间多年的讨论得出的答案，他们试图解决这个加密货币的扩展困境，这一问题导致了漫长的交易时间和高昂的费用。数字货币基金经理Eliosoff认为，“比特币现金”的诞生对数字货币而言是个里程碑式的一天。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">高期望</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">展望未来，一些市场观察人士对“比特币现金”抱有很高的期望，认为这可能会吸引来自比特币矿工和投资者的巨大兴趣。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">Eliosoff也在这个阵营中，强调了“比特币现金”在获得市场份额方面的快速进展。他表示，如果“比特币现金”的市值仍能在数字货币中占据相当大的比例，用户、企业和支付处理器都将被其吸引。</p><p style=\"margin-top: 15px; margin-bottom: 15px; white-space: normal; padding: 0px; line-height: 2em;\">在未来，假如“比特币现金”无法取代比特币，或者无法与比特币并驾齐驱的话，它也有可能因此而面临被淘汰。</p><p><br/></p>",
                "isOutLink": null,
                "outLink": null,
                "titleImage": null,
                "shortContent": null,
                "writer": "3",
                "source": null,
                "hits": 4354,
                "modified": "2017-08-07",
                "created": "2017-08-07 20:17:07"
            },
            {
                "id": 78,
                "title": "武汉建成基于区块链技术的&amp;ldquo;凤链消费平台&amp;rdquo;",
                "categoryName": null,
                "categoryId": null,
                "status": null,
                "seoTitle": null,
                "seoKeyword": null,
                "seoDescribe": null,
                "website": null,
                "sort": null,
                "isStick": null,
                "content": "<p style=\"line-height: 50px;background: white\"><span style=\"font-size:32px;font-family:'微软雅黑','sans-serif';color:#38485A\">武汉建成基于区块链技术的“凤链消费平台”</span></p><p style=\"margin-bottom: 20px;background: white\"><span style=\"font-size:18px;font-family:'微软雅黑','sans-serif';color:#5C5F61\">（原标题：武汉建成旅游交易消费平台）</span></p><p style=\"margin-bottom: 20px;background: white\"><span style=\"font-size:18px;font-family:'微软雅黑','sans-serif';color:#5C5F61\">本报武汉4月11日电 近日，基于区块链技术在旅游景区开展典型应用示范的开放性互联网平台凤链平台在武汉建成。武汉区块链产业园也正式挂牌成立。</span><span style=\"color: rgb(92, 95, 97); font-family: 微软雅黑, sans-serif; font-size: 18px; text-align: center;\">                                              </span></p><p style=\"margin-bottom: 20px;background: white\"><span style=\"font-size:18px;font-family:'微软雅黑','sans-serif';color:#5C5F61\"> </span></p><p style=\"margin-bottom: 20px;background: white\"><span style=\"font-size:18px;font-family:'微软雅黑','sans-serif';color:#5C5F61\">武汉市充分利用武汉园博园现有旅游资源和场地，由市政府主导，依托华中科技大学、武汉大学等知名高校技术团队，历时7个月打造出凤链平台，并开展了旅游、游戏和植树3个典型应用示范。</span></p><p style=\"margin-bottom: 20px;background: white\"><span style=\"font-size:18px;font-family:'微软雅黑','sans-serif';color:#5C5F61\"> </span></p><p style=\"background: white\"><span style=\"font-size:18px;font-family:'微软雅黑','sans-serif';color:#5C5F61\">作为中国旅游景区区块链应用联盟技术支撑平台，凤链平台在实际应用场景中将发挥重要作用。游客可以利用凤链平台可追溯的功能，在凤链平台上使用凤币实施旅游交易消费，杜绝不合法交易等行为。</span></p><p> </p><p><br/></p>",
                "isOutLink": null,
                "outLink": null,
                "titleImage": null,
                "shortContent": null,
                "writer": "互融云",
                "source": null,
                "hits": 47,
                "modified": "2017-07-19",
                "created": "2017-04-19 09:35:13"
            }
        ],
        "code": ""
    }
}

const sagaMiddleware = createSagaMiddleware();

// 创建store
const store = createStore(reducer, initState, applyMiddleware(sagaMiddleware));
//监听saga
sagaMiddleware.run(rootSaga);
export default store
