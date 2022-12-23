<template>
  <el-form :model="form" label-width="150px" label-position="left">
    <el-form-item label="Họ tên">
      <el-input v-model="form.FullName" placeholder="Nhập họ tên" />
    </el-form-item>
    <el-form-item label="Số điện thoại">
      <el-input v-model="form.PhoneNumber" placeholder="Nhập số điện thoại" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="form.Email" placeholder="Nhập Email đăng ký" />
    </el-form-item>
    <el-form-item label="Khu vực">
      <el-select
        filterable
        clearable
        class="diachi"
        v-model="form.CompanyID"
        placeholder="Chọn khu vực"
        style="width: 100%"
      >
        <el-option
          v-for="(item, index) in areaList"
          :key="index"
          :label="item.CompanyName"
          :value="item.CompanyID"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Chức vụ">
      <el-input v-model="form.Position" />
    </el-form-item>
    <el-form-item label="Mô tả">
      <el-input v-model="form.Description" type="textarea" />
    </el-form-item>
    <div class="dialog-footer">
      <el-button @click="closeForm">Hủy</el-button>
      <el-button type="primary" @click="onSubmit">Xác nhận</el-button>
    </div>
  </el-form>
</template>

<script>
import { addEmployeeList, updateEmployeeList } from "@/api/contactApi";
import { ElNotification } from "element-plus";
import Cookies from "js-cookie";
export default {
  props: {
    areaList: Array,
    rowData: Object,
  },
  data() {
    return {
      form: {
        RowID: "",
        EmployeeCode: "",
        CompanyID: "",
        CMND: "",
        FullName: "",
        Degree: "",
        Specialize: "",
        Department: "",
        Position: "",
        PhoneNumber: "",
        Description: "",
        Status: "",
        LinkImage: "",
        TimeCreate: "",
        CreateID: "",
        ModifyID: "",
        TimeModify: "",
        Nationality: "",
        Email: "",
        CompanyName: "",
      },
    };
  },
  methods: {
    closeForm() {
      this.$emit("close");
    },
    onSubmit() {
      //Nếu là cập nhập thì đưa status = 1 : đang làm việc
      // if(this.rowData) this.form.Status = 1;
      //Tạo request đẩy lên API
      const req = {
        UserName: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
        EmployeeInfo: this.form,
      };
      if (!this.rowData) {
        //Gọi API tạo mới khu vực
        addEmployeeList(req).then((res) => {
          if (res.RespCode == 0) {
            ElNotification({
              title: "Thành công",
              message: "Thêm mới liên hệ thành công!",
              type: "success",
            });

            this.$emit("save", this.form);
          } else {
            ElNotification({
              title: "Xảy ra lỗi",
              message: "Bạn chưa thêm khu vực cho liên hệ",
              type: "error",
            });
          }
        });
      } else {
        //Gọi API cập nhật
        updateEmployeeList(req).then((res) => {
          //RespCode = 0 : tạo mới thành công
          if (res.RespCode == 0) {
            ElNotification({
              title: "Thành công",
              message: "Cập nhật liên hệ thành công!",
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
        this.form.RowID = this.rowData.RowID;
        this.form.EmployeeCode = this.rowData.EmployeeCode;
        this.form.Status = this.rowData.Status;
        this.form.CompanyID = this.rowData.CompanyID;
        this.form.CMND = this.rowData.CMND;
        this.form.FullName = this.rowData.FullName;
        this.form.Degree = this.rowData.Degree;
        this.form.Specialize = this.rowData.Specialize;
        this.form.Department = this.rowData.Department;
        this.form.Position = this.rowData.Position;
        this.form.PhoneNumber = this.rowData.PhoneNumber;
        this.form.Description = this.rowData.Description;
        this.form.CreateID = this.rowData.CreateID;
        this.form.TimeCreate = this.rowData.TimeCreate;
        this.form.TimeModify = this.rowData.TimeModify;
        this.form.Nationality = this.rowData.Nationality;
        this.form.Email = this.rowData.Email;
        this.form.CompanyName = this.rowData.CompanyName;
      } else {
        this.form.RowID = "";
        this.form.EmployeeCode = "";
        this.form.Status = "";
        this.form.CompanyID = "";
        this.form.CMND = "";
        this.form.FullName = "";
        this.form.CompanyName = "";
        this.form.Degree = "";
        this.form.Specialize = "";
        this.form.Department = "";
        this.form.Position = "";
        this.form.PhoneNumber = "";
        this.form.Description = "";
        this.form.CreateID = "";
        this.form.TimeCreate = "";
        this.form.TimeModify = "";
        this.form.Nationality = "";
        this.form.Email = "";
      }
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
