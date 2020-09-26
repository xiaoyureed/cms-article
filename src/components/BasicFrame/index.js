import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import {privateRoutes} from '../../routers';
import {withRouter} from 'react-router-dom'
const { Header, Content, Sider } = Layout;
const topMenuItems = privateRoutes.filter(item => item.isTop === true);

class BasicFrame extends Component {
    onClickMenu = ({item, key, keyPath, domEvent}) => {
        // console.log({item, key, keyPath, domEvent});

        this.props.history.push(key);// 点击菜单, 右边内容跟着变化
    }

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
                            onClick={this.onClickMenu}
                            mode="inline"
                            selectedKeys={[this.props.location.pathname]}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {
                                topMenuItems.map(item => {
                                    return (
                                        <Menu.Item key={item.pathname}>
                                            <item.icon />
                                            {item.title}
                                        </Menu.Item>
                                    );
                                })
                            }
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

// add history to this.props
export default withRouter(BasicFrame);