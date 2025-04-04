import SidebarLayout from "./sidebar";
import HeaderLayout from "./header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const DefaultLayout = () => {
  const [isShowMenu, setIsShowMenu] = useState(() => {
    const showMenuValue =
      JSON.parse(localStorage.getItem("showMenu")) || "show";
    return showMenuValue;
  });

  // Ẩn / hiện menu
  const toggleMenu = () => {
    setIsShowMenu((prev) => {
      const newState = prev === "hidden" ? "show" : "hidden";
      localStorage.setItem("showMenu", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className="min-h-screen flex">
      <SidebarLayout isShowMenu={isShowMenu} />

      <div className="flex-1 max-w-[calc(100%-250px)] h-screen flex flex-col bg-blue-800">
        <HeaderLayout isShowMenu={isShowMenu} onToggleMenu={toggleMenu} />

        <div className="bg-white p-5 w-full flex-1 max-h-[calc(100vh-64px)] overflow-auto relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
