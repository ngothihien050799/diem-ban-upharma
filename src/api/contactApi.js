const BASE_URL = "http://103.35.64.5/GSPUpharmaAPI/";
import axios from "axios";
export const getEmployeeList = async (data) => {
    const res = await axios({
      method: "POST",
      url: BASE_URL + "GSPEmployee/GetEmployeeAllLst",
      data: data,
    });
    return res.data;
  };
