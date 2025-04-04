import { Avatar, Button, Dropdown, Modal } from "antd";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoBellFill, GoHistory } from "react-icons/go";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsThreeCircle } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export default function HeaderLayout({ isShowMenu, onToggleMenu }) {
  const navigate = useNavigate();

  const [isShowModal, setIsShowModal] = useState(false);

  // Mở modal xác nhận đăng xuất
  const handleShowModal = () => {
    setIsShowModal(true);
  };

  // Đóng modal xác nhận đăng xuất
  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  // Xác nhận đăng xuất tài khoản
  const handleLogout = () => {
    console.log("Logouted");
    handleCloseModal();
  };

  // Lựa chọn tài khoản
  const items = [
    {
      key: "1",
      label: (
        <div className="flex w-full items-center gap-2">
          <FaRegUser /> <div>Thông tin cá nhân</div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex w-full items-center gap-2">
          <IoSettingsOutline /> <div>Cài đặt</div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex w-full items-center gap-2">
          <GoHistory /> <div>Lịch sử hoạt động</div>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "4",
      label: (
        <div
          onClick={handleShowModal}
          className="flex w-full items-center gap-2"
        >
          <IoIosLogOut /> <div>Đăng xuất</div>
        </div>
      ),
    },
  ];

  // Chuyển tới trang tiếp theo
  const handleNextPage = () => {
    navigate(1);
  };

  // Quay lại trang trước đó
  const handlePreviousPage = () => {
    navigate(-1);
  };

  return (
    <>
      {/* Modal xác nhận đăng xuất */}
      <Modal
        width={450}
        title={<h3 className="text-[20px] font-semibold">Xác nhận</h3>}
        closable={false}
        open={isShowModal}
        footer={() => (
          <div className="flex items-center gap-3 justify-end">
            <Button onClick={handleCloseModal} className="h-9">
              Hủy
            </Button>
            <Button
              loading
              onClick={handleLogout}
              className="h-9"
              type="primary"
              danger
            >
              Đăng xuất
            </Button>
          </div>
        )}
      >
        <div className="flex items-center gap-3 my-4">
          <BsFillQuestionCircleFill size={24} className="text-red-500" />
          <p>Bạn có chắc chắn muốn đăng xuất tài khoản không?</p>
        </div>
      </Modal>

      <header className="w-full h-16 bg-white border-b items-center px-5 flex justify-between">
        <div className="flex gap-2">
          {isShowMenu === "show" ? (
            <AiOutlineMenuFold
              onClick={onToggleMenu}
              size={24}
              className="text-gray-600 hover:text-gray-700 transition-all cursor-pointer"
            />
          ) : (
            <AiOutlineMenuUnfold
              onClick={onToggleMenu}
              size={24}
              className="text-gray-600 hover:text-gray-700 transition-all cursor-pointer"
            />
          )}

          <GrFormPrevious
            onClick={handlePreviousPage}
            size={24}
            className="text-gray-600 hover:text-gray-700 transition-all cursor-pointer"
          />
          <GrFormNext
            onClick={handleNextPage}
            size={24}
            className="text-gray-600 hover:text-gray-700 transition-all cursor-pointer"
          />
        </div>

        <ul className="flex items-center gap-5">
          <li>
            <FiSearch
              size={20}
              className="text-gray-600 hover:text-gray-700 cursor-pointer transition-all"
            />
          </li>
          <li>
            <GoBellFill
              size={20}
              className="text-gray-600 hover:text-gray-700 cursor-pointer transition-all"
            />
          </li>
          <li>
            <PiDotsThreeCircle
              size={20}
              className="text-gray-600 hover:text-gray-700 cursor-pointer transition-all"
            />
          </li>
          <li>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              placement="bottomRight"
              arrow
            >
              <Avatar
                src="/images/avatar-admin.jpg"
                size={32}
                className="text-gray-600 hover:text-gray-700 cursor-pointer transition-all"
              />
            </Dropdown>
          </li>
        </ul>
      </header>
    </>
  );
}
