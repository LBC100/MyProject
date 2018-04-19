import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'
import './index.css'

//生产信息列表
const NesList = ({ title }) => {
    return(
        <li>
            <FontAwesome name="circle" className="icon_circle" />
            <Link to="http://www.hurongbi.cn/news/info/105">
                {title}
            </Link>
            <span>2018-02-05</span>
        </li>
    )
}

class News extends Component {
    render() {
        const { obj } = this.props;
        const listHtml = obj.map((e, i) => {
            return <NesList {...e} i={i} key={i} />
        })
        return (
            <div className="news" >
                <ul>
                    <h3>
                        <span>新闻资讯</span>
                        <Link to="http://www.hurongbi.cn/news/index/5">更多</Link>
                    </h3>
                    {listHtml}
                </ul>
                
            </div>
        );
    }
}

class Information extends Component {
    render() {
        const { newsData } = this.props;
        return (
            <div className="information" >
                <div className="container" >
                    <Row gutter={70} >
                        <Col span={12}>
                            <News {...newsData} />
                        </Col>
                        <Col span={12}>
                            <News {...newsData} />
                        </Col>
                    </Row>
                </div>
                
            </div>
        );
    }
}

export default connect((state) =>state, 
(dispatch) => bindActionCreators(actions,dispatch))(Information);