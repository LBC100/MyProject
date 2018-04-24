import React, { Component } from 'react'
import {  } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'

import './index.css'

const ListHtml = ({ text, active, i, cActive }) => {
    let activeClass = active == i ? 'active' : '';
    return(
         <li className={ activeClass } onClick={ () => { cActive(i) } } >
            <a href="javascript:;" >{ text }</a>
            <i class="glyphicon glyphicon-menu-right pull-right" ></i>
        </li>
    )
}

class NewsContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: 0,
            data: [
                {
                    text: '最新动态'
                },
                {
                    text: '新闻资讯'
                },
                {
                    text: '行业动态'
                },
                {
                    text: '币种新闻'
                }
            ]
         };
    }

    cActive = (index) => {
        this.setState({
            active: index
        })
    }

    render() {
        const { active, data } = this.state;
        const listHtml = data.map((e, i) => {
            return <ListHtml {...e} i={i} key={i} active={ active } cActive={ this.cActive } />
        })
        return (
            <div className="new_content row" >
                <div class="col-sm-2" style={{ padding: 0 }} >
                    <ul>
                        { listHtml }
                    </ul>
                </div>
                <div class="col-sm-10">
                    {/* <div class="page-header" style={{ margin: '10px 0 20px', borderBottom: '1px solid #ccc' }} >
	                    <h1 class="f-s-18" id="curTitle" style={{ paddingBottom: '20px' }} >行业动态</h1>
	                </div> */}
                    <div className="page-header new_content_title" style={{ margin: '30px 0 20px', borderBottom: '1px solid #ccc' }} >
                        <h1>行业动态</h1>
                    </div>
                    234
                </div>
            </div>
        );
    }
}

export default NewsContent;



