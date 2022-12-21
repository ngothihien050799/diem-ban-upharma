<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Khu vực">
      <el-select
        v-model="form.region"
        style="width: 100%"
        placeholder="Chọn Khu vực"
      >
        <el-option label="Upharma Hà Nội" value="shanghai" />
        <el-option label="Upharma-TpHCM" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Điểm bán">
      <el-select
        v-model="form.name"
        style="width: 100%"
        placeholder="Chọn Điểm bán"
      >
        <el-option label="Điểm bán nhà thuốc Upharma số 01" value="shanghai" />
        <el-option label="Điểm bán nhà thuốc Upharma số 02" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Loại hồ sơ">
      <el-select
        v-model="form.typeHoso"
        style="width: 100%"
        placeholder="Chọn loại hồ sơ (Quy trình xử lý hồ sơ)"
      >
        <el-option label="Mở mới nhà thuốc Upharma" value="shanghai" />
        <el-option label="Đóng điểm bán nhà thuốc Upharma" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Ngày tiếp nhận">
      <el-col>
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="Chọn ngày tiếp nhận"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="Mô tả">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item label="Link tệp đính kèm">
      <el-input v-model="form.link"/>
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
        date: "",
        typeHoso: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        link: "",
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

<style></style>
