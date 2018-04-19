import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'
import Login_Reg_Box from '../../components/Login_Reg_Box'
import './index.css'

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
        const titleHtml = textData.map( (e, i) => {
            const activeClass = this.state.active == i ? 'active' : '' ;
            return <li 
                className={ activeClass } 
                key={i} 
                onClick={ () => { this.onClickTitle(i) } }
            >{ e }</li>
        } )
        return (
            <Login_Reg_Box>
                <div className="reg" >
                    <Row>
                        <Col span={24} >
                            <ul className="regTitle_Tabs">
                                { titleHtml }
                            </ul>
                            <Input placeholder="输入邮箱" size="large" />
                            <Input type="password" placeholder="登录密码(英文+数字不小于6位)" size="large" />
                            <Input type="password" placeholder="登录密码(英文+数字不小于6位)" size="large" />
                            <Input placeholder="图形验证码" size="large" />
                            <Input placeholder="推荐码非必填" size="large" />
                            <Button type="primary" htmlType="submit" className="login-form-button" size="large" >
                                登录
                            </Button>
                            <div className="reg_pass" >
                                <Link to="/" >注册</Link>
                                <Link to="/" >忘记密码</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Login_Reg_Box>
        );
    }
}

export default connect((state) =>state, 
(dispatch) => bindActionCreators(actions,dispatch))(Reg);




