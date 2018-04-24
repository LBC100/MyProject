import React, { Component } from 'react'
import {  } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'

import './index.css'




class NewsContent extends Component {
    render() {
        return (
            <div className="new_content row" >
                <div class="col-sm-2" style={{ padding: 0 }} >
                    <ul>
                        <li className="active" >
                            <a href="javascript:;" >最新动态</a>
                            <i class="glyphicon glyphicon-menu-right pull-right" ></i>
                        </li>
                        <li>
                            <a href="javascript:;" >新闻资讯</a>
                            <i class="glyphicon glyphicon-menu-right pull-right" ></i>
                        </li>
                        <li>
                            <a href="javascript:;" >行业动态</a>
                            <i class="glyphicon glyphicon-menu-right pull-right" ></i>
                        </li>
                        <li>
                            <a href="javascript:;" >币种新闻</a>
                            <i class="glyphicon glyphicon-menu-right pull-right" ></i>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-10">.col-md-4</div>
            </div>
        );
    }
}

export default NewsContent;



