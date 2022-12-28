<template>
  <el-table :data="tableData" class="table-item mt-2" style="width: 100%" stripe>
    <el-table-column type="index" label="" width="60" />
    <el-table-column prop="name" label="Nhân viên" min-width="150" />
    <el-table-column prop="address" label="Công việc" width="150" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "Ngô Thị Hiền",
          address: "5",
        },
        {
          name: "Nguyễn Tiến Thành",
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
