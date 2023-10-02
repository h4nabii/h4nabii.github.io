import React from "react";
import "./App.css";
import {Divider, Layout, Menu} from "antd";
import {MailOutlined, QqOutlined} from "@ant-design/icons";

import {createHashRouter, RouterProvider} from "react-router-dom";
import routes from "./routes";

const router = createHashRouter(routes.map(item => ({...item})));

const {Header, Content, Footer} = Layout;

function App() {
  const pages =
    routes
      .filter((item) => !item?.hideInMenu)
      .map(({label, path}) => ({label, key: path}));

  const onMenuSelect = ({key}) => {
    window.location.hash = key;
  };

  return (
    <Layout className="App">

      <Header className="App-header">
        <div className="App-title">夏祭夜 | 花火屋</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[window.location.hash.substring(1)]}
          items={pages}
          onSelect={onMenuSelect}
        />
      </Header>

      <Content className="App-content">
        <RouterProvider router={router}/>
      </Content>

      <Footer className="App-footer">
        <span>@h4nabii</span>
        <Divider type="vertical"/>
        <a href="https://github.com/h4nabii">Github Home</a>
        <Divider type="vertical"/>
        <MailOutlined/> leon_xenos.xu@outlook.com
        <Divider type="vertical"/>
        <QqOutlined/> 1036795978
      </Footer>

    </Layout>
  );
}

export default App;
