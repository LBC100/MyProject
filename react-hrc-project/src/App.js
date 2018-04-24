import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import Index from './routes/Index/index'

class App extends Component {
  render() {
    return (
      <div id="app">
        <Route path='/' component={Index} />
      </div>
    );
  }
}

export default App;
