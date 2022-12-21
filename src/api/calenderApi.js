const BASE_URL = "https://upharma.vn/DiemBanAPI/"; // Link kết nối API

import axios from "axios";
//Khởi tạo API đăng nhập
// async await: xử lý bất đồng bộ

//
export const getCalenderList = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "GSPScheduleCheck/GetScheduleCheckLst",
    data: data,
  });
  return res.data;
};