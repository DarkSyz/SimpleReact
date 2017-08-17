import React, { Component } from 'react';
import { Badge, Calendar } from 'antd';
import moment from 'moment';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment()
        }
    }
    render() {
        return (
            <div>
                <div style={{ minWidth: 300, width: '30%', border: '1px solid #d9d9d9', borderRadius: 4 }} >
                    <Calendar 
                        showHeader={false}
                        fullscreen={false}
                        defaultValue={this.state.currentDate}
                        onSelect={(date)=>this.setState({currentDate: date})}
                        dateCellRender={date =>
                            <Badge dot={date.date() === moment().date()}></Badge>
                        }
                    />
                </div>
                <div>{this.state.currentDate.toString()}</div>
            </div>
        );
    }
};

