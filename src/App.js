import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import SearchComponent from './search';
import AddComponent from './add';
import AboutComponent from './about';
import LoginComponent from './login';
import ContactComponent from './contact';
import { Menu, Tabs } from 'antd';

class Home extends Component {
  render() {
    const TabPane = Tabs.TabPane;
    return (     
      <Tabs defaultActiveKey="1" type='card'>
        <TabPane tab="Search" key="1"><SearchComponent/></TabPane>
        <TabPane tab="Add" key="2"><AddComponent/></TabPane>
      </Tabs>
    );
  }
}

class MainMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedKeys: ['home']
    }
  }

  render() {
    return (
      <Menu className="Header" mode="horizontal" theme="dark"
        defaultSelectedKeys={this.state.selectedKeys}>
        <Menu.Item key='home'><Link to='/home'>Home</Link></Menu.Item>
        <Menu.Item key='contact'><Link to='/contact'>Contact Us</Link></Menu.Item>
        <Menu.Item key='about'><Link to='/about'>About</Link></Menu.Item>        
        <Menu.Item key='login'><Link to='/login'>Login</Link></Menu.Item>        
        </Menu>      
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <Router>
          <div className="Content">
            <MainMenu />
            <div className="Body">
              <Redirect exact from='/' to='/home' />
              <Route path='/home' component={Home} />
              <Route path='/contact' component={ContactComponent} />
              <Route path='/about' component={AboutComponent} />
              <Route path='/login' component={LoginComponent} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
