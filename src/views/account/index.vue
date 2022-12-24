<template>
  <div class="taikhoan">
    <div class="taikhoan-hearder d-flex">
      <div class="taikhoan-hearder-search">
        <div class="taikhoan-hearder-search-text">
          <div class="td">
            <input
              class="p-2"
              type="text"
              v-model="search"
              placeholder="Tìm kiếm..."
            />
          </div>
          <div class="td" id="s-cover">
            <button type="text" @click="fetchData">
              <i class="icon search fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <button class="taikhoan-hearder-add btn" @click="handleCreate">
        <el-icon><Avatar /></el-icon>
        <span> Tạo mới tài khoản</span>
      </button>
    </div>
    <div class="taikhoan-table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" label="Stt" width="50" />
        <el-table-column prop="" label="" width="80"
          ><template #default="scope">
            <el-button type="text" @click="handleUpdate(scope.row)">
              <i
                class="fa-solid fa-file-pen"
                style="color: rgb(242, 175, 75)"
              ></i>
            </el-button>
            <el-button type="text" @click="handleSetRole(scope.row)">
              <el-icon><Tools style="color: #606266" /></el-icon>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="FullName" label="Họ tên" min-width="150" />
        <el-table-column prop="PhoneNumber" label="Tài khoản" width="120" />
        <el-table-column prop="Email" label="Email" min-width="180" />
        <el-table-column prop="Role" label="Phân quyền" width="180" />
        <el-table-column label="Trạng thái" width="100">
          <template #default="scope">
            <el-tag :type="scope.row.StatusColor">{{
              scope.row.StatusText
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="" label="" width="50"
          ><template #default="scope" >
            <el-button type="text" @click="handleDelete(scope.row)">
              <Delete
                style="width: 1em; height: 1em; margin-right: 8px; color: red"
              />
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <el-dialog
    v-model="hienthi"
    :title="titleDialog"
    center
    width="600px"
    :close-on-click-modal="false"
  >
    <modal-account
      @save="handleClickSave"
      @close="handleClose"
      :rowData="rowData"
    >
    </modal-account>
  </el-dialog>
</template>

<script>
import { getUserList, updateUser } from "@/api/user";
import { ElNotification } from "element-plus";
import Cookies from "js-cookie";
import ModalAccount from "@/views/account/component/modal-account.vue";
export default {
  components: {
    ModalAccount,
  },
  data() {
    return {
      tableData: [],
      search: "",
      hienthi: false,
      titleDialog: "",
      rowData: "",
    };
  },
  methods: {
    fetchData() {
      const req = {
        Username: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
        PageNumber: 1,
        RowspPage: 100,
        Search: this.search,
      };
      getUserList(req).then((res) => {
        if (res.RespCode == 0) {
          this.tableData = res.Data.map((p) => {
            let obj = p;
            if (p.Status == 1) {
              obj.StatusText = "Mới tạo";
              obj.StatusColor = "";
            } else if (p.Status == 2) {
              obj.StatusColor = "success";
              obj.StatusText = "Đã duyệt";
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

    handleCreate() {
      this.hienthi = true;
      this.titleDialog = "Tạo mới tài khoản";
      this.rowData = null;
    },
    handleClickSave(item) {
      this.hienthi = false; // Dong form lai
      this.fetchData(); //Lam moi lai du lieu
    },
    handleClose() {
      this.hienthi = false;
    },
    handleUpdate(row) {
      this.hienthi = true;
      this.titleDialog = "Cập nhật thông tin tài khoản";
      this.rowData = row;
    },
    handleSetRole(row) {
      this.hienthi = true;
      this.titleDialog = "Phân quyền tài khoản";
      this.rowData = row;
    },
     handleDelete(row) {  
      console.log("Bạn sẽ xóa tài khoản này sao ,,,, ồ nâu nâu");  
      this.$confirm(  
        "Bạn muốn xóa tài khoản " + row.FullName + ". Tiếp tục?",
        "Cảnh báo",
        {
          confirmButtonText: "Xác nhận",
          cancelButtonText: "Hủy",
          type: "warning",
        }    
      )
        .then(() => {
          row.Status = -1;
          const req = {
            UserName: Cookies.get("UserName"),
            Token: Cookies.get("Token"),
            UserInfo: row,
          };
          updateUser(req).then((res) => {
            if (res.RespCode == 0) {
              this.$message({
                type: "success",
                message: "Xóa tài khoản thành công!",
              });
              this.fetchData();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Không có thay đổi",
          });
        });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
<style lang="scss" scoped>
.taikhoan {
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
    &-add {
      margin-left: 10px;
      background: linear-gradient(180deg, #6e9e0e 0%, #097732 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      width: 160px;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
<style lang="scss">
.taikhoan-table {
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
