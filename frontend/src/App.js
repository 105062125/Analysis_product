import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from '../src/logo_main.svg';
import Home from './component/Home'
import Timer from './component/Timer'
import JSTimer from './component/JSTimer'
import Name from './component/name'
// import Navbar from './component/navbar'
import GetDbUser from './component/GetDbUser'
import func1 from './component/func1'
import func2 from './component/func2'

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer} = Layout;
class App extends React.Component {
  render(){
    return(

    <Layout>
    <Header className="header">
      <div className="logo">
        <img src={logo} width="50" height="50" alt="logo"></img>
      </div>
      <Menu theme="dark" mode="horizontal">
        <div className="Apptitle">Analysis Tools</div>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['0']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key = "0">
              Home
              <Link className="nav-link" to="/"></Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<UserOutlined />} title="Function Test">
            <Menu.Item key="1">
              Timer
              <Link className="nav-link" to="/Timer"></Link>
            </Menu.Item>
            <Menu.Item key="2">
              JSTimer
              <Link className="nav-link" to="/JSTimer"></Link>
            </Menu.Item>
            <Menu.Item key="3">
              Name
              <Link className="nav-link" to="/name"></Link>
            </Menu.Item>
            <Menu.Item key="4">
            GetDbUser
              <Link className="nav-link" to="/GetDbUser"></Link>
            </Menu.Item>
            <Menu.Item key="5">
            Func1
              <Link className="nav-link" to="/func1"></Link>
            </Menu.Item>
            <Menu.Item key="6">
            Func2
              <Link className="nav-link" to="/func2"></Link>
            </Menu.Item>

          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Data Process">
            <Menu.Item key="7">option5</Menu.Item>
            <Menu.Item key="8">option6</Menu.Item>
            <Menu.Item key="9">option7</Menu.Item>
            <Menu.Item key="10">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="Stock">
            <Menu.Item key="11">option9</Menu.Item>
            <Menu.Item key="12">option10</Menu.Item>
            <Menu.Item key="13">option11</Menu.Item>
            <Menu.Item key="14">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{padding: '10px 10px 0px 10px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: "100vh",
          }}
        >
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Timer" component={Timer} />
          <Route path="/JSTimer" component={JSTimer} />
          <Route path="/Name" component={Name} />
          <Route path="/GetDbUser" component={GetDbUser} />
          <Route path="/func1" component={func1} />
          <Route path="/func2" component={func2} />
        </Content>
      </Layout>
      
      
    </Layout>
    <Footer className="Footer">Copyright © KEVIN CHEN</Footer>
  </Layout>

    )
  }
  // render(){
  //   return(
  //     <div>
  //       <Navbar />
  //       <Route exact path="/" component={Test} />
  //       <Route path="/Test" component={Test} />
  //       <Route path="/Timer" component={Timer} />
  //       <Route path="/JSTimer" component={JSTimer} />
  //       <Route path="/Name" component={Name} />
  //       <Route path="/GetDbUser" component={GetDbUser} />
  //       <Route path="/function_display" component={function_display} />
  //     </div>
  //   )
  // }
}


export default App;
