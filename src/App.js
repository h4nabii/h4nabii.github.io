import React from "react";
import "./App.css";
import {Breadcrumb, Layout, Menu, theme} from "antd";

function App() {
  const {Header, Content, Footer} = Layout;
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  const pages = [
    {
      label: "最新",
    },
    {
      label: "日志",
    },
    {
      label: "关于",
    },
  ];

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h3 className="App-title">夏祭夜 | 花火屋</h3>
        </header>
      </div>
      <Layout className="layout">
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[pages[0].label]}
            items={pages.map(({label}) => ({label, key: label}))}
          />
        </Header>
        <Content style={{padding: "0 50px"}}>
          <Breadcrumb style={{margin: "16px 0"}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-content"
            style={{background: colorBgContainer}}
          >
            Content
          </div>
        </Content>
        <Footer style={{textAlign: "center"}}>
          @h4nabii | <a href="https://github.com/h4nabii">Github Home</a> | Mail: leon_xenos.xu@outlook.com | QQ:
          1036795978
        </Footer>
      </Layout>
    </>
  );
}

export default App;
