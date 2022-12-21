<template>
  <div class="wrapper">
    <div class="hoso-hearder d-flex">
      <div class="hoso-hearder-search">
        <form method="get" action="">
          <div class="hoso-hearder-search-text">
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

      <button class="hoso-hearder-add btn" @click="handleCreateHoso">
        <font-awesome-icon icon="fa-regular fa-file-lines" />
        <span> Tạo mới hồ sơ</span>
      </button>
    </div>

    <div class="hoso-table">
      <el-table
        class="hoso-table-custom"
        :data="tableData"
        stripe
        style="width: 100%"
      >
        <el-table-column type="index" label="STT" width="60" />

        <el-table-column prop="" label="" width="40">
          <template #default="scope">
            <router-link
              :to="'/thong-tin-ho-so/' + scope.row.DocumentID.replace('/', '-')"
            >
              <i class="fa-solid fa-file" style="color: rgb(64, 158, 255)"></i>
            </router-link>
          </template>
        </el-table-column>

        <el-table-column prop="DocName" label="Hồ sơ" min-width="200" />
        <el-table-column
          prop="WarehouseName"
          label="Điểm bán"
          min-width="160"
        />
        <el-table-column
          prop="CompanyName"
          label="Tên Khu vực"
          min-width="160"
        />
        <el-table-column prop="DateRecept" label="Ngày tiếp nhận" width="180" />
        <el-table-column prop="EmployeeName" label="Người xử lý" width="200" />
        <el-table-column label="Trạng thái" width="140">
          <template #default="scope">
            <el-tag :type="scope.row.StatusColor">{{
              scope.row.StatusText
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="Note" label="Ghi chú" width="100" />
        <el-table-column prop="LinkFile" label="Tệp đính kèm" width="120" />
      </el-table>
    </div>
  </div>
  <el-dialog
    v-model="centerDialogVisible"
    title="Tạo mới hồ sơ"
    width="55%"
    center
    :close-on-click-modal="false"
  >
    <ModalHoso />
  </el-dialog>
</template>

<script>
import { getDocumentList } from "@/api/documentApi.js";
import { ElNotification } from "element-plus";
import ModalHoso from "./component/modalHoso.vue";
import Cookies from "js-cookie";
export default {
  components: {
    ModalHoso,
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
        PageNumber: 1,
        RowspPage: 100,
        Search: "",
      };
      getDocumentList(req).then((res) => {
        if (res.RespCode == 0) {
          //this.tableData = res.Data;
          //console.log(this.tableData);

          //Sử dụng map tạo ra mảng mới để convert dữ liệu nhận được (thêm filter trạng thái)
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
    handleCreateHoso() {
      this.centerDialogVisible = true;
    },
  },
  created() {
    this.fetchData();
  },
  // filters: {
  //   toStatus(value) {
  //     if (value == 1) return "Mới tạo";
  //     else if (value ==2) return "Đang xử lý";
  //     else return "Khác";
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.wrapper {
  font-family: "Roboto", sans-serif;
  margin: 15px;
  .hoso-hearder {
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
      //   width: 250px;
      //   height: 35px;
      // }
      // &-input {
      //   border: 0.2px solid #909d8d;
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
  .tab {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 50px;
    align-items: center;
    &-menu {
      margin-left: 30px;
      &-item {
        text-decoration: none;
        margin-right: 30px;
        color: #797575;
        font-weight: 600;
        font-size: 14px;
        line-height: 50px;
      }
    }
  }
}
</style>
<style lang="scss">
.hoso-table-custom {
  .el-table__header-wrapper {
    th {
      background-color: #1d974a !important;
      border-bottom: none !important;
      color: white;
    }
  }
}
</style>
