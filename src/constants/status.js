// Trạng thái học tập của sinh viên
export const StudentStatus = {
  STYDING: "ĐANG HỌC",
  DROPOUT: "BỎ HỌC",
  GRADUATED: "TỐT NGHIỆP",
  GRADUATEDEARLY: "TỐT NGHIỆP SỚM",
  REVERSED: "BẢO LƯU",
  SUSPENDED: "ĐÌNH CHỈ",
};

// Trạng thái điểm danh của sinh viên
export const StatusAttendance = [
  { status: "ĐI HỌC ĐẦY ĐỦ", value: 4 },
  { status: "NGHỈ KHÔNG PHÉP", value: 0 },
  { status: "NGHỈ CÓ PHÉP", value: 1 },
  { status: "NGHỈ NỬA BUỔI", value: 2 },
  { status: "ĐI HỌC MUỘN", value: 3 },
];
