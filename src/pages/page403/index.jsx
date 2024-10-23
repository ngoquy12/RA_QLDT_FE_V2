import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ForbiddenPage() {
  const navigate = useNavigate();

  // Quay lại trang trước
  const handlePreviousPage = () => {
    navigate(-1);
  };

  return (
    <>
      <Result
        status="403"
        title="403 - Truy cập bị từ chối"
        subTitle="Xin lỗi, bạn không có quyền truy cập vào trang này. Vui lòng kiểm tra lại quyền truy cập của bạn hoặc liên hệ với quản trị viên."
        extra={
          <>
            <Button onClick={handlePreviousPage} type="primary">
              Quay lại
            </Button>
          </>
        }
      />
    </>
  );
}
