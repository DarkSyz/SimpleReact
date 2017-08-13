import React, { Component } from 'react';
import { Input, Checkbox, Button, Select, AutoComplete, Form } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import store from './store';



class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            name: '',
            price: '',
            stocked: false
        }
        this.onCategoryChanged = this.onCategoryChanged.bind(this);
        this.onNameChanged = this.onNameChanged.bind(this);
        this.onPriceChanged = this.onPriceChanged.bind(this);
        this.onStockedChanged = this.onStockedChanged.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    onCategoryChanged(value) {
        this.setState({
            category: value
        });
    }
    onNameChanged(e) {
        this.setState({
            name: e.target.value
        });
    }
    onPriceChanged(e) {
        this.setState({
            price: e.target.value
        });
    }
    onStockedChanged(e) {
        this.setState({
            stocked: e.target.checked
        });
    }
    onAdd = (e) => {
        e.preventDefault();
        store.addGood(this.state);
        this.setState({
            category: '',
            name: '',
            price: '',
            stocked: false
        });
    }    
    render() {
        const FormItem = Form.Item;
        return (
            <Form onSubmit={this.onAdd}>
                <FormItem label='Category'>
                    <AutoComplete dataSource={this.props.categories} placeholder="Category" value={this.state.category} onChange={this.onCategoryChanged}/>
                    {/*<Select mode='combobox' value={this.state.category} onChange={this.onCategoryChanged}>
                        {
                            this.props.categories.map(e =>
                                <Select.Option key={e} value={e}>{e}</Select.Option>
                            )
                        }
                    </Select>*/}
                </FormItem>
                <FormItem label='Name'>
                    <Input value={this.state.name} onChange={this.onNameChanged} />
                </FormItem>
                <FormItem label='Price'>
                    <Input value={this.state.price} onChange={this.onPriceChanged} />
                </FormItem>
                <FormItem>
                    <Checkbox checked={this.state.stocked} onChange={this.onStockedChanged}>
                        <label>Stocked</label>
                    </Checkbox>
                </FormItem>
                <FormItem>
                    <Button type='primary' htmlType='submit'>Add</Button>
                </FormItem>            
            </Form>
        )
    }
}

export default class Add extends Component {
    componentWillMount(){
        this.categories = [];
        store.getGoods().forEach(e=>
        {
            if ( this.categories.indexOf(e.category) === -1 )
                this.categories.push(e.category);
        })
    }

    render() {
        const F = Form.create()(AddForm);
        return (
            <F categories={this.categories} />
        )
    }

}

