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
            <button>
              <i class="icon search fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <button class="taikhoan-hearder-add btn">
        <el-icon><Avatar /></el-icon>
        <span> Tạo mới tài khoản</span>
      </button>
    </div>
    <div class="taikhoan-table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" label="Stt" width="60" />
        <el-table-column prop="" label="" width="80"
          ><template #default="scope">
            <el-button type="text">
              <i
                class="fa-solid fa-file-pen"
                style="color: rgb(242, 175, 75)"
              ></i>
            </el-button>
            <el-button type="text">
              <el-icon><Tools style="color: black" /></el-icon>
            </el-button>
          </template>
        </el-table-column>

        <el-table-column prop="date" label="" width="50" />
        <el-table-column prop="FullName" label="Họ tên" min-width="180" />
        <el-table-column prop="PhoneNumber" label="Tài khoản" width="180" />
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
          ><template #default="scope">
            <el-button type="text">
              <Delete
                style="width: 1em; height: 1em; margin-right: 8px; color: red"
              />
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getUserList } from "@/api/user";
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
        PageNumber: 1,
        RowspPage: 100,
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
