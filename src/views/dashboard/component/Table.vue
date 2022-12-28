<template>
  <el-table :data="tableData" class="table-item mt-2" style="width: 100%" stripe>
    <el-table-column type="index" label="" width="60" />
    <el-table-column prop="name" label="Hồ sơ" min-width="180" />
    <el-table-column prop="address" label="Số lượng" width="150" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "Mở mới điểm bán Upharma",
          address: "2",
        },
        {
          name: "Đóng điểm bán Upharma",
          address: "3",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.table-item {
  .el-table__header-wrapper {
    th {
      background-color: #eeeeee !important;
      // border-bottom: 1px solid #797575 !important;
      color: #303133;
    }
  }
}
</style>
