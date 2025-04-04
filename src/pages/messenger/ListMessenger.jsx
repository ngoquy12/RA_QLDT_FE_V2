import { Avatar, Divider, Input } from "antd";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function ListMessenger() {
  const users = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Người dùng ${index + 1}`,
    message: `Tin nhắn mẫu ${index + 1}`,
    avatarUrl:
      "https://duhocsunny.edu.vn/wp-content/uploads/2023/02/Anh-gai-xinh-Han-Quoc-.jpg",
  }));
  return (
    <>
      <div className="w-[300px]  max-h-[calc(100vh-72px)] h-[calc(100vh-72px)] overflow-y-auto -ml-[16px] -my-[16px] rounded border shadow-sm">
        <header className="flex items-center gap-1 sticky top-0 bg-white z-10 w-full px-2 py-2">
          <Input.Search placeholder="Tìm kiếm bạn (Crtl + K)" />
          <IoIosAddCircleOutline size={24} />
        </header>
        {/* <div className="border-b my-3 px-2"></div> */}

        <ul className="flex flex-col gap-2 px-2">
          {users.map((item) => (
            <li
              className={`flex items-center gap-2 rounded px-2 py-1 hover:bg-gray-100 cursor-pointer transition-all ${
                item.id === 1 ? "bg-[#e3edfc]" : ""
              }`}
            >
              <Avatar
                size={36}
                src="https://duhocsunny.edu.vn/wp-content/uploads/2023/02/Anh-gai-xinh-Han-Quoc-.jpg"
              />
              <div>
                <span className="font-semibold">Ngọ Văn Quý</span>
                <p className="text-gray-500">Xin chào các bạn nhé</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
