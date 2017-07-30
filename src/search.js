import React, { Component } from 'react';
import { Icon, Input, Checkbox, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
export default class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText:'',
      inStockOnly: false,
      goods: store.sortGoods()
    }
    this.onChange = this.onChange.bind(this);
    this.onStateChanged = this.onStateChanged.bind(this);
  }
  onStateChanged(){
    this.setState();
  }
  componentWillMount(){
    store.addChangeListener(this.onStateChanged);
  }
  componentWillUnmount(){
    store.removeChangeListener(this.onStateChanged);
  }
  onChange(newState){
    this.setState(newState);
  }
  
  render(){
    return (
    <div>
      <SearchBar {...this.state} onChange={this.onChange}/>
      <ProductTable {...this.state}/>
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
    <div style={{display: 'flex', flexDirection:'column'}}>
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
    this.props.goods.forEach((item, index)=>{
      if ( item.name.indexOf(this.props.filterText) === -1
        || (this.props.inStockOnly && !item.stocked) )
        return;

      if ( item.category !== lastCategory )
        rows.push(
          <ProductCategory key={item.category + index} category={item.category} />
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
