import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'
import Login_Reg_Box from '../../components/Login_Reg_Box'
import './index.css'

//邮箱注册
const MailReg = () => {
    return ( 
        <div>
            <div className = "input_box" >
                <input placeholder = "输入邮箱" / >
            </div> 
            <div className = "input_box" >
                <input type = "password" placeholder = "登录密码(英文+数字不小于6位)" / >
            </div> 
            <div className = "input_box" >
                <input type = "password" placeholder = "登录密码(英文+数字不小于6位)" / >
            </div> 
            <div className = "input_box img_veri" >
                <input placeholder = "图形验证码" / >
                <span >
                    <img src = "http://www.hurongbi.cn/sms/registcode?1524190635790" / >
                </span> 
            </div> 
            <div className = "input_box" >
                <input placeholder = "推荐码非必填" / >
            </div> 
        </div>
    )
};

//手机注册
const PhoneReg = () => {
    return ( 
        <div>
            <div className = "input_box" >
                <input placeholder = "请输入手机号" / >
            </div> 
            <div className = "input_box" >
                <input type = "password" placeholder = "登录密码(英文+数字不小于6位)" / >
            </div> 
            <div className = "input_box img_veri" >
                <input placeholder = "图形验证码" / >
                <span >
                    <img src = "http://www.hurongbi.cn/sms/registcode?1524190635790" / >
                </span> </div> 
            <div className = "input_box img_veri" >
                <input placeholder = "短信验证码" / >
                <span className = "phone_code" >
                    <button > 获取短信 </button> 
                </span>

            </div> 
            <div className = "input_box" >
                <input placeholder = "推荐码非必填" / >
            </div> 
        </div>
    )
}

class Reg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    onClickTitle = (index) => {
        this.setState({
            active: index
        })
    }

    render() {
        const textData = [
                '邮箱注册',
                '手机注册'
            ]
            //生成title
        const titleHtml = textData.map((e, i) => {
            const activeClass = this.state.active == i ? 'active' : '';
            return <li
                className = { activeClass }
                key = { i }
                onClick = { () => { this.onClickTitle(i) } } 
            >
                { e } 
            </li>
        })
        return ( 
            <Login_Reg_Box >
                <div className = "reg" >
                    <Row >
                        <Col span = { 24 } >
                            <ul className = "regTitle_Tabs" > 
                                { titleHtml } 
                            </ul> 
                            { this.state.active == 0 ? < MailReg / > : < PhoneReg / > } 
                            <div className = "checkbox " >
                                <label>
                                    <input type = "checkbox" / >
                                    我已仔细阅读并同意 
                                    <a href = "javascript:;" >
                                        《注册协议》 
                                    </a> 
                                </label> 
                            </div> 
                            <button className = "reg_btn" >
                                注册 
                            </button>
                        </Col> 
                    </Row> 
                    <div className = "ableLogin" >
                        已有账号？ 
                        <Link to = "/login" style = {{ color: '#fff' } } > 登录 </Link> 
                    </div> 
                </div> 
            </Login_Reg_Box>
        );
    }
}

export default connect((state) => state,
(dispatch) => bindActionCreators(actions, dispatch))(Reg);