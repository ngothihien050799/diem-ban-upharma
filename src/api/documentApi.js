const BASE_URL = "http://103.35.64.5/GSPUpharmaAPI/"; // Link kết nối API

import axios from "axios";
//Khởi tạo API đăng nhập
// async await: xử lý bất đồng bộ

//
export const getDocumentList = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "GSPDocument/GetGSPDocumentLst",
    data: data,
  });
  return res.data;
};
//
export const getDocumentInfoByID = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "GSPDocument/GSPGetGSPDocumentInfoByID",
    data: data,
  });
  return res.data;
};
