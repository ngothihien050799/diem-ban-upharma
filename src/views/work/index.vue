<template>
  <div class="congviec wraper">
    <div class="congviec-search">
      <el-input
        v-model="search"
        placeholder="Tìm kiếm..."
        :suffix-icon="Search"
      />
    </div>
    <div class="congviec-table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" width="40" />
        <!-- <el-table-column prop="QuantityCheck" label="Vai trò" width="180" /> -->
        <el-table-column label="Vai trò" width="140">
          <template #default="scope">
            <el-button :type="scope.row.QuantityCheckColor">{{
              scope.row.QuantityCheckText
            }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="JobName" label="Đầu việc" min-width="180" />
        <el-table-column prop="StepName" label="Giai đoạn" width="220" />
        <el-table-column prop="ProcedureName" label="Hồ sơ" min-width="180" />
        <el-table-column prop="WarehouseName" label="Điểm bán" width="220" />
        <el-table-column prop="QuotaTime" class="Time" label="Thời hạn (ngày)" width="180" />
        <el-table-column prop="date" label="Bắt đầu" width="120" />
        <el-table-column prop="name" label="Hoàn thành" width="120" />
         <el-table-column label="Trạng thái" width="140">
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
import { getJobList} from "@/api/jobApi";
import { ElNotification } from "element-plus";
import Cookies from "js-cookie";
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
        EmployeeCode: Cookies.get("EmployeeCode"),
        // Search: "",
      };
      getJobList(req).then((res) => {
        if (res.RespCode == 0) {
          this.tableData = res.DocumentJobLst.map((p) => {
            let obj = p;
            if (p.Status == 2) {
              obj.StatusText = "Đã báo cáo";
              obj.StatusColor = "success";
            } else if (p.Status == 1) {
              obj.StatusColor = "warning";
              obj.StatusText = "Chưa thực hiện";
            } else {
              obj.StatusText = "Khác";
              obj.StatusColor = "info";
            }
            return obj;
          });
          
          // console.log(this.tableData);
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
.congviec {
  font-family: "Roboto", sans-serif;
  margin: 15px;
  &-search {
    width: 230px;
    margin-bottom: 10px;
  }
}
</style>
<style lang="scss">
.congviec-table {
  .el-table__header-wrapper {
    th {
      background-color: #1d974a !important;
      border-bottom: none !important;
      color: white;
    }
  }
}
</style>
