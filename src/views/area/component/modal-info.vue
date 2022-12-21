<template>
  <el-form :model="form" label-width="120px" label-position="left">
    <el-form-item label="Tên Khu vực">
      <el-input v-model="form.CompanyName" placeholder="Nhập tên Khu vực" />
    </el-form-item>
    <el-form-item label="Mã số">
      <el-input
        v-model="form.NumberRegister"
        placeholder="Nhập số đăng ký kinh doanh"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="Người đại diện">
      <el-input v-model="form.Delegate" placeholder="Nhập tên người đại diện" />
    </el-form-item>
    <el-form-item label="Địa chỉ">
      <el-row :gutter="20" justify="space-between" style="width: 100%">
        <el-col :span="6" :xs="24" :sm="24" :lg="8">
          <el-select
            filterable
            clearable
            class="diachi"
            v-model="form.City"
            placeholder="Chọn tỉnh/Tp"
          >
            <el-option
              v-for="(item, index) in cityList"
              :key="index"
              :label="item.City"
              :value="item.City"
            />
          </el-select>
        </el-col>
        <el-col :span="6" :xs="24" :sm="24" :lg="8">
          <el-select
            filterable
            clearable
            class="diachi"
            v-model="form.District"
            placeholder="Chọn quận/huyện"
          >
            <el-option
              v-for="(item, index) in districtList"
              :key="index"
              :label="item.District"
              :value="item.District"
            />
          </el-select>
        </el-col>
        <el-col :span="6" :xs="24" :sm="24" :lg="8">
          <el-select
            filterable
            clearable
            class="diachi"
            v-model="form.Commune"
            placeholder="Chọn phường/xã"
          >
            <el-option
              v-for="(item, index) in communeList"
              :key="index"
              :label="item.Commune"
              :value="item.Commune"
            />
          </el-select>
        </el-col>
      </el-row>
    </el-form-item>

    <div class="dialog-footer">
      <el-button @click="closeForm">Hủy</el-button>
      <el-button type="primary" @click="onSubmit">Xác nhận</el-button>
    </div>
  </el-form>
</template>

<script>
import { addAreaApi } from "@/api/areaApi.js";
import { ElNotification } from "element-plus";
import Cookies from "js-cookie";
import { getDistrictList, getCommuneList } from "@/api/defaultValueApi";
export default {
  props: {
    cityList: Array,
  },
  data() {
    return {
      form: {
        CompanyName: "",
        CompanyID: "",
        CompanyType: "",
        Delegate: "",
        Size: "",
        Address: "",
        City: "",
        District: "",
        Commune: "",
        Delegate: "",
        Status: "",
        TimeCreate: "",
        CreateID: "",
        TimeModify: "",
        ModifyID: "",
        ApproveID: "",
        TimeApporve: "",
        ActiveAreav: "",
        NumberRegister: "",
        delivery: false,
        type: [],
        quan: "",
        phuong: "",
      },
      districtList: [],
      communeList: [],
    };
  },

  methods: {
    onSubmit() {
      //Tạo request đẩy lên API
      const req = {
        UserName: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
        CompanyInfo: this.form,
      };

      //Gọi API
      addAreaApi(req).then((res) => {
        //RespCode = 0 : tạo mới thành công
        if (res.RespCode == 0) {
          ElNotification({
            title: "Thành công",
            message: "Thêm mới khu vực thành công",
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
    },
    closeForm() {
      this.$emit("close");
    },
    getDistrictList() {
      const req = {
        UserName: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
        City: this.form.City,
      };
      getDistrictList(req).then((res) => {
        if (res.RespCode == 0) {
          this.districtList = res.Data;
        }
      });
    },
    getCommuneList() {
      const req = {
        UserName: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
        City: this.form.City,
        District: this.form.District,
      };
      getCommuneList(req).then((res) => {
        if (res.RespCode == 0) {
          this.communeList = res.Data;
        }
      });
    },
  },
  created() {
    // this.getDistrictList();
    // console.log(this.districtList);
  },
  watch: {
    "form.City"(newv, old) {
      console.log(newv, old);
      this.getDistrictList();
      this.form.District = "";
      this.form.Commune = "";
    },
    "form.District"(newv, old) {
      console.log(newv, old);
      this.getCommuneList();
      this.form.Commune = "";
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
.diachi {
  //margin-right: 15px;
  width: 100%;
}
</style>
