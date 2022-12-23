const BASE_URL = "https://upharma.vn/DiemBanAPI/";
import axios from "axios";
export const getEmployeeList = async (data) => {
    const res = await axios({
      method: "POST",
      url: BASE_URL + "GSPEmployee/GetEmployeeAllLst",
      data: data,
    });
    return res.data;
  };
export const addEmployeeList = async (data) => {
    const res = await axios({
      method: "POST",
      url: BASE_URL + "GSPEmployee/AddEmployeeInfo",
      data: data,
    });
    return res.data;
  };
export const updateEmployeeList = async (data) => {
    const res = await axios({
      method: "POST",
      url: BASE_URL + "GSPEmployee/UpdateEmployeeInfo",
      data: data,
    });
    return res.data;
  };
// ☻