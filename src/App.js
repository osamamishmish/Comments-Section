import './App.css';

import React, { Component } from 'react'
import First from './Components/First/First';
import Second from './Components/Second/Second';

class App extends Component {
  render() {
    return (
      <div className='App container-fluid'>
        <First/>
        <Second/>
      </div>
    )
  }
}
export default App;
