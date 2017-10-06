import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
       
        <Route component = { Login } path = '/' exact />
        <Route component = { Dashboard } path = '/dashboard'/>
        <Route component = { Profile } path = '/profile'/>
        <Route component = { Search } path = '/search'/>

      </div>
      </HashRouter>
    );
  }
}

export default App;
