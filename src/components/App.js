import React from 'react'
import FiltersFooter from './FiltersFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import 'antd/dist/antd.css'


import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => (
  <div>
      <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', color: "#FFFFFF" }}>
      react-sweet-state TODO APP
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 900 }}>
        <AddTodo />
        <VisibleTodoList />
        <FiltersFooter />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>


  </div>
)

export default App
