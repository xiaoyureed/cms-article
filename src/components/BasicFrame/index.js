import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { SettingOutlined, HomeOutlined, FileTextOutlined } from '@ant-design/icons'

const { Header, Content, Sider } = Layout;

export default class BasicFrame extends Component {
    render() {
        return (
            <Layout style={{
                minHeight: '100%',
            }}>
                <Header className="header">
                    <div className="logo" />
                    <h2 style={{
                        color: 'white'
                    }}>CMS System</h2>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1">
                                <HomeOutlined />
                                Dashboard
                                </Menu.Item>
                            <Menu.Item key="2"><FileTextOutlined />Article management</Menu.Item>
                            <Menu.Item key="3">
                                <SettingOutlined />
                                System settings
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
