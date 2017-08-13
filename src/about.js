import React, { Component } from 'react';
import {
    Table, Button, Icon, Popconfirm, Steps, Cascader, Popover, Tooltip, Modal,
    Rate, Slider, Switch, Avatar, Badge, Card, Collapse, Carousel, Alert, Tag, Timeline,
    message, notification, Progress, Spin, BackTop,
} from 'antd';

import 'antd/dist/antd.css';

import store from './store';

export default class AboutComponent extends Component {
    static columns =
    [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: true
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => (
                <span><a href='#'>Edit</a><span className="ant-divider" />
                    <Popconfirm title='Sure to delete?'><a href='#'>Delete</a></Popconfirm></span>
            )
        }
    ];
    render() {
        return (
            <div>
                <Table title={() => <div>This is title<Icon type='smile-o' /></div>} footer={() => <Button type='danger'>This is footer</Button>} bordered={true}
                    showHeader={true} pagination={{ pageSize: 4, showSizeChanger: true }} rowSelection={{ type: 'radio' }}
                    expandedRowRender={record => <p>{record.name}</p>}
                    columns={AboutComponent.columns} dataSource={store.getGoods()}>
                </Table>
                <Steps progressDot={false} current={1}>
                    <Steps.Step title="Open" />
                    <Steps.Step title="In Progress" description="In Progress" />
                    <Steps.Step title="Close" description="Close" />
                </Steps>
                <Cascader options={
                    [{
                        value: 'zhejiang',
                        label: 'ZheJiang',
                        children: [{
                            value: 'hangzhou',
                            label: 'HangZhou',
                            children: [{
                                value: 'xihu',
                                label: 'XiHu'
                            }]
                        }]
                    }]
                } />
                <Rate />
                <Slider defaultValue={30} />
                <Switch checkedChildren="ON" unCheckedChildren="OFF" />
                <Badge count={1}><Avatar shape="square" icon='user' /></Badge>
                <Spin />
                <Carousel effect='fade' autoplay easing>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>                
                <Card title='Title' extra={<a href='#'>More</a>}>
                    <Popover title='Popover' content={<h1>Content</h1>}><Button>Show Popover</Button></Popover>
                    <Tooltip title='Tooltip'><Button>Show Tooltip</Button></Tooltip>
                    <Button onClick={() => Modal.warning({ title: 'Title', content: 'Content' })}>Show Modal</Button>
                    <Button onClick={() => setTimeout(message.loading('Loading...'), 2500)}>Show Message</Button>
                    <Button onClick={() => setTimeout(notification['error']({ message: 'notification', description: 'Desc' }), 2500)}>Show Notification</Button>
                </Card>
                <Collapse>
                    <Collapse.Panel header='1' key='1'>Text</Collapse.Panel>
                </Collapse>
                <Tag closable color='pink'>Tag1</Tag>
                <Timeline pending='More'>
                    <Timeline.Item color='green'>1</Timeline.Item>
                    <Timeline.Item dot={<Icon type='clock-circle-o' />}>2</Timeline.Item>
                    <Timeline.Item>3</Timeline.Item>
                    <Timeline.Item>4</Timeline.Item>
                </Timeline>
                <Alert banner message='Warning!' description='Content' />
                <Alert closable type='error' showIcon message='Error!' description='Content' />
                <Progress type='dashboard' percent={30} status='exception' format={percent => `${percent} Days`} />
                <BackTop />
            </div>
        );
    }
}

