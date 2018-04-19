import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'
import { Row, Col } from 'antd';
import './index.css'

class Download extends Component {
    render() {
        return (
            <div className='download' >
                <div className="container" >
                    <Row>
                        <Col span={24}>
                            <div className="download_t" >
                                <img src="http://www.hurongbi.cn/static/dist/lib/view_v1/dist/images/reg_logo.png" />
                                <h3>互融云移动端APP闪亮登场</h3>
                                <p>集多种灵活交易模式于一体，体验一站式数字货币交易服务，币财富，一手掌握</p>
                            </div>
                            <ul className="download_b" >
                                <li>
                                    <img src="http://www.hurongbi.cn/static/dist/lib/view_v1/dist/images/down-code.jpg" alt="" />
                                    <dl>
                                        <dt>扫码立即下载</dt>
                                        <dd>
                                            <img src="http://www.hurongbi.cn/static/dist/lib/view_v1/dist/images/android.jpg" alt=""/>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <img src="http://www.hurongbi.cn/static/dist/lib/view_v1/dist/images/down-code.jpg" alt="" />
                                    <dl>
                                        <dt>扫码立即下载</dt>
                                        <dd>
                                            <img src="http://www.hurongbi.cn/static/dist/lib/view_v1/dist/images/android.jpg" alt=""/>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default connect((state) =>state, 
(dispatch) => bindActionCreators(actions,dispatch))(Download);