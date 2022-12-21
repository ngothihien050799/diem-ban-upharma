<template>
  <div class="lich wrapper">
    <div class="lich-search">
      <el-input
        v-model="search"
        placeholder="Tìm kiếm..."
        :suffix-icon="Search"
      />
    </div>
    <div class="lich-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="" width="50" />
        <el-table-column label="Trạng thái" width="100">
          <template #default="scope">
            <el-tag :type="scope.row.StatusColor">{{
              scope.row.StatusText
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="ContractCheck" label="Nhắc lịch" width="180" />
        <el-table-column prop="WarehouseName" label="Điểm bán" width="180" />
        <el-table-column prop="CompanyName" label="Khu vực" width="180" />
        <el-table-column prop="TimeCreate" label="Ngày tạo" width="120" />
        <el-table-column prop="DateNext" label="Hạn thực hiện" width="120" />
        <el-table-column prop="CreaterName" label="Người xử lý" width="150" />
        <el-table-column prop="CreaterName" label="Người tạo" width="150" />
        <el-table-column prop="Note" label="Ghi chú" min-width="200" />
        <el-table-column prop="" label="" width="60"
          ><Delete
            style="width: 1em; height: 1em; margin-right: 8px; color: red"
          />
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { Search } from "@element-plus/icons-vue";
</script>

<script>
import { getCalenderList } from "@/api/calenderApi";
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
      getCalenderList(req).then((res) => {
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
.lich {
  font-family: "Roboto", sans-serif;
  margin: 15px;
  &-search {
    width: 230px;
    margin-bottom: 10px;
  }
}
</style>
<style lang="scss">
.lich-table {
  .el-table__header-wrapper {
    th {
      background-color: #1d974a !important;
      border-bottom: none !important;
      color: white;
    }
  }
}
</style>
