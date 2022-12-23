<template>
  <el-form :model="form" label-width="150px" label-position="left">
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
            @change="changeCity"
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
            @change="changeDistrict"
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
import { addAreaApi, upDateAreaApi } from "@/api/areaApi.js";
import { ElNotification } from "element-plus";
import Cookies from "js-cookie";
import { getDistrictList, getCommuneList } from "@/api/defaultValueApi";
export default {
  props: {
    cityList: Array,
    rowData: Object,
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
       
        
      },
      districtList: [],
      communeList: [],
    };
  },

  methods: {
    onSubmit() {
      //Tạo request đẩy lên API
      this.form.Address = this.form.Commune + " - " +this.form.District  + " - " + this.form.City;
      if(this.rowData){
        this.form.Status = 1
      }
      const req = {
        UserName: Cookies.get("UserName"),
        Token: Cookies.get("Token"),
        CompanyInfo: this.form,
      };
      //Nếu ko có rowData tức là tạo mới
      if (!this.rowData) {
        //Gọi API tạo mới khu vực
        addAreaApi(req).then((res) => {
          //RespCode = 0 : tạo mới thành công
          if (res.RespCode == 0) {
            ElNotification({
              title: "Thành công",
              message: "Thêm mới khu vực thành công!",
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
      //Nếu có rowData tức là cập nhật
      else {
        //Gọi API cập nhật
        
        upDateAreaApi(req).then((res) => {
          //RespCode = 0 : tạo mới thành công
          if (res.RespCode == 0) {
            ElNotification({
              title: "Thành công",
              message: "Cập nhật khu vực thành công!",
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
    changeCity(val) {
      this.getDistrictList();
    },
    changeDistrict(val) {
      this.getCommuneList();
    },
    initData() {
      if (this.rowData) {
        // console.log(this.rowData);
        this.form.Address = this.rowData.Address;
        this.form.City = this.rowData.City;
        this.form.Commune = this.rowData.Commune;
        this.form.CompanyID = this.rowData.CompanyID;
        this.form.CompanyName = this.rowData.CompanyName;
        this.form.CompanyType = this.rowData.CompanyType;
        this.form.CreateID = this.rowData.CreateID;
        this.form.Delegate = this.rowData.Delegate;
        this.form.District = this.rowData.District;
        this.form.NumberRegister = this.rowData.NumberRegister;
        this.form.Size = this.rowData.Size;
        this.form.Status = this.rowData.Status;
        this.form.TimeApporve = this.rowData.TimeApporve;
        this.form.TimeCreate = this.rowData.TimeCreate;
        this.form.TimeModify = this.rowData.TimeModify;
        // console.log(this.form);
      } else {
        this.form.Address = "";
        this.form.City = "";
        this.form.Commune = "";
        this.form.CompanyID = "";
        this.form.CompanyName = "";
        this.form.CompanyType = "";
        this.form.CreateID = "";
        this.form.Delegate = "";
        this.form.District = "";
        this.form.NumberRegister = "";
        this.form.Size = "";
        this.form.Status = "";
        this.form.TimeApporve = "";
        this.form.TimeCreate = "";
        this.form.TimeModify = "";
      }
    },
  },
  created() {
    // this.getDistrictList();
    // console.log(this.districtList);
    this.initData();
  },
  watch: {
    // "form.City"(newv, old) {
    //   // console.log(newv, old);
    //   this.getDistrictList();
    //   // this.form.District = "";
    //   // this.form.Commune = "";
    // },
    // "form.District"(newv, old) {
    //   // console.log(newv, old);
    //   this.getCommuneList();
    //   // this.form.Commune = "";
    // },
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
.diachi {
  //margin-right: 15px;
  width: 100%;
}
</style>
