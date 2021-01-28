import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { HashRouter, Route, Link } from 'react-router-dom';
import App from '../App'
import Table from '../pages/table'
import './index.css'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class FBHLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

{/* <HashRouter>
  <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
    <div className="logo" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        <Link to='/'>首页</Link>
      </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="User">
        <Menu.Item key="3">
          <Link to='/table'>表格中心</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  </Sider>
</HashRouter> */}

{/* <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
<Breadcrumb style={{ margin: '16px 0' }}>
  <Breadcrumb.Item>User</Breadcrumb.Item>
  <Breadcrumb.Item>Bill</Breadcrumb.Item>
</Breadcrumb>
<div>
  <HashRouter>
    <Route exact path='/' component={App}></Route>
    <Route path='/table' component={Table}></Route>
  </HashRouter>
</div>
</Content> */}