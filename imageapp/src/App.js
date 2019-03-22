import React, { Component } from 'react';
import {  Route, BrowserRouter } from 'react-router-dom'
import Image from './components/Image'
import Home from './components/Home'
import './components/styles/output.css'
import Artists from './components/Artists';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
      <Route exact path='/' component={Home}/>
      <Route path='/gallery' component={Image}/>
          <Route path='/artists' component={Artists} />
          <Route path='/contact' component={Contact} />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
