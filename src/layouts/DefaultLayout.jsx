import { Layout } from "antd";
import SidebarLayout from "./sidebar";
import HeaderLayout from "./header";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const DefaultLayout = () => {
  return (
    <Layout className="min-h-screen flex">
      <SidebarLayout />

      <div className="flex-1 flex flex-col">
        <HeaderLayout />

        <Content className="bg-white p-5 w-full flex-1 max-h-[calc(100vh-64px)] overflow-auto">
          <Outlet />
        </Content>
      </div>
    </Layout>
  );
};

export default DefaultLayout;
