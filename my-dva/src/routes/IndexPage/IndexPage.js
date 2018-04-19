import React, { Component } from 'react'
import  { A1, A2 }  from '../../components/aaa';
import { connect } from 'dva';
import './IndexPage.less'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

// import Div1 from '../Div1/Div1'

console.log(A1)


class IndexPage extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          breakpoint="md"
          onCollapse={(collapsed, type) => { this.toggle() }}
          collapsed={this.state.collapsed}
          style={{ overflow: 'auto', height: '100vh',  left: 0 }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}


// const TestError = () => {
//     return (
//       <div>TestError</div>
//     )
//   };

// const IndexPage = (props) => {
//   console.log(props.clg)
  
//     return (
//       <div>
//         <Button>123</Button>
//         <TestError />
//         <h2>{ props.count.num }</h2>
//         <div>{ props.count.text }</div>
//         <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
//         <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
//       </div>
//     )
//   };



const mapStateToProps = ({count, clg}) => {
  return {
    count,
    clg
  }
}

export default connect(mapStateToProps)(IndexPage);