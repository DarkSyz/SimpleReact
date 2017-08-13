import React, { Component } from 'react';
import { Input, Checkbox, Button, Select, AutoComplete, Form } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import store from './store';

class FieldSection extends Component {
    render() {
        return (
            <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column' }}>
                {this.props.children}
            </div>
        );
    }
}

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
    onAdd() {
        store.addGood(this.state);
        this.setState({
            category: '',
            name: '',
            price: '',
            stocked: false
        });
    }    
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FieldSection>
                    <label>Category</label>
                    <AutoComplete dataSource={this.props.categories} placeholder="Category"/>
                    {/*<Select mode='combobox' value={this.state.category} onChange={this.onCategoryChanged}>
                        {
                            this.props.categories.map(e =>
                                <Select.Option key={e} value={e}>{e}</Select.Option>
                            )
                        }
                    </Select>*/}
                </FieldSection>
                <FieldSection>
                    <label>Name</label>
                    <Input value={this.state.name} onChange={this.onNameChanged} />
                </FieldSection>
                <FieldSection>
                    <label>Price</label>
                    <Input value={this.state.price} onChange={this.onPriceChanged} />
                </FieldSection>
                <FieldSection>
                    <Checkbox checked={this.state.stocked} onChange={this.onStockedChanged}>
                        <label>Stocked</label>
                    </Checkbox>
                </FieldSection>
                <FieldSection>
                    <Button type="primary" onClick={this.onAdd}>Add</Button>
                </FieldSection>
            </div>
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
        return (
            <Form.Item>
                <AddForm categories={this.categories} />
            </Form.Item>
        )
    }

}

