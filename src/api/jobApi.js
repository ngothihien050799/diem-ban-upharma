const BASE_URL = "https://upharma.vn/DiemBanAPI/"; // Link kết nối API

import axios from "axios";
//Khởi tạo API đăng nhập
// async await: xử lý bất đồng bộ

//
export const getJobList = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "GSPDocumentJob/GetDocumentJobByEm",
    data: data,
  });
  return res.data;
};