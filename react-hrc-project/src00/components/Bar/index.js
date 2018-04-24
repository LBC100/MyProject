import React, { Component } from 'react'
import { Carousel } from 'antd';
import './index.css'

class Bar extends Component {
    componentDidMount (props) {
        //轮播图高度按比例缩放
        const bar = this.bar;
        window.onresize = function(){
            const bl = 425 /1349;
            const h = document.documentElement.clientWidth * bl;
            bar.style.height = h + 'px';
        }
    }
    render() {
        return (
            <div ref={ (node) => this.bar = node } >
                <Carousel autoplay>
                    <div>
                        <img src={ require('../../img/bar1.jpg') } />
                    </div>
                    <div>
                        <img src={ require('../../img/bar2.jpg') } />
                    </div>
                    <div>
                        <img src={ require('../../img/bar3.jpg') } />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Bar;
  