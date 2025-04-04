import { Avatar, Button, Tooltip } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaPhone, FaUsers } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import InputEmoji from "react-input-emoji";
import { LuArrowDownFromLine } from "react-icons/lu";

export default function MessengerDetail() {
  // Viết logic khi cuộn trang 200px thì hiển thị nút cuộn xuống dưới
  const [showScrollDown, setShowScrollDown] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollDown(true);
    } else {
      setShowScrollDown(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const [text, setText] = useState("");
  const messages = Array.from({ length: 10 }, (_, index) => {
    return {
      id: index + 1,
      text: `Tin nhắn số ${
        index + 1
      } Để tạo một mảng messages với khoảng 100 tin nhắn ngẫu nhiên, trong đó sender là "user" hoặc "receiver" một cách ngẫu nhiên, bạn có thể sử dụng mã JavaScript như sau:`,
      sender: Math.random() > 0.5 ? "user" : "receiver",
      time: moment(new Date()).format(`DD/MM/YYYY [lúc] hh:mm:ss`),
    };
  });

  function handleOnEnter(newText) {
    const newMessage = {
      id: messages.length + 1,
      text: newText,
      sender: "user",
    };
    setText("");
  }

  return (
    <div className="flex flex-col border w-full flex-1 -my-[16px] -mr-[16px]  rounded shadow-sm">
      <header className="px-3 py-2 h-16 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar
            size={40}
            src="https://duhocsunny.edu.vn/wp-content/uploads/2023/02/Anh-gai-xinh-Han-Quoc-.jpg"
          />
          <div className="flex flex-col gap-1">
            <span className="font-bold">ĐT - Giảng viên</span>
            <div className="flex items-center gap-1">
              <FaUsers className="text-gray-500" size={16} />
              <span className="text-gray-500 font-normal text-[12px]">16</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button icon={<FaPhone />}></Button>
          <Button icon={<IoVideocam />}></Button>
          <Button icon={<IoMdPersonAdd />}></Button>
          <Button icon={<CiSearch />}></Button>
        </div>
      </header>

      <main className="relative flex-1 p-2 max-h-[calc(100vh-194px)] flex flex-col gap-3 overflow-y-auto">
        <>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-4 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-2 text-end opacity-70">
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </>
      </main>

      <footer className="h-14 flex items-center gap-2 px-3 border-t">
        <Button icon={<MdOutlineAttachFile />}></Button>
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Nhập nội dung tin nhắn"
        />
        <Button
          disabled={!text}
          icon={<BsFillSendFill />}
          onClick={() => handleOnEnter(text)}
        ></Button>
      </footer>

      <Tooltip title="Cuộn xuống dưới">
        <LuArrowDownFromLine
          size={24}
          className="absolute bottom-[72px] right-[48px] z-30 animate-bounce text-gray-600 cursor-pointer"
        />
      </Tooltip>
    </div>
  );
}
