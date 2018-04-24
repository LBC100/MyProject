import React, { Component } from 'react'
import './index.css'

class Lang extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            langData: 'CN',
            langOnoff: false
         };
    }

    //改变语言
    cLangData = (text) => {
        this.setState({
            langData: text
        })
    }

    //显示隐藏
    cLangOnoff = () => {
        this.setState({
            langOnoff: !this.state.langOnoff
        })
    }

    render() {
        const { langData, langOnoff } = this.state;
        //第二个语言
        const langText = langData == 'CN' ? 'EN' : 'CN' ;
        //加上class的会变en图标
        const en_icon = langData == 'CN' ? 'lang_icon_cnAen' : '' ;
        const cn_icon = langData == 'CN' ? '' : 'lang_icon_cnAen' ;
        return (
            <div className="lang clearfix" >
                <div onClick={ () => { this.cLangData(langData); this.cLangOnoff() } } >
                    <a href='javascript:;' >
                        <i className={`lang_icon ${ cn_icon }`} ></i>
                        {langData}
                    </a>
                </div>
                {/* 根据langOnoff的真假来显示/隐藏 */}
                <div className={`lang_en ${ langOnoff ? 'show' : '' }`} onClick={ () => { this.cLangData(langText); this.cLangOnoff() } } >
                    <a href='javascript:;' >
                        <i className={`lang_icon ${ en_icon }`} ></i>
                        <span>{langText}</span>
                    </a>
                </div>
                
                <i className="sanjiao"  onClick={ this.cLangOnoff } ></i>
            </div>
        );
    }
}

export default Lang;