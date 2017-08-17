import React, { Component } from 'react';
import { Badge } from 'antd';
import moment from 'moment';
import FullCalendar from 'rc-calendar/lib/FullCalendar.js';
import 'rc-calendar/assets/index.css';

export default class CalendarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment()
        }
    }
    zerofixed(v) {
        if (v < 10) {
            return `0${v}`;
        }
        return `${v}`;
    }
    dateCellRender = (value) => {
        return (
            <div className='rc-calendar-date' style={{ border: '1px solid red' }}>
                <Badge dot={value.date() === moment().date()}>{this.zerofixed(value.date())}</Badge>
            </div>
        );
    }
    render() {
        return (
            <div>
                <div style={{ border: '1px solid #d9d9d9', borderRadius: 4 }} >
                    <FullCalendar
                        showHeader={false}
                        Select={() => null}
                        dateCellRender={this.dateCellRender}
                        onSelect={date => this.setState({ currentDate: date })}
                    />
                </div>
                <div>{this.state.currentDate.toString()}</div>
            </div>
        );
    }
};

