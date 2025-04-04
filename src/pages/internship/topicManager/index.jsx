import { Button, Input, Pagination, Select, Table, Tag } from "antd";
import { CiFilter } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
// import FormEmployee from "./FormEmployee";
import { useState } from "react";
import { useFetchData } from "@/hooks/useFetchData";

export default function TopicManager() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [pageSize, setPageSize] = useState(10); // Số lượng bản ghi trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại

  const columns = [
    {
      title: "Tên đề tài",
      dataIndex: "name",
    },
    {
      title: "Loại đề tài",
      dataIndex: "gender",
    },
    {
      title: "Học kỳ",
      dataIndex: "dateOfBirth",
    },
    {
      title: "Chức năng",
      dataIndex: "option",
      render: (_, record) => (
        <div className="flex justify-center gap-2 text-blue-600 hover:text-blue-500 transition-all cursor-pointer items-center">
          <span>Sửa</span>
        </div>
      ),
    },
  ];

  const formatData = (employees) => {
    return employees.map((employee) => ({
      key: employee.id,
      image: (
        <div className="flex items-center justify-center">
          <img src={employee.avatar} alt="Avatar" width={30} height={30} />
        </div>
      ),
      name: employee.fullName,
      gender:
        employee.gender === 0 ? "Nam" : employee.gender === 1 ? "Nữ" : "Khác",
      dateOfBirth: employee.createdAt.split("T")[0],
      phoneNumber: employee.phone,
      address: employee.address,
      roles: employee.roles.map((role) => (
        <Tag key={role.id} color="blue">
          {role.name}
        </Tag>
      )),
    }));
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    getCheckboxProps: (record) => ({
      name: record.name,
    }),
  };

  const { data, loading, error } = useFetchData("users");

  // Nếu có dữ liệu, format nó
  const formattedData = data ? formatData(data.data) : [];

  const paginatedData = formattedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  // Mở form
  const handleShowForm = () => {
    setIsShowForm(true);
  };

  // Đóng form
  const handleCloseForm = () => {
    setIsShowForm(false);
  };

  return (
    <>
      {/* {isShowForm && <FormEmployee onClose={handleCloseForm} />} */}

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between max-w-full">
          <h3 className="text-[24px] font-semibold">Đề tài</h3>
          <Button className="h-[32px]" onClick={handleShowForm} type="primary">
            Thêm mới đề tài
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Select
              defaultValue="lucy"
              style={{
                width: 200,
              }}
              options={[
                {
                  value: "lucy",
                  label: "Tất cả phòng ban",
                },
              ]}
            />

            <div className="size-[32px] border rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all">
              <CiFilter size={20} />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative f  lex items-center">
              <Input
                placeholder="Tìm kiếm đề tài theo tên"
                className="h-[32px] w-[300px] pr-10"
              />
              <IoSearchOutline
                size={20}
                className="absolute right-3 bg-white text-gray-700"
              />
            </div>
            <TfiReload
              title="Làm mới dữ liệu"
              size={20}
              className="text-gray-500 hover:text-gray-700 cursor-pointer transition-all"
            />
          </div>
        </div>

        {/* Danh sách nhân viên */}
        <Table
          loading={loading}
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={paginatedData}
          pagination={false}
        />

        {/* Phân trang */}
        <div className="flex items-center justify-end">
          <Pagination
            total={formattedData.length}
            current={currentPage}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger
            pageSizeOptions={["10", "20", "50", "100"]}
            showTotal={(total) => (
              <>
                <p>
                  Tổng số bản ghi: <b>{total}</b>
                </p>
              </>
            )}
          />
        </div>
      </div>
    </>
  );
}
