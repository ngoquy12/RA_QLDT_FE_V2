import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white px-6 py-5 rounded-lg shadow-sm border w-full max-w-md">
        <div className="flex justify-center gap-4 items-center mb-5">
          <img
            className="h-7"
            src="https://learn.rikkeiacademy.com/static/media/RIKKEI_ACADEMY_LOGO.e997e6f7.png"
            alt=""
          />

          <div className="border-r h-8"></div>
          <img
            className="h-10"
            src="https://rikkei.edu.vn/wp-content/uploads/2024/01/logo-rikkei2.png"
            alt=""
          />
        </div>
        <h2 className="text-[22px] font-semibold text-center text-slate-800 mb-4">
          Đăng nhập để sử dụng hệ thống <br /> Quản lý đào tạo
        </h2>

        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={<span className="font-semibold">Email</span>}
            name="email"
            rules={[
              {
                required: true,
                message: "Email không được để trống",
              },
            ]}
          >
            <Input id="email" className="h-10" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Mật khẩu</span>}
            name="password"
            rules={[
              {
                required: true,
                message: "Mật khẩu không được để trống",
              },
            ]}
          >
            <Input.Password id="password" className="h-10" />
          </Form.Item>

          <Form.Item label={null} className="flex flex-col m-0">
            <Button
              className="h-10 w-full mt-2"
              type="primary"
              htmlType="submit"
            >
              Đăng nhập
            </Button>
            <div className="text-center mt-3">
              <Link
                to="#"
                className="text-blue-600 hover:text-blue-700 transition-all text-[14px] hover:underline "
              >
                Quên mật khẩu
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
