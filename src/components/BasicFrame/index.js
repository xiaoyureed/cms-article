import React, { Component } from 'react'
import { Col, Layout, Menu, Row, Dropdown, Avatar, Badge } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { privateRoutes } from '../../routers';
import { withRouter } from 'react-router-dom'


const { Header, Content, Sider } = Layout;
const topMenuItems = privateRoutes.filter(item => item.isTop === true);

// /admin  下的主题框架, 从 antd 复制
class BasicFrame extends Component {
    onClickMenu = ({ item, key, keyPath, domEvent }) => {
        console.log({item, key, keyPath, domEvent});

        this.props.history.push(key);// 点击左边菜单, 右边内容跟着变化
    }

    render() {

        const menu = (
            <Menu onClick={this.onClickMenu}>
                <Menu.Item key="/admin/notification"> 
                    <Badge dot>
                        通知中心
                    </Badge>
                </Menu.Item>
                <Menu.Item key="/admin/setting">
                        个人设置
                </Menu.Item>
                <Menu.Item key="/login">
                        退出
                </Menu.Item>
            </Menu>
        );

        return (
            <Layout style={{
                minHeight: '100%',
            }}>
                <Header className="header">
                    <Row>
                        <Col span={8}>
                            <h2 style={{
                                color: 'white'
                            }}>CMS System</h2>
                        </Col>
                        <Col span={3} offset={13}>
                            <div style={{ color: 'white' }}>
                                <Dropdown overlay={menu}>
                                    <Badge count={5}>
                                        <div style={{ color: 'white' }} onClick={e => e.preventDefault()}>
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        xxx, welcome!
                                        <DownOutlined />
                                        </div>
                                    </Badge>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
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

// this component is not wrappered by router, so history can't be found from it;
// add history to this.props
export default withRouter(BasicFrame);