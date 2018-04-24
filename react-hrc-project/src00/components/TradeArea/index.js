import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'
import './index.css'

const Trade_area_t_list = ({ text, i, tradeAreaActive, cTrade_area }) => {
    const active = tradeAreaActive == i ? 'active' : '' ;
    return (
        <li onClick={ () => { cTrade_area(i) } } >
            <FontAwesome name='star' className={`star ${ active }`} />
            <Link to="/" className={ active } >{text}</Link>
            <FontAwesome name='angle-up' className="angle-up" style={{ fontSize: "30px", color: `${ tradeAreaActive == i ? '#e0dedb' : '' }` }} />
        </li>
    )
}

class TradeArea extends Component {
    //保留两位小数
    returnFloat =  (value) => {
        var value=Math.round(parseFloat(value)*100)/100;
        var xsd=value.toString().split(".");
        if(xsd.length==1){
        value=value.toString()+".00";
        return value;
        }
        if(xsd.length>1){
        if(xsd[1].length<2){
        value=value.toString()+"0";
        }
        return value;
        }
       }
    render() {
        const { 
            tradeAreaData: { tradeAreaActive, text, transactionData }, 
            cTrade_area 
        } = this.props;
        const listHtml = text.map((e, i) => {
            return <Trade_area_t_list text={e} i={i} key={i} tradeAreaActive={tradeAreaActive} cTrade_area={cTrade_area} />
        });
        //根据Active的数字来取TransactionData渲染的数据
        const tData = transactionData[tradeAreaActive];
        const { areanameview, data } = tData;
        const { 
            currentExchangPrice, 
            usdttormb, 
            RiseAndFall,
            minPrice,
            maxPrice,
            lastExchangPrice,
            transactionSum,
            picturePath 
        } = data[0];
        return (
            <Row>
                <Col span={24} >
                    <div className="trade_area" >
                        <ul className="trade_area_t" >
                            {listHtml}
                        </ul>
                        <div className="trade_area_b" >
                            <table>
                                <thead>
                                    <tr>			
                                        <th>币种</th>
                                        <th>最新成交价</th>
                                        <th>日涨跌</th>
                                        <th>最低价</th>
                                        <th>最高价</th>
                                        <th>昨日收盘价</th>
                                        <th>交易量</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <FontAwesome name='star' className={`star`} />
                                            <Link to="/" >
                                                <img src={picturePath} className="trade_area_b_img" />
                                                {areanameview}
                                            </Link>
                                        </td>
                                        <td><span >{`${currentExchangPrice}/${ this.returnFloat(currentExchangPrice*usdttormb) }`}</span></td>
                                        <td>{`+${ RiseAndFall }%`}</td>
                                        <td><span >{minPrice}</span></td>
                                        <td><span >{maxPrice}</span></td>
                                        <td><span >{lastExchangPrice}</span></td>
                                        <td>{transactionSum}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default connect((state) =>state, 
(dispatch) => bindActionCreators(actions,dispatch))(TradeArea);