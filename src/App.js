import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import SearchComponent from './search';
import AddComponent from './add';
import { Menu } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <Router>
        <div className="Content">
          <Menu className="Header" mode="horizontal" theme="dark">
            <Menu.Item><Link to='/search'>Search</Link></Menu.Item>
            <Menu.Item><Link to='/add'>Add</Link></Menu.Item>
          </Menu>

          <div className="Body">
            <Redirect exact from='/' to='/search' />
            <Route path='/search' component={SearchComponent}/>
            <Route path='/add' component={AddComponent}/>
          </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
