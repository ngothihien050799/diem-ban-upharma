<template>
  <div class="wrapper">
    <div class="khuvuc-hearder d-flex">
      <div class="khuvuc-hearder-search">
        <div class="khuvuc-hearder-search-text">
          <div class="td">
            <input
              class="p-2"
              type="text"
              v-model="search"
              placeholder="Tìm kiếm..."
            />
          </div>
          <div class="td" id="s-cover">
            <button @click="fetchData">
              <i class="icon search fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>

      <button class="khuvuc-hearder-add btn" @click="handleCreate">
        <font-awesome-icon icon="fa-regular fa-file-lines" />
        <span> Tạo mới khu vực</span>
      </button>
    </div>
    <div class="khuvuc-table">
      <el-table
        class="khuvuc-table-custom"
        :data="tableData"
        stripe
        style="width: 100%"
      >
        <el-table-column type="index" label="" width="40" />

        <el-table-column prop="" label="" width="80">
          <template #default="scope" class="d-flex">
            <el-button type="text">
              <router-link :to="'/thong-tin-khu-vuc'">
                <i
                  class="fa-solid fa-file"
                  style="color: rgb(64, 158, 255)"
                ></i> </router-link
            ></el-button>
            <el-button type="text" @click="handleUpdate(scope.row)">
              <i
                class="fa-solid fa-file-pen"
                style="color: rgb(242, 175, 75)"
              ></i
            ></el-button>
          </template>
        </el-table-column>

        <el-table-column
          prop="CompanyName"
          label="Tên Khu vực"
          min-width="150"
        />
        <el-table-column
          prop="NumberRegister"
          sortable
          label="Mã số"
          width="100"
        />
        <el-table-column prop="CompanyType" label="Loại Khu vực" width="150" />
        <el-table-column
          prop="Delegate"
          label="Người đại diện"
          min-width="120"
        />
        <el-table-column prop="Address" label="Địa chỉ" min-width="230" />
        <el-table-column prop="Size" label="Quy mô" width="180" />
        <el-table-column label="Thời gian tạo" width="120">
          <template #default="scope">
            <div v-if="scope.row.TimeCreate">
              {{ Date.parse(scope.row.TimeCreate).toString("dd/MM/yyyy") }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Trạng thái" width="150">
          <template #default="scope">
            <el-tag :type="scope.row.StatusColor">{{
              scope.row.StatusText
            }}</el-tag>
          </template>
        </el-table-column>
        <!--  -->
        <el-table-column prop="" label="" width="60">
          <template #default="scope">
            <el-button type="text" @click="handleDelete(scope.row)">
              <Delete
                style="width: 1em; height: 1em; margin-right: 8px; color: red"
              />
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog
        v-model="centerDialogVisible"
        :title="titleDialog"
        center
        width="900px"
        :close-on-click-modal="false"
      >
        <modal-info
          @save="handleClickSave"
          @close="handleClose"
          :cityList="cityList"
          :rowData="rowData"
        ></modal-info>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getCompanyList, upDateAreaApi } from "@/api/areaApi.js";
import { getCityList } from "@/api/defaultValueApi";
import { ElNotification } from "element-plus";
import ModalInfo from "./component/modal-info.vue";
import Cookies from "js-cookie";
export default {
  components: { ModalInfo },
  data() {
    return {
      tableData: [],
      centerDialogVisible: false,
      cityList: [],
      rowData: "",
      titleDialog: "",
      search: "",
    };
  },
  methods: {
    getCityLst() {
      let req = {
        Username: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
      };
      getCityList(req).then((res) => {
        if (res.RespCode == 0) {
          this.cityList = res.Data;
          // console.log(this.cityList);
        }
      });
    },
    handleCreate() {
      this.centerDialogVisible = true;
      this.titleDialog = "Tạo mới hồ sơ khu vực";
      this.rowData = null;
    },
    //Sự kiện khi tạo thành công
    handleClickSave(item) {
      // this.tableData.push(item);
      this.centerDialogVisible = false; // Dong form lai
      this.fetchData(); //Lam moi lai du lieu
    },
    handleClose() {
      this.centerDialogVisible = false;
    },
    handleUpdate(row) {
      this.centerDialogVisible = true;
      this.titleDialog = "Cập nhật hồ sơ khu vực";
      this.rowData = row;
      // console.log(row);
    },
    handleDelete(row) {
      this.$confirm(
        "Bạn muốn Dừng hoạt động " + row.CompanyName + ". Tiếp tục?",
        "Cảnh báo",
        {
          confirmButtonText: "Xác nhận",
          cancelButtonText: "Hủy",
          type: "warning",
        }
      )
        .then(() => {
          row.Status = 0;
          const req = {
            UserName: Cookies.get("UserName"),
            Token: Cookies.get("Token"),
            CompanyInfo: row,
          };
          upDateAreaApi(req).then((res) => {
            if (res.RespCode == 0) {
              this.$message({
                type: "success",
                message: "Dừng khu vực thành công!",
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
    fetchData() {
      const req = {
        Username: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
        Search: this.search,
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
              obj.StatusText = "Đang hoạt động";
              obj.StatusColor = "success";
            } else if (p.Status == 0) {
              obj.StatusColor = "danger";
              obj.StatusText = "Dừng hoạt động";
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
    this.getCityLst();
    
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
<style lang="scss">
.khuvuc-table-custom {
  .el-table__header-wrapper {
    th {
      background: #1d974a !important;
      border-bottom: none !important;
      color: white;
    }
  }
}
</style>
