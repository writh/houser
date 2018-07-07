import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Routes from './route';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <nav className='nav'>
      <Header/>
      <Switch>
            <Route path="/" />
      </Switch>
      </nav>

      { Routes }
    </div>
    );
  }
}

export default App;
