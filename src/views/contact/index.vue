<template>
  <div class="wrapper contact">
    <div class="contact-hearder d-flex">
      <div class="contact-hearder-search">
        <form method="get" action="">
          <div class="contact-hearder-search-text">
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

      <button class="contact-hearder-add btn" @click="handleCreateLienhe">
        <font-awesome-icon icon="fa-regular fa-file-lines" />
        <span> Tạo mới liên hệ</span>
      </button>
    </div>

    <el-table
      class="contact-table"
      stripe
      :data="tableData"
      style="width: 100%"
    >
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
      <el-table-column prop="FullName" label="Họ tên" min-width="160" />
      <el-table-column prop="PhoneNumber" label="SĐT" width="120" />
      <el-table-column prop="Email" label="Email" min-width="180" />
      <el-table-column prop="Specialize" label="Chuyên môn" width="150" />
      <el-table-column prop="Position" label="Chức vụ" width="100" />
      <el-table-column prop="CompanyName" label="Khu vực" min-width="140" />
      <el-table-column prop="" label="" width="60"
        ><Delete
          style="width: 1em; height: 1em; margin-right: 8px; color: red"
        />
      </el-table-column>
    </el-table>
  </div>
  <el-dialog
    v-model="centerDialogVisible"
    title="Tạo mới hồ sơ Liên hệ"
    center
    width="900px"
    :close-on-click-modal="false"
  >
    <modal-contact />
  </el-dialog>
</template>

<script>
import { getEmployeeList } from "@/api/contactApi.js";
import { ElNotification } from "element-plus";
import Cookies from "js-cookie";
import ModalContact from "./component/modal-contact.vue";
export default {
  components: {
    ModalContact,
  },
  data() {
    return {
      tableData: [],
      centerDialogVisible: false,
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
      console.log(req);
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
    handleCreateLienhe() {
      this.centerDialogVisible = true;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.contact {
  font-family: "Roboto", sans-serif;
  margin: 15px;
  &-hearder {
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
.file {
  text-align: center !important;
}
</style>
<style lang="scss">
.contact-table {
  .el-table__header-wrapper {
    th {
      background-color: #1d974a !important;
      border-bottom: none !important;
      color: white;
      font-size: 16px;
    }
  }
}
</style>
