import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'
import { Row, Col } from 'antd';
import './index.css'

class FooterLinks extends Component {
    render() {
        console.log(this.props)
        const { pathname } = this.props.location
        let diplay;
        if(pathname == '/') {
            diplay = 'block'
        }else{
            diplay = 'none'
        }
        return (
            <div className='footer_links' >
                    <Row style={{ display: diplay }} >
                        <Col span={24}>
                            <div className="footer_links_title" >
                                <h3>友情链接</h3>
                            </div>
                            
                        </Col>
                    </Row>
                    <div className="links" >
                        <div className="container" >
                            <div className="links_item1">
                                <h3>关于我们</h3>
                                <ul>
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=61">使用条款</Link></li> 
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=62">隐私政策</Link></li> 
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=63">联系我们</Link></li> 
                                </ul>
                            </div>
                            <div className="links_item1">
                                <h3>新闻资讯</h3>
                                <ul>
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=61">最新动态</Link></li> 
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=62">新闻资讯</Link></li> 
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=63">行业动态</Link></li> 
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=63">币种新闻</Link></li> 
                                </ul>
                            </div>
                            <div className="links_item1">
                                <h3>帮助中心</h3>
                                <ul>
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=61">新手指引</Link></li> 
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=62">币种资料</Link></li> 
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=63">常见问题</Link></li> 
                                    <li><Link to="http://www.hurongbi.cn/news/aboutus.do?categoryId=63">法律文件</Link></li> 
                                </ul>
                            </div>
                            <div className="links_item1">
                                <h3>联系我们</h3>
                                <ul>
                                    <li><span>联系方式: 0</span></li> 
                                    <li><span>社交媒体: 000001@qq.com</span></li> 
                                    <li><span>QQ: 2222</span></li> 
                                    <li><span>地址: 北京市</span></li> 
                                </ul>
                            </div> 
                            <div className="footer_links_tips" style={{width:'386px'}}>
                                <h3>风险提示</h3>
                                <p>数字资产交易具有极高的风险，全球区块链交易平台仅为用户提供一个自由的网上交换平台，对资产的投资价值不承担任何审查、担保、赔偿的责任，如果您不能接受，请不要进行交易！</p>
                            </div>                                                  
                        </div>
                    </div>
            </div>
        );
    }
}

export default connect((state) =>state, 
(dispatch) => bindActionCreators(actions,dispatch))(FooterLinks);