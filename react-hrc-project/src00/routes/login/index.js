import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Carousel, Row, Col, Form, Icon, Input, Checkbox } from 'antd';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'
import Login_Reg_Box from '../../components/Login_Reg_Box'

import './index.css'

class Login extends Component {
    render() {
        return ( 
            <Login_Reg_Box >
                <div className = "login" >
                    <Row >
                        <Col span = { 24 } >
                            <h3 className = "logreg-title" > 
                                登录 
                            </h3> 
                            <div className = "login_box" >
                                <input placeholder = "邮箱/手机号码" / >
                                <input type = "password" placeholder = "请输入密码" / >
                                <button >
                                    登录 
                                </button> 
                                <div className = "reg_pass" >
                                    <Link to = "/reg" > 注册 </Link> 
                                    <Link to = "/" > 忘记密码 </Link> 
                                </div> 
                            </div>
                        </Col> 
                    </Row> 
                </div> 
            </Login_Reg_Box>
        );
    }
}

export default connect((state) => state,
(dispatch) => bindActionCreators(actions, dispatch))(Login);