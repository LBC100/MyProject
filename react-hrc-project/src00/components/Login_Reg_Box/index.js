import React, { Component } from 'react'
import './index.css'

class Login_Reg_Box extends Component {
    render() {
        //获取浏览器高度
        // let h = document.documentElement.clientHeight || document.body.offsetHeight ;
        return (
            <div className="login_reg_box"  >
                { this.props.children }
            </div>
        );
    }
}

export default Login_Reg_Box;




