import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import TopNav from '../../components/TopNav'

class Index extends Component {
    render() {
        return (
            <div>
                <Route path='/' component={TopNav} />
            </div>
        );
    }
}

export default Index;