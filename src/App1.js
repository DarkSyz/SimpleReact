import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Input, Button} from 'antd';
import 'antd/dist/antd.css';

var store = {
      inputvalue: '',
      items: [
        'A', 'B'
      ]
};

class TodoList extends Component {

    render() {
      return (
          <ul id='todo-list' className='todolist'>
          {
            this.props.items.map((item, i)=>{
              return (
              <li key={i}>
                <label>{item}</label>
                <Button onClick={()=>this.props.onRemoveClick(i)}>Remove</Button>
              </li>);
            })
          }
          </ul>);
    }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store;
  }

  onInputChange(event){
    this.state.inputvalue = event.target.value;
  }

  addItem() {
    this.state.items.push(this.state.inputvalue);
    this.setState({
      items: this.state.items
    });
  }

  removeItem(i){
    this.state.items.splice(i, 1);
    this.setState({
      items: this.state.items
    });
  }

  render() {
      /*
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/
      return (
      <div className="App">

        <div>
          <Input style={{width: '400px'}} type='text' id='todo' onChange={this.onInputChange.bind(this)}></Input>
          <Button onClick={this.addItem.bind(this)}>Add</Button>
          <TodoList items={this.state.items} onRemoveClick={this.removeItem.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
