import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  // Quay lại trang trước
  const handlePreviousPage = () => {
    navigate(-1);
  };
  return (
    <>
      <Result
        status="404"
        title="Oops! Không tìm thấy trang"
        subTitle="Đường dẫn đang truy cập đã bị thay đổi hoặc không tồn tại."
        extra={
          <Button onClick={handlePreviousPage} type="primary">
            Quay lại
          </Button>
        }
      />
    </>
  );
}
