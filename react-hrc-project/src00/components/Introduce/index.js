import React, { Component } from 'react'
import { Carousel, Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'
import './index.css'

class Introduce extends Component {
    render() {
        return (
            <div className="introduce" >
                <div className="container" >
                    <Row gutter={120} >
                        <Col span={12} >
                            <dl>
                                <i className="introduce_i1" ></i>
                                <dt>支持多种交易形式</dt>
                                <dd>支持多种包括限价交易、市价交易、等价币交易、C2C交易、场外交易等 多种灵活交易形式</dd>
                            </dl>
                        </Col>
                        <Col span={12}>
                            <dl>
                                <i className="introduce_i2" ></i>
                                <dt>支持多种交易形式</dt>
                                <dd>支持多种包括限价交易、市价交易、等价币交易、C2C交易、场外交易等 多种灵活交易形式</dd>
                            </dl>
                        </Col>
                    </Row>
                    <Row gutter={120} >
                        <Col span={12} >
                            <dl>
                                <i className="introduce_i3" ></i>
                                <dt>支持多种交易形式</dt>
                                <dd>支持多种包括限价交易、市价交易、等价币交易、C2C交易、场外交易等 多种灵活交易形式</dd>
                            </dl>
                        </Col>
                        <Col span={12}>
                            <dl>
                                <i className="introduce_i4d" ></i>
                                <dt>支持多种交易形式</dt>
                                <dd>支持多种包括限价交易、市价交易、等价币交易、C2C交易、场外交易等 多种灵活交易形式</dd>
                            </dl>
                        </Col>
                    </Row>
                </div>
                
            </div>
        );
    }
}

export default connect((state) =>state, 
(dispatch) => bindActionCreators(actions,dispatch))(Introduce);