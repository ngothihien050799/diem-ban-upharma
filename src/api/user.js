const BASE_URL = "https://upharma.vn/DiemBanAPI/"; // Link kết nối API

import axios from "axios";
//Khởi tạo API đăng nhập
// async await: xử lý bất đồng bộ

export const userLogin = async (data) => {
  //Khởi tạo res để nhận dữ liệu trả về khi gọi tới API
  const res = await axios({
    method: "POST", //Phương thức của API là gì POST GEt PUT Delete
    url: BASE_URL + "User/GSPLogin", //Đường dẫn API gọi tới
    data: data, //Dữ liệu request đẩy lên
  });
  return res.data; //Lấy data từ API trả về
};
export const getUserList = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "User/GetUserLstAll",
    data: data,
  });
  return res.data;
};
export const addUser = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "User/GSPRegister",
    data: data,
  });
  return res.data;
};
export const updateUser = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "User/UpdateUserInfo",
    data: data,
  });
  return res.data;
};
export const SetUserRole = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "User/SetUserRole",
    data: data,
  });
  return res.data;
};
