const BASE_URL = "http://103.35.64.5/GSPUpharmaAPI/"; // Link kết nối API

import axios from "axios";
//Khởi tạo API đăng nhập
// async await: xử lý bất đồng bộ

//
export const getCompanyList = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "GSPCompany/GetCompanyLst",
    data: data,
  });
  return res.data;
};