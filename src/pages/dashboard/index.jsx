import React from "react";
import { CiLock } from "react-icons/ci";
import { FaAward, FaBookOpen } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { IoTrendingUp } from "react-icons/io5";

export default function Dashboard() {
  return (
    <>
      <main className="overflow-y-auto">
        {/* Dashboard Content */}
        <div className="">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Tổng quan hệ thống đào tạo
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-gray-500 text-sm font-medium">
                Tổng số học viên
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">5,234</p>
              <div className="flex items-center mt-2">
                <FiTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm font-medium">
                  12% so với tháng trước
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-gray-500 text-sm font-medium">
                Khóa học đang hoạt động
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">78</p>
              <div className="flex items-center mt-2">
                <FiTrendingUp className="w-4 h-4 text-blue-500 mr-1" />
                <span className="text-blue-500 text-sm font-medium">
                  5 khóa mới trong tuần này
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-gray-500 text-sm font-medium">
                Tổng số giảng viên
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">112</p>
              <div className="flex items-center mt-2">
                <FiTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm font-medium">
                  8% so với quý trước
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-gray-500 text-sm font-medium">
                Tỷ lệ hoàn thành khóa học
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">82%</p>
              <div className="flex items-center mt-2">
                <FiTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm font-medium">
                  3% so với tháng trước
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Information Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Phân bố học viên theo hệ đào tạo
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Đại học chính quy</span>
                  <span className="font-semibold">2,450 (46.8%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "46.8%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cao đẳng</span>
                  <span className="font-semibold">1,320 (25.2%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: "25.2%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Đào tạo ngắn hạn</span>
                  <span className="font-semibold">980 (18.7%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{ width: "18.7%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Đào tạo từ xa</span>
                  <span className="font-semibold">484 (9.3%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: "9.3%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Top 5 khóa học phổ biến
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaAward className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-800">
                      Lập trình Web Full-stack
                    </span>
                  </div>
                  <span className="text-gray-600">1,245 học viên</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaAward className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-800">Data Science cơ bản</span>
                  </div>
                  <span className="text-gray-600">980 học viên</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaAward className="w-5 h-5 text-yellow-700 mr-3" />
                    <span className="text-gray-800">UX/UI Design</span>
                  </div>
                  <span className="text-gray-600">875 học viên</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaBookOpen className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-800">Machine Learning</span>
                  </div>
                  <span className="text-gray-600">760 học viên</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaBookOpen className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-800">
                      DevOps & Cloud Computing
                    </span>
                  </div>
                  <span className="text-gray-600">650 học viên</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Information Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Thống kê tài chính
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Doanh thu tháng này</span>
                  <span className="font-semibold text-green-600">
                    2,450,000,000 VNĐ
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">So với tháng trước</span>
                  <div className="flex items-center text-green-500">
                    <IoTrendingUp className="w-4 h-4 mr-1" />
                    <span>15.3%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Chi phí vận hành</span>
                  <span className="font-semibold text-red-600">
                    1,320,000,000 VNĐ
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Lợi nhuận</span>
                  <span className="font-semibold text-blue-600">
                    1,130,000,000 VNĐ
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Hoạt động gần đây
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CiLock className="w-5 h-5 text-blue-500 mr-3" />
                  <div>
                    <p className="text-gray-800">
                      Nguyễn Văn A đã hoàn thành khóa học "React Nâng Cao"
                    </p>
                    <p className="text-gray-500 text-sm">2 giờ trước</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <CiLock className="w-5 h-5 text-green-500 mr-3" />
                  <div>
                    <p className="text-gray-800">
                      Khóa học mới "AI trong Kinh doanh" đã được tạo
                    </p>
                    <p className="text-gray-500 text-sm">5 giờ trước</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <CiLock className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <p className="text-gray-800">
                      Cập nhật giáo trình cho khóa "JavaScript ES6+"
                    </p>
                    <p className="text-gray-500 text-sm">Hôm qua</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <CiLock className="w-5 h-5 text-purple-500 mr-3" />
                  <div>
                    <p className="text-gray-800">
                      Thêm giảng viên mới: Trần Thị B - Chuyên gia Python
                    </p>
                    <p className="text-gray-500 text-sm">2 ngày trước</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
