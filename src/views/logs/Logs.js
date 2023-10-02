import React from "react";
import {Breadcrumb, Layout, Menu, theme} from "antd";

const {Sider, Content} = Layout;

export default function Logs() {
  const {token: {colorBgContainer}} = theme.useToken();
  const subPages = [
    {
      label: "最新",
    },
    {
      label: "日志",
    },
    {
      label: "关于",
    },
  ].map(({label}) => ({label, key: label}));
  return (
    <>
      <Breadcrumb style={{margin: "16px 0"}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout
        style={{
          padding: "24px 0",
          background: colorBgContainer,
        }}>
        <Sider width={200} style={{background: colorBgContainer}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={subPages[0].label}
            style={{
              height: "100%",
            }}
            items={subPages}
          />
        </Sider>
        <Content style={{padding: "0 24px", background: colorBgContainer}}>
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
              height: "100%",
            }}
          >
            Content
          </div>
        </Content>
      </Layout>;
    </>
  );
}
