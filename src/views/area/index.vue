<template>
  <div class="wrapper">
    <div class="khuvuc-hearder d-flex">
      <div class="khuvuc-hearder-search">
        <form method="get" action="">
          <div class="khuvuc-hearder-search-text">
            <div class="td">
              <input type="text" placeholder=" Tìm kiếm..." required />
            </div>
            <div class="td" id="s-cover">
              <button type="submit">
                <i class="icon search fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <button class="khuvuc-hearder-add btn">
        <font-awesome-icon icon="fa-regular fa-file-lines" />
        <span> Tạo mới khu vực</span>
      </button>
    </div>
    <div class="khuvuc-table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" label="" width="40" />
        <el-table-column prop="" label="" width="40"
          ><i
            data-v-90c8b392=""
            class="fa-solid fa-file-pen"
            style="color: rgb(242, 175, 75)"
          ></i>
        </el-table-column>
        <el-table-column prop="CompanyName" label="Tên Khu vực" width="300" />
        <el-table-column prop="CompanyType" label="Loại Khu vực" width="150" />
        <el-table-column prop="Delegate" label="Người đại diện" width="180" />
        <el-table-column prop="Size" label="Quy mô" width="180" />
        <el-table-column prop="Commune" label="Địa chỉ" width="230" />
        <el-table-column prop="TimeCreate" label="Thời gian tạo" width="200" />
        <el-table-column label="Trạng thái">
          <template #default="scope">
            <el-tag :type="scope.row.StatusColor">{{
              scope.row.StatusText
            }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getCompanyList } from "@/api/areaApi.js";
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
      };
      getCompanyList(req).then((res) => {
        if (res.RespCode == 0) {
          //this.tableData = res.Data;
          //console.log(this.tableData);

          //Sử dụng map tạo ra mảng mới để convert dữ liệu nhận được (thêm filter trạng thái)
          this.tableData = res.CompanyLst.map((p) => {
            let obj = p;
            if (p.Status == 1) {
              obj.StatusText = "Mới tạo";
              obj.StatusColor = "";
            } else if (p.Status == 0) {
              obj.StatusColor = "danger";
              obj.StatusText = "Hủy";
            } else {
              obj.StatusText = "Khác";
              obj.StatusColor = "info";
            }
            return obj;
          });
          console.log(this.tableData);
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
.wrapper {
  font-family: "Roboto", sans-serif;
  margin: 15px;
  .khuvuc-hearder {
    margin: 15px 0px;
    &-search {
      border: 0.5px solid #909d8d;
      border-radius: 5px;
      overflow: hidden;

      &-text {
        display: flex;
        input {
          width: 250px;
          height: 35px;
          border: none;
        }
        button {
          height: 35px;
          background: #d8e0dd;
          border: none;
          width: 50px;
        }
      }
    }
    .icon {
      border: #1d974a;
    }
    &-add {
      margin-left: 10px;
      background: linear-gradient(180deg, #6e9e0e 0%, #097732 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      width: 150px;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
