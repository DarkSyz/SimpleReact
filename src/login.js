import React, {Component} from 'react';
import {Form, Input, Button, Icon, Alert} from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, value)=>{
            if (!err) {
                Alert.show('Login');
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
        <Form onSubmit={this.handleSubmit}>
            <FormItem>
            {getFieldDecorator('username', {
                rules:[
                    {
                        required: true,
                        message: 'Please input username'
                    }
                ]
            })(
            <Input prefix={<Icon type='user'/>} placeholder='Username'/>
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('password', {
                rules:[
                    {
                        required: true,
                        message: 'Please input password'
                    }
                ]
            })(
            <Input prefix={<Icon type='lock'/>} placeholder='Password'/>
            )}
            </FormItem>
            <FormItem><Button type='primary' htmlType='submit'>Log in</Button></FormItem>
        </Form>);
    }
}

export default Form.create()(LoginForm);