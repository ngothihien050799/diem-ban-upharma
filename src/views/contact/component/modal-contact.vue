<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Họ tên">
      <el-input v-model="form.name" placeholder="Nhập họ tên" />
    </el-form-item>
    <el-form-item label="Số điện thoại">
      <el-input
        v-model="form.number"
        type="number"
        placeholder="Nhập số điện thoại"
      />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="form.email" placeholder="Nhập Email đăng ký" />
    </el-form-item>
    <el-form-item label="Khu vực">
      <el-select
        v-model="form.region"
        placeholder="Chọn khu vực"
        style="width: 100%"
      >
      </el-select>
    </el-form-item>
    <el-form-item label="Chức vụ">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Mô tả">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
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
        region: "",
        number: "",
        email: "",
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
};
</script>

<style></style>
