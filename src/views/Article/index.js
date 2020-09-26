import React, { Component } from 'react'
import { Card, Button, Table } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { getTopics } from '../../api';
import Tag from 'antd/es/tag';
import Tooltip from 'antd/es/tooltip';
import Modal from 'antd/lib/modal/Modal';

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        dataIndex: 'opts',
        key: 'opts',
        render: (text, record, index) => {
            // console.log({text, record, index});
            return (
                <ButtonGroup>
                    <Button type="primary">编辑</Button>
                    <Button type="danger">删除</Button>
                </ButtonGroup>
            )
        },
    },
];

const tableFieldChineseMapping = {
    id: '序号',
    title: '标题',
    visit_count: '访问量',
    create_at: '发布时间',
    author: '作者',
};

export default class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            total: 100,
            columns: [],
        };
    }

    editHandler = (record) => {

    }

    delHandler =  record => {
        //todo
        Modal.useModal('confirm', {
            title: 'delete',
            content: `Are you sure you want to delete ${record.title}?`,
            onCancel: () => {},
            onOk: () => {},
        });
    }

    getArticleTopicks(page, limit) {
        getTopics(page, limit).then(data => {// 已经在拦截器中处理一道了, 这里直接 是 data, 不是 resp 了
            console.log('data', data.data);

            // content 字段内容太长了, 过滤一下
            let filteredData = [];
            data.data.forEach(item => {
                filteredData.push({
                    id: item.id,
                    title: item.title,
                    visit_count: item.visit_count,
                    create_at: item.create_at,
                    author: item.author.loginname,
                });
            });

            console.log('filteredData', filteredData);

            const columns = Object.keys(filteredData[0]).map(item => {

                // 若访问量 过低, 显示红色标签
                if (item === 'visit_count') {
                    return {
                        title: tableFieldChineseMapping[item],
                        dataIndex: item,
                        key: item,
                        render: (text, record, index) => {
                            // return test;

                            return <Tooltip title={record.visit_count >= 1000 ? '访问量高于 1000' : '访问量低于 1000'}>
                                <Tag color={record.visit_count >= 1000 ? 'red' : 'green'}>{text}</Tag>
                            </Tooltip>;
                        },
                    }
                }

                return {
                    title: tableFieldChineseMapping[item],// title 映射为 中文
                    dataIndex: item,
                    key: item,
                }
            });

            // 添加操作列
            columns.push({
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: (text, record, index) => {
                    return (
                        <ButtonGroup>
                            <Button size="small" type="primary" onClick={this.editHandler.bind(this, record)}>编辑</Button>
                            <Button size="small" type="danger" onClick={this.delHandler.bind(this, record)}>删除</Button>
                        </ButtonGroup>
                    );
                },
            });

            this.setState({
                dataSource: filteredData,
                columns,
            });

        }).catch(err => {
            console.error(err);
        })
    }

    componentDidMount() {
        this.getArticleTopicks(1, 2);
    }

    render() {
        return (
            <Card title="Article List"
                extra={<Button>export</Button>}
            >
                <Table
                    rowKey={record => record.id}
                    dataSource={this.state.dataSource}
                    columns={this.state.columns}
                    pagination={{
                        current: 1,
                        total: this.state.total,
                        pageSize: 10,
                    }}
                />
            </Card>
        )
    }
}
