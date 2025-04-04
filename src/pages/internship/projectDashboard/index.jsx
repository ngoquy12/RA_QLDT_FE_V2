import { Button, Pagination, Select, Table } from "antd";

const columns = [
  {
    title: "Sinh viên",
    width: 250,
    dataIndex: "name", // Tên sinh viên
    key: "name",
    fixed: "left",
  },
  {
    title: "Đề tài",
    width: 300,
    dataIndex: "topic", // Đề tài
    key: "topic",
  },
  {
    title: "Điểm",
    dataIndex: "score", // Điểm
    key: "score",
    width: 100,
  },
  {
    title: "Tỉ lệ vi phạm",
    dataIndex: "violationRate", // Tỉ lệ vi phạm
    key: "violationRate",
    width: 150,
  },
  {
    title: "Tỉ lệ hoàn thành",
    dataIndex: "completionRate", // Tỉ lệ hoàn thành
    key: "completionRate",
    width: 150,
  },
  {
    title: "Điều kiện bảo vệ",
    dataIndex: "protectionCondition", // Điều kiện bảo vệ
    key: "protectionCondition",
    width: 200,
  },
  {
    title: "Bảo lãnh",
    dataIndex: "guarantee", // Bảo lãnh
    key: "guarantee",
    width: 250,
  },
  {
    title: "Kết quả",
    dataIndex: "result", // Kết quả
    key: "result",
    width: 150,
  },
  {
    title: "Điều kiện tham gia",
    dataIndex: "participationCondition", // Điều kiện tham gia
    key: "participationCondition",
    width: 200,
  },
  {
    title: "Chấm điểm",
    key: "operation",
    fixed: "right",
    width: 200,
    render: () => (
      <div className="flex justify-center">
        <Select
          defaultValue="lucy"
          style={{
            width: 150,
          }}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
          ]}
        />
      </div>
    ),
  },
];

const dataSource = Array.from({
  length: 10,
}).map((_, i) => ({
  key: i + 1,
  name: `Sinh viên ${i}`, // Tên sinh viên
  topic: `Đề tài ${i}`, // Đề tài
  score: `${Math.floor(Math.random() * 10) + 1}/10`, // Điểm, giả sử từ 1 đến 10
  violationRate: `${Math.ceil(Math.random() * 100)}%`, // Tỉ lệ vi phạm ngẫu nhiên
  completionRate: `${Math.ceil(Math.random() * 100)}%`, // Tỉ lệ hoàn thành ngẫu nhiên
  protectionCondition:
    Math.random() > 0.5 ? "Đủ điều kiện" : "Không đủ điều kiện", // Điều kiện bảo vệ
  guarantee: `${Math.ceil(Math.random() * 100)}%`, // Bảo lãnh ngẫu nhiên
  result: Math.random() > 0.5 ? "Đạt" : "Chưa đạt", // Kết quả
  participationCondition: Math.random() > 0.5 ? "Có" : "Không", // Điều kiện tham gia
}));

export default function ProjectDashboard() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-full overflow-auto">
          <h3 className="text-[24px] font-semibold mb-3">
            Thống kê chỉ số thực tập
          </h3>
          <div className="flex justify-end gap-4 mb-3">
            <Select
              className="w-[200px]"
              defaultValue="lucy"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
            <Select
              className="w-[200px]"
              defaultValue="lucy"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
            <Button>Lọc</Button>
            <Button>Hủy bộ lọc</Button>
          </div>

          <div className="mb-3">
            <Table
              pagination={false}
              scroll={{ y: 405 }}
              columns={columns}
              dataSource={dataSource}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Pagination
            total={85}
            showTotal={(total, range) =>
              `${range[0]} - ${range[1]} trên ${total} phần tử`
            }
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </div>
      </div>
    </>
  );
}
