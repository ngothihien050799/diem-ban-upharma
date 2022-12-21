const BASE_URL = "https://upharma.vn/DiemBanAPI/"; // Link kết nối API

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

export const addAreaApi = async(area) => {
const res = await axios({
  method: "POST",
  url: BASE_URL + "GSPCompany/AddCompanyInfo",
  data: area,
});
return res.data;
}