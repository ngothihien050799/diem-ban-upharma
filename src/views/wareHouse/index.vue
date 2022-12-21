<template>
  <div class="diemban wrapper">
    <div class="diemban-search">
      <el-input
        v-model="search"
        placeholder="Tìm kiếm..."
        :suffix-icon="Search"
      />
    </div>
    <div class="diemban-table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" label="" width="40" />
        <el-table-column prop="" label="" width="23"
          ><i
            data-v-10a12202=""
            class="fa-solid fa-file"
            style="color: rgb(64, 158, 255)"
          ></i>
        </el-table-column>
        <el-table-column prop="" label="" width="40"
          ><i
            data-v-10a12202=""
            class="fa-solid fa-calendar-days"
            style="color: red"
          ></i>
        </el-table-column>
        <el-table-column prop="Area" label="Mã số" width="100" sortable />
        <el-table-column
          prop="WarehouseName"
          label="Tên điểm bán"
          width="200"
        />
        <el-table-column prop="CompanyName" label="Khu vực" width="180" />
        <el-table-column prop="Address" label="Địa chỉ" min-width="200" />
        <el-table-column
          class="time"
          prop="TimeModify"
          label="Ngày mở"
          width="130"
          sortable
        />
        <el-table-column prop="StoreType" label="Quy mô" width="130" />
        <el-table-column prop="TypeGSP" label="Đánh giá" width="130" />

        <el-table-column prop="CreateName" label="Người nhập HS" width="180" />

        <el-table-column label="Trạng thái" width="120">
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
<script setup>
import { Search } from "@element-plus/icons-vue";
</script>
<script>
import { getWareHouseList } from "@/api/wareHouseApi";
import Cookies from "js-cookie";
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      search: "",
      tableData: [],
    };
  },
  methods: {
    fetchData() {
      const req = {
        Username: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
        PageNumber: 1,
        RowspPage: 100,
        Search: "",
      };
      getWareHouseList(req).then((res) => {
        if (res.RespCode == 0) {
          this.tableData = res.Data.map((p) => {
            let obj = p;
            if (p.Status == 1) {
              obj.StatusText = "Mới tạo";
              obj.StatusColor = "";
            } else if (p.Status == 2) {
              obj.StatusColor = "warning";
              obj.StatusText = "Đang xử lý";
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
.diemban {
  font-family: "Roboto", sans-serif;
  margin: 15px;
  &-search {
    width: 230px;
    margin-bottom: 10px;
  }
  &-table {
    .time {
      margin-left: 20px;
    }
  }
}
</style>
<style lang="scss">
.diemban-table {
  .el-table__header-wrapper {
    th {
      background-color: #1d974a !important;
      border-bottom: none !important;
      color: white;
    }
  }
}
</style>
