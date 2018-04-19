import React, { Component } from 'react'
import './index.css'

class Login_Reg_Box extends Component {
    render() {
        //获取浏览器高度
        let h = document.documentElement.offsetHeight || document.body.offsetHeight ;
        return (
            <div className="login_reg_box" style={{ height: h }} >
                { this.props.children }
            </div>
        );
    }
}

export default Login_Reg_Box;




