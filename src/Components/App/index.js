import React, { Component } from 'react';
import './App.css';
import Home from '../../Containers/Home';
import Footer from '../../Containers/Footers';
import Headers from '../../Containers/Headers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App-body flex'>
          <Headers />
          <Home />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
