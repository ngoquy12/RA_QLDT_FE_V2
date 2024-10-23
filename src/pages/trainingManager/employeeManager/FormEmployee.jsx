import React, { useState } from "react";
import { Button, Form, Input, Radio, Select } from "antd";
import { IoCloseSharp } from "react-icons/io5";

export default function FormEmployee({ onClose }) {
  const [componentVariant, setComponentVariant] = useState("filled");
  const onFormVariantChange = ({ variant }) => {
    setComponentVariant(variant);
  };
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-30">
      <Form
        className="max-w-[600px] min-w-[550px] bg-white px-6 py-5 rounded-md"
        name="validateOnly"
        layout="vertical"
        onValuesChange={onFormVariantChange}
        variant={"outlined"}
        initialValues={{
          variant: componentVariant,
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[20px] font-semibold">Thêm mới nhân viên</h3>
          <IoCloseSharp
            onClick={onClose}
            title="Đóng"
            size={24}
            className="cursor-pointer hover:text-gray-800"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Form.Item
            label={<h3 className="font-semibold">Họ và tên</h3>}
            name="Input"
            rules={[
              {
                required: true,
                message: "Họ và tên không được để trống",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<h3 className="font-semibold">Giới tính</h3>}
            name="InputNumber"
          >
            <Radio.Group>
              <Radio>Nam</Radio>
              <Radio>Nữ</Radio>
              <Radio>Khác</Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Form.Item
            label={<h3 className="font-semibold">Ngày sinh</h3>}
            name="TextArea"
            rules={[
              {
                required: true,
                message: "Ngày sinh không được để trống",
              },
            ]}
          >
            <Input type="date" />
          </Form.Item>

          <Form.Item
            label={<h3 className="font-semibold">Vai trò</h3>}
            name="Select"
            rules={[
              {
                required: true,
                message: "Vai trò không được để trống",
              },
            ]}
          >
            <Select
              defaultValue={["lucy"]}
              mode="multiple"
              options={[
                {
                  value: "0",
                  label: "ADMIN",
                },
                {
                  value: "4",
                  label: "MANAGER",
                },
                {
                  value: "3",
                  label: "ASSISTANT",
                },
                {
                  value: "2",
                  label: "TEACHER",
                },
                {
                  value: "1",
                  label: "GUEST",
                },
              ]}
              className="min-h-9"
            />
          </Form.Item>
        </div>

        <Form.Item
          label={<h3 className="font-semibold">Email</h3>}
          name="Mentions"
          rules={[
            {
              required: true,
              message: "Email không được để trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={<h3 className="font-semibold">Mật khẩu</h3>}
          name="password"
          rules={[
            {
              required: true,
              message: "Mật khẩu không được để trống",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label={<h3 className="font-semibold">Địa chỉ</h3>}
          name="address"
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <div className="border-b mb-3"> </div>

        <div className="flex justify-end gap-3 mb-0">
          <Button onClick={onClose} htmlType="button">
            Hủy
          </Button>
          <Button htmlType="submit" type="primary">
            Thêm
          </Button>
        </div>
      </Form>
    </div>
  );
}
