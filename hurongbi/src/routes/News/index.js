import React, { Component } from 'react'
import { Button, ButtonToolbar, Carousel  } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'

import './index.css'

const buttonsInstance = (
  <ButtonToolbar>
    {/* 标准按钮 */}
    <Button>Default</Button>
   

    {/* 提供重要视觉感知及标识重要操作的按钮 */}
    <Button bsStyle="primary">Primary</Button>

    {/* 指示成功或正面操作按钮 */}
    <Button bsStyle="success">Success</Button>

    {/* 提供上下文帮助的提示信息按钮 */}
    <Button bsStyle="info">Info</Button>

    {/* 提醒操作需要小心使用 */}
    <Button bsStyle="warning">Warning</Button>

    {/* 提醒操作可能会导致危险或造成负面影响 */}
    <Button bsStyle="danger">Danger</Button>

    {/* 像一个链接但有按钮的操作行为 */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
);

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const buttonsInstance1 = (
  <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block>块级别按钮</Button>
    <Button bsSize="large" block>块级别按钮</Button>
  </div>
);

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                {buttonsInstance}
                {buttonsInstance1}
                 <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="http://123.207.238.196/bridge.jpg"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="http://123.207.238.196/bridge.jpg"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="http://123.207.238.196/bridge.jpg"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        );
    }
}

export default News;



