import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'
import { Row, Col } from 'antd';
import './index.css'

//导航栏链接
const TopNanLink = ({ text, topNavActive, i, cTopNavActive }) => {
    const linkClassName = topNavActive == i ? 'active' : '' ;
    return (
        <li onClick={ () => { cTopNavActive(i) } } ><Link to='/' className={linkClassName} >{text}</Link></li>
    )
}

class TopNav extends Component {
    render() {
        console.log(this.props.newsData);
        const { 
            topNavData:{ topNavActive, a_text, langOnoff, langData }, 
            cTopNavActive, 
            cLangOnoff,
            cLangData,
            location: { pathname } 
        } = this.props;
        const linkHtml = a_text.map((e ,i) => {
            return <TopNanLink {...e} key={i} i={i} topNavActive={topNavActive} cTopNavActive={cTopNavActive} />
        });
        //第二个语言
        const langText = langData == 'CN' ? 'EN' : 'CN' ;
        //加上class的会变en图标
        const en_icon = langData == 'CN' ? 'lang_icon_cnAen' : '' ;
        const cn_icon = langData == 'CN' ? '' : 'lang_icon_cnAen' ;

        //如果路由是登录/注册页则隐藏登录注册
        let hideClass = '';
        //隐藏log图片
        let hideLog = '';
        if(pathname == '/login' || pathname == '/reg') {
            hideClass = 'hide'
            hideLog = 'none'
        }
        return (
            <div>
                <Row className='top_nav' >
                    <Col span={24}>
                        <div className="logo" >
                            <img src={ require('../../img/logo.png') } style={{ display: hideLog }} /> 
                        </div>
                        <ul className="top_nav_link" >
                            {linkHtml}
                        </ul>
                        <ul className="logIn_Register" >
                            <li className={ hideClass } ><Link to='/login'>登录</Link></li>
                            <li className={ hideClass } ><Link to='/reg'>注册</Link></li>
                            <li className="lang" >
                                <div onClick={ () => { cLangData(langData); cLangOnoff() } } >
                                    <Link to='/' >
                                        <i className={`lang_icon ${ cn_icon }`} ></i>
                                        {langData}
                                    </Link>
                                </div>
                                {/* 根据langOnoff的真假来显示/隐藏 */}
                                <div className={`lang_en ${ langOnoff ? 'show' : '' }`} onClick={ () => { cLangData(langText); cLangOnoff() } } >
                                    <Link to='/' >
                                        <i className={`lang_icon ${ en_icon }`} ></i>
                                        <span>{langText}</span>
                                    </Link>
                                </div>
                                
                                <i className="sanjiao"  onClick={ cLangOnoff } ></i>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect((state) =>state, 
(dispatch) => bindActionCreators(actions,dispatch))(TopNav);