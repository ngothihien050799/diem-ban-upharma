<template>
  <el-table
    :data="tableData"
    class="table-item mt-2"
    style="width: 100%"
    stripe
    height="300"
  >
    <el-table-column type="index" label="" width="40" />
    <el-table-column prop="name" label="KHU VỰC" min-width="150" />
    <el-table-column prop="address" label="ĐIỂM BÁN" width="150">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "HÀ NỘI",
          address: "20",
        },
        {
          name: "TP HCM",
          address: "18",
        },
        {
          name: "ĐÀ NẴNG",
          address: "7",
        },
        {
          name: "THÁI NGUYÊN",
          address: "8",
        },
        {
          name: "NGHỆ AN",
          address: "6",
        },
        {
          name: "HẢI PHÒNG",
          address: "5",
        },
        {
          name: "BẮC NINH",
          address: "2",
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
      background-color: #1d974a !important;
      // border-bottom: 1px solid #797575 !important;
      color: #fff;
    }
  }
}
</style>
