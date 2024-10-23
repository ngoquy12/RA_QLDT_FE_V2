import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MdCastForEducation } from "react-icons/md";
import { FaChartPie, FaUserAlt } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaPersonCircleQuestion, FaUserGroup } from "react-icons/fa6";
const { Sider } = Layout;
import "./index.scss";
import { NavLink } from "react-router-dom";

const getItem = (label, key, icon, children) => ({
  key,
  icon,
  children,
  label,
});

const items = [
  getItem(<NavLink to="/dashboard">Thống kê</NavLink>, "1", <FaChartPie />),
  getItem(<NavLink to="/employee">Nhân viên</NavLink>, "2", <FaUserAlt />),
  getItem("Quản lý đào tạo", "sub1", <MdCastForEducation />, [
    getItem("Sinh viên", "3"),
    getItem("Hệ đào tạo", "4"),
    getItem("Quản lý lớp", "5"),
    getItem("Quản lý phòng học", "6"),
    getItem("Quản lý kỳ thi", "7"),
    getItem("Quản lý ca thi", "8"),
  ]),
  getItem("E-learning", "sub2", <SiSololearn />, [
    getItem("Quản lý bộ đề", "9"),
    getItem("Quản lý tiến độ", "10"),
  ]),
  getItem("Kiểm tra đầu vào", "11", <CiBookmarkCheck />),
  getItem("Quản lý internship", "12", <FaUserGroup />),
  getItem("Quản lý interview", "13", <FaPersonCircleQuestion />),
];

const sharedClasses = {
  siderStyle: {
    overflow: "auto",
    height: "100vh",
    scrollbarWidth: "thin",
  },

  logoClass: (collapsed) => `${collapsed ? "h-6" : "h-11"} object-cover`,
};

export default function SidebarLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider
        width={250}
        style={sharedClasses.siderStyle}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="h-16 border-b sticky top-0 z-40 bg-[#001529] border-b-gray-800 flex items-center justify-center">
          <img
            className={sharedClasses.logoClass(collapsed)}
            src="/images/Rikkei_Education_Logo.png"
            alt="Logo"
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
}
