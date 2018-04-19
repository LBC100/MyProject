import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import { Spin } from 'antd';

import TopNav from './components/TopNav'
import Bar from './components/Bar'
import TradeArea from './components/TradeArea'
import Introduce from './components/Introduce'
import Information from './components/Information'
import Download from './components/Download'
import FooterLinks from './components/FooterLinks'
import Login from './routes/login'
import Reg from './routes/Reg'

// import axios from 'axios';


class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' render={ () => <Spin spinning={false} /> } />
        <Route path='/' component={TopNav} />
        <Route path='/' exact component={Bar} />
        <Route path='/' exact component={TradeArea} />
        <Route path='/' exact component={Introduce} />
        <Route path='/' exact component={Download} />
        <Route path='/' exact component={FooterLinks} />
        <Route path='/login' component={Login} />
        <Route path='/reg' component={Reg} />
      </div>
    );
  }
}

export default App;