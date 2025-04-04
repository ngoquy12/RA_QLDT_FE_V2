import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MdCastForEducation,
  MdCategory,
  MdOutlinePostAdd,
  MdPostAdd,
  MdTopic,
} from "react-icons/md";
import {
  FaChartArea,
  FaChartPie,
  FaCommentDots,
  FaFacebookMessenger,
  FaProjectDiagram,
  FaUserAlt,
} from "react-icons/fa";
import { SiSololearn } from "react-icons/si";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaPersonCircleQuestion, FaUserGroup } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdPricetag } from "react-icons/io";
import { PiExam } from "react-icons/pi";
import { BsQuestionCircleFill } from "react-icons/bs";
const { Sider } = Layout;
import "./index.scss";

const getItem = (label, key, icon, children) => ({
  key,
  icon,
  children,
  label,
});

const items = [
  getItem(
    <NavLink to="/dashboard">Thống kê</NavLink>,
    "/dashboard",
    <FaChartPie />
  ),
  getItem(
    <NavLink to="/employee-manager">Nhân viên</NavLink>,
    "/employee-manager",
    <FaUserAlt />
  ),
  getItem("Quản lý đào tạo", "sub1", <MdCastForEducation />, [
    getItem("Sinh viên", "3"),
    getItem(
      <NavLink to="/training-system">Hệ đào tạo</NavLink>,
      "/training-system"
    ),
    getItem(
      <NavLink to="/class-manager">Quản lý lớp</NavLink>,
      "/class-manager"
    ),
    getItem(
      <NavLink to="/classroom-manager">Quản lý phòng học</NavLink>,
      "/classroom-manager"
    ),
    getItem(
      <NavLink to="/exam-manager">Quản lý kỳ thi</NavLink>,
      "/exam-manager"
    ),
    getItem(
      <NavLink to="/exam-shift-manager">Quản lý ca thi</NavLink>,
      "/exam-shift-manager"
    ),
  ]),
  getItem("E-learning", "sub2", <SiSololearn />, [
    getItem(
      <NavLink to="/eleaning/question-bank">Quản lý bộ đề</NavLink>,
      "/eleaning/question-bank"
    ),
    getItem(
      <NavLink to="/elearning/progress-management">Quản lý tiến độ</NavLink>,
      "/elearning/progress-management"
    ),
  ]),
  getItem("Kiểm tra đầu vào", "11", <CiBookmarkCheck />, [
    getItem("Quản lý thể loại", "12", <MdCategory />),
    getItem("Quản lý câu hỏi", "13", <BsQuestionCircleFill />),
    getItem("Quản lý thể loại", "14", <MdCategory />),
  ]),
  getItem("Quản lý thực tập", "15", <FaUserGroup />, [
    getItem(
      <NavLink to="/internship/report">Thống kê & Báo cáo</NavLink>,
      "/internship/report",
      <FaChartArea />
    ),
    getItem(
      <NavLink to="/internship/topic-manager">Quản lý đề tài</NavLink>,
      "/internship/topic-manager",
      <MdTopic />
    ),
    getItem(
      <NavLink to="/internship/project-manager">Quản lý dự án</NavLink>,
      "/internship/project-manager",
      <FaProjectDiagram />
    ),
  ]),
  getItem("Quản lý phỏng vấn", "19", <FaPersonCircleQuestion />, [
    getItem("Quản lý công nghệ", "20", <MdTopic />),
    getItem("Quản lý bộ đề", "21", <PiExam />),
  ]),
  getItem("Quản lý bài viết", "22", <MdPostAdd />, [
    getItem("Quản lý thẻ", "23", <IoMdPricetag />),
    getItem("Quản lý danh mục", "24", <BiSolidCategory />),
    getItem("Quản lý nội dung", "25", <MdOutlinePostAdd />),
    getItem("Quản lý bình luận", "26", <FaCommentDots />),
  ]),
  getItem(
    <NavLink to="/messenger">Messenger</NavLink>,
    "/messenger",
    <FaFacebookMessenger />
  ),
];

const sharedClasses = {
  siderStyle: {
    overflow: "auto",
    height: "100vh",
    scrollbarWidth: "thin",
  },

  logoClass: (collapsed) => `${collapsed ? "h-6" : "h-11"} object-cover`,
};

export default function SidebarLayout({ isShowMenu }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <>
      {isShowMenu == "show" && (
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
            selectedKeys={[location.pathname]}
            items={items}
          />
        </Sider>
      )}
    </>
  );
}
