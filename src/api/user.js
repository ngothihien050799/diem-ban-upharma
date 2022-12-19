const BASE_URL = "https://upharma.vn/DiemBanAPI/gi"; // Link kết nối API
 
import axios from "axios";
//Khởi tạo API đăng nhập
// async await: xử lý bất đồng bộ

export const userLogin = async (data) => {
    //Khởi tạo res để nhận dữ liệu trả về khi gọi tới API
    const res = await axios({
        method: "POST", //Phương thức của API là gì POST GEt PUT Delete
        url: BASE_URL+"User/GSPLogin", //Đường dẫn API gọi tới
        data:data //Dữ liệu request đẩy lên
    })
    return res.data //Lấy data từ API trả về
}
