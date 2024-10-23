import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  // Quay lại trang trước
  const handlePreviousPage = () => {
    navigate(-1);
  };
  return (
    <>
      <Result
        status="500"
        title="500 - Lỗi máy chủ"
        subTitle="Xin lỗi, hệ thống của chúng tôi gặp sự cố. Vui lòng thử lại sau hoặc quay lại trang trước."
        extra={
          <Button onClick={handlePreviousPage} type="primary">
            Quay lại
          </Button>
        }
      />
    </>
  );
}
