import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'
import { Button } from 'react-bootstrap';
import Lang from '../Lang'
import './index.css'


class TopNav extends Component {
    render() {
        return (
            <div className="container-fluid top_nav clearfix">
                <h1>HRC</h1>
                <ul className="top_nav_l" >
                    <li>
                        <a href="javasctipt:;" >首页</a>
                    </li>
                    <li>
                        <a href="javasctipt:;" >交易中心</a>
                    </li>
                    <li>
                        <a href="javasctipt:;" >杠杆交易</a>
                    </li>
                    <li>
                        <a href="javasctipt:;" >C2C交易</a>
                    </li>
                    <li>
                        <a href="javasctipt:;" >新闻资讯</a>
                    </li>
                    <li>
                        <a href="javasctipt:;" >个人中心</a>
                    </li>
                    <li>
                        <a href="javasctipt:;" >App下载</a>
                    </li>
                </ul>
                <Lang />
            </div>
        );
    }
}

export default connect((state) =>state, 
(dispatch) => bindActionCreators(actions,dispatch))(TopNav);