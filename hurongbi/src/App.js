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
import News from './routes/News'

// import axios from 'axios';


class App extends Component {
  render() {
    return (
      <div id="app" >
        <Route path='/' render={ () => <Spin spinning={false} /> } />
        <Route path='/' component={TopNav} />
        <Route path='/' exact component={Bar} />
        <Route path='/' exact component={TradeArea} />
        <Route path='/' exact component={Introduce} />
        <Route path='/' exact component={Information} />
        <Route path='/' exact component={Download} />

        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/reg' component={Reg} />
          <Route path='/'  component={FooterLinks} />
        </Switch>
        
        <Route path='/news' component={News} />
      </div>
    );
  }
}

export default App;