<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Tên Khu vực">
      <el-input v-model="form.name" placeholder="Nhập tên Khu vực" />
    </el-form-item>
    <el-form-item label="Mã số">
      <el-input v-model="form.code" placeholder="Nhập số đăng ký kinh doanh">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-input>
    </el-form-item>
    <el-form-item label="Người đại diện">
      <el-input v-model="form.person" placeholder="Nhập tên người đại diện" />
    </el-form-item>
    <el-form-item label="Tỉnh/TP">
      <el-select class="diachi" v-model="form.TP" placeholder="Chọn tỉnh/Tp">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
      <el-select class="diachi" v-model="form.quan" placeholder="Chọn quận/huyện">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
      <el-select class="diachi" v-model="form.huyen" placeholder="Chọn phường/xã">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>

    <el-form-item class="dialog-footer">
      <el-button>Cancel</el-button>
      <el-button type="primary" @click="onSubmit">Xác nhận</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        code: "",
        person: "",
        TP: "",
        delivery: false,
        type: [],
        quan: "",
        phuong: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.diachi{
  margin-right: 15px;
}
</style>
