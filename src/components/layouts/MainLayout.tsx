import { Layout, Menu, MenuProps } from "antd";
import { adminSidebarItems } from "../../routes/admin.routes";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
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
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
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
      </Layout>
    </Layout>
  );
};

export default MainLayout;
