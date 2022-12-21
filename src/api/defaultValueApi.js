const BASE_URL = "https://upharma.vn/DiemBanAPI/";
import axios from "axios";
export const getCityList = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "Other/GetCity",
    data: data,
  });
  return res.data;
};
export const getDistrictList = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "Other/GetDistrict",
    data: data,
  });
  return res.data;
};
export const getCommuneList = async (data) => {
  const res = await axios({
    method: "POST",
    url: BASE_URL + "Other/GetCommune",
    data: data,
  });
  return res.data;
};
