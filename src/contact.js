import React, { Component } from 'react';
import { Badge, Calendar } from 'antd';
import moment from 'moment';

export default class Contact extends Component {
    render() {
        return (<div style={{ width: '100%', border: '1px solid #d9d9d9', borderRadius: 4 }} >
            <Calendar fullscreen={false}
            defaultValue={new moment('2017-9-1')}
                dateCellRender={date =>
                    <Badge dot={date.date() === moment().date()}></Badge>
                }
            />
        </div>);
    }
};

