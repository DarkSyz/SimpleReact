import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Icon, Input, Button} from 'antd';
import 'antd/dist/antd.css';

var store = {
    login: {
      username: '',
      password: ''
    }
};

class MyInput extends Input {
  constructor(props){
    super(props);
    this.state={value:'123'};
  }
  removeText(event){
    this.setState({value:''});
  }
  onChange(event){
    this.setState({value:event.target.value});
    event.prograte();
  }
  render(){
    return <Input {...this.props} value={this.state.value} suffix={<Icon type='delete' onChange={this.onChange.bind(this)} onClick={this.removeText.bind(this)}/>} />;
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = store.login;
  }

  onUsernameChange(event){
    this.state.username = event.target.value;
  }

  onPasswordChange(event){
    this.state.password = event.target.value;
  }

  login(){
      console.log(this.state);
  }

  render() {
      return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Content">
          {/* Thie is a comment*/}
          <MyInput addonBefore='Username' type='text' id='username' placeholder='User Name' 
          prefix={<Icon type='user' style={{ fontSize: 16, color: '#08c'}} />} onChange={this.onUsernameChange.bind(this)}/>
          <MyInput addonAfter='Username' style={{margin:'8px 0 0 0'}} type='password' id='password' placeholder='Password' 
          prefix={<Icon type='lock' style={{ fontSize: 16, color: '#08c'}} />} onChange={this.onPasswordChange.bind(this)}/>
          <Button style={{margin:'16px 0 0 0'}} type='primary' onClick={this.login.bind(this)}>Login</Button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
