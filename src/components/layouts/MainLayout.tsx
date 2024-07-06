import { Layout, Menu, MenuProps } from "antd";
import { adminSidebarItems } from "../../routes/admin.routes";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "1",
//     label: "Admin",
//   },
//   {
//     key: "2",
//     label: "Faculty",
//   },
//   {
//     key: "3",
//     label: "Student",
//   },
// ];

const MainLayout = () => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "16px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <h1>PH-UM</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSidebarItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
