<template>
  <el-table
    :data="tableData"
    class="table-item mt-2"
    style="width: 100%"
    stripe
    height="400"
  >
    <el-table-column type="index" label="" width="40" />
    <el-table-column prop="name" label="Điểm bán" min-width="150" />
    <el-table-column prop="money" label="Doanh số" min-width="100" />
    <el-table-column prop="customer" label="Khách hàng" width="100">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "Upharma số 01",
          money: "50.000.000",
          customer: "100",
        },
        {
          name: "Upharma số 03",
          money: "50.000.000",
          customer: "99",
        },
        {
          name: "Upharma số 41",
          money: "40.000.000",
          customer: "80",
        },
        {
          name: "Upharma số 09",
          money: "50.000.000",
          customer: "99",
        },
        {
          name: "Upharma số 24",
          money: "40.000.000",
          customer: "80",
        },
        {
          name: "Upharma số 32",
          money: "50.000.000",
          customer: "99",
        },
        {
          name: "Upharma số 17",
          money: "40.000.000",
          customer: "80",
        },
        {
          name: "Upharma số 05",
          money: "50.000.000",
          customer: "99",
        },
        {
          name: "Upharma số 19",
          money: "40.000.000",
          customer: "80",
        },
        {
          name: "Upharma số 09",
          money: "40.000.000",
          customer: "80",
        },
        {
          name: "Upharma số 37",
          money: "50.000.000",
          customer: "99",
        },
        {
          name: "Upharma số 28",
          money: "40.000.000",
          customer: "80",
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
