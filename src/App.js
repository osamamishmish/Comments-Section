import './App.css';

import React, { Component } from 'react'
import First from './Components/First';
import Second from './Components/Second';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <First/>
        <Second/>
      </div>
    )
  }
}
export default App;
