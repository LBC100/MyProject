import React, { Component } from 'react'
import { Carousel } from 'antd';
import './index.css'

class Bar extends Component {
    render() {
        return (
            <div>
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
  