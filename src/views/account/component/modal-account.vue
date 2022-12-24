<template>
  <el-form :model="form" label-width="100px" label-position="left">
    <el-form-item label="Họ tên ">
      <el-input v-model="form.FullName" placeholder="Nhập họ tên" />
    </el-form-item>
    <el-form-item label="Số điện thoại">
      <el-input v-model="form.PhoneNumber" placeholder="Nhập số điện thoại" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="form.Email" placeholder="Nhập email" />
    </el-form-item>
  </el-form>

  <div class="dialog-footer">
    <el-button @click="closeForm">Hủy</el-button>
    <el-button type="primary" @click="Submit"> Xác nhận </el-button>
  </div>
</template>

<script>
import { addUser, updateUser } from "@/api/user";
import { ElNotification } from "element-plus";
import Cookies from "js-cookie";
export default {
  props: {
    rowData: Object,
  },
  data() {
    return {
      form: {
        UserName: "",
        EmployeeCode: "",
        Password: "",
        Email: "",
        FullName: "",
        PhoneNumber: "",
        TimeCreate: "",
        Role: "",
        Status: "",
        Sex: "",
        IsPrinter: "",
      },
    };
  },
  methods: {
    Submit() {
      const req = {
        UserName: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
        UserInfo: this.form,
        Email: this.form.Email,
        Password: this.form.Password,
        FullName: this.form.FullName,
        PhoneNumber: this.form.PhoneNumber,
      };
      if (!this.rowData) {
        addUser(req).then((res) => {
          if (res.RespCode == 0) {
            ElNotification({
              title: "Thành công",
              message:
                "Tạo mới tài khoản thành công. Vui lòng kiểm tra email để lấy mật khẩu.",
              type: "success",
            });
            this.$emit("save", this.form);
          } else {
            ElNotification({
              title: "Xảy ra lỗi",
              message: res.RespText,
              type: "error",
            });
          }
        });
      } else {
        updateUser(req).then((res) => {
          //RespCode = 0 : tạo mới thành công
          if (res.RespCode == 0) {
            ElNotification({
              title: "Thành công",
              message: "Cập nhật tài khoản thành công!",
              type: "success",
            });
            //Thành công thì báo ra thằng cha để đóng form lại
            this.$emit("save", this.form);
            // console.log(this.form);
          } else {
            ElNotification({
              title: "Xảy ra lỗi",
              message: res.RespText,
              type: "error",
            });
          }
        });
      }
    },
    initData() {
      if (this.rowData) {
        this.form.UserName = this.rowData.UserName;
        this.form.EmployeeCode = this.rowData.EmployeeCode;
        this.form.Password = this.rowData.Password;
        this.form.Email = this.rowData.Email;
        this.form.FullName = this.rowData.FullName;
        this.form.PhoneNumber = this.rowData.PhoneNumber;
        this.form.Status = this.rowData.Status;
        this.form.Role = this.rowData.Role;
        this.form.Sex = this.rowData.Sex;
        this.form.IsPrinter = this.rowData.IsPrinter;
        this.form.TimeCreate = this.rowData.TimeCreate;
      } else {
        this.form.UserName = "";
        this.form.EmployeeCode = "";
        this.form.Password = "";
        this.form.Email = "";
        this.form.Status = "";
        this.form.FullName = "";
        this.form.PhoneNumber = "";
        this.form.Role = "";
        this.form.Sex = "";
        this.form.IsPrinter = "";
        this.form.TimeCreate = "";
      }
    },
    closeForm() {
      this.$emit("close");
    },
  },
  created() {
    this.initData();
  },
  watch: {
    rowData() {
      this.initData();
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-footer {
  text-align: center;
  button:first-child {
    margin-right: 10px;
  }
}
</style>
