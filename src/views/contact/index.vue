<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="index" label="STT" width="60" />
    <el-table-column prop="" label="" width="40"
      ><i
        data-v-10a12202=""
        class="fa-solid fa-file"
        style="color: rgb(64, 158, 255)"
      ></i>
    </el-table-column>

    <el-table-column label="Trạng thái" width="100">
      <template #default="scope">
        <el-tag :type="scope.row.StatusColor">{{
          scope.row.StatusText
        }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="EmployeeCode" label="Mã NS" width="100" />
    <el-table-column prop="FullName" label="Họ tên" width="250" />
    <el-table-column prop="PhoneNumber" label="SĐT" width="120" />
    <el-table-column prop="Email" label="Email" width="300" />
    <el-table-column prop="Specialize" label="Chuyên môn" width="150" />
    <el-table-column prop="Position" label="Chức vụ" width="100" />
    <el-table-column prop="CompanyName" label="Khu vực" width="180" />
    <el-table-column prop="" label=""
      ><Delete style="width: 1em; height: 1em; margin-right: 8px; color: red" />
    </el-table-column>
  </el-table>
</template>

<script>
import { getEmployeeList } from "@/api/contactApi.js";
import { ElNotification } from "element-plus";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    fetchData() {
      const req = {
       Username: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
        Search: "",
        PageNumber: 1,
        RowspPage: 100,
       
      }; console.log(req);
      getEmployeeList(req).then((res) => {
        console.log(res);
        if (res.RespCode == 0) {
          this.tableData = res.EmployeeLst.map((p) => {
            let obj = p;
            if (p.Status == 1) {
              obj.StatusText = "Đang làm";
              obj.StatusColor = "";
            } else if (p.Status == 0) {
              obj.StatusColor = "warning";
              obj.StatusText = "Đã nghỉ";
            } else {
              obj.StatusText = "Khác";
              obj.StatusColor = "info";
            }
            return obj;
          });
        } else {
          ElNotification({
            title: "Xảy ra lỗi",
            message: res.RespText,
            type: "error",
          });
        }
      });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.file {
  text-align: center !important;
}
</style>
