import React, { Component } from 'react';
import axios from 'axios';

import Btns from '../src/components/btnRequest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Btns />
      </div>
    );
  }
}

export default App;
