import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Icon, Input, Button, Checkbox, Row, Col} from 'antd';
import 'antd/dist/antd.css';

const store = {
    goods: [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Basketball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
    ]
};

class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText:'',
      inStockOnly: false
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(newState){
    this.setState(newState);
  }
  
  render(){
    return (
    <div>
      <SearchBar {...this.state} onChange={this.onChange}/>
      <ProductTable {...this.props} {...this.state}/>
    </div>
    )}
  
}

class SearchBar extends Component {
  constructor(props){
    super(props); 
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onInStockOnlyChange = this.onInStockOnlyChange.bind(this);
    this.onClear = this.onClear.bind(this);
  }
  onFilterChange(event){
    this.props.onChange({
      filterText:event.target.value
    })
  }
  onInStockOnlyChange(event){
    this.props.onChange({
      inStockOnly: event.target.checked
    })
  }
  onClear(event){
    this.props.onChange({
      filterText:''
    })
  }
  render(){
    return (
    <div>
      <Input value={this.props.filterText} type='search' placeholder='Search' 
        prefix={<Icon type='search'/>} suffix={<Icon type='close-circle-o' onClick={this.onClear}/>} 
        onChange={this.onFilterChange}
        />
      <Checkbox checked={this.props.inStockOnly} onChange={this.onInStockOnlyChange}>
        Only show products in stock
      </Checkbox>
    </div>
    )}
}

class ProductTable extends Component {
  render(){
    let rows = [];
    let lastCategory = null;
    this.props.goods.map((item, index)=>{
      if ( item.name.indexOf(this.props.filterText) === -1
        || (this.props.inStockOnly && !item.stocked) )
        return;

      if ( item.category !== lastCategory )
        rows.push(
          <ProductCategory key={item.category} category={item.category} />
        );

      lastCategory = item.category;

      rows.push(
        <Product key={item.name + index} {...item} />
      );
    });

    return (
    <div>
      <Row className='product-header'>
        <Col span='12'>Name</Col>
        <Col>Price</Col>
      </Row>
      {rows}
    </div>
    )}
}

let ProductCategory = (props)=>
      <Row className='product-category'>
        {props.category}
      </Row>;

let Product = (props)=>
      <Row className='product'>
        <Col span='12' style={{color: props.stocked ? '': 'red'}}>{props.name}</Col>
        <Col>{props.price}</Col>
      </Row>;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Content">
          <FilterableProductTable goods={store.goods}/>
        </div>
      </div>
    );
  }
}

export default App;
