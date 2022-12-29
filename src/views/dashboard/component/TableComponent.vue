<template>
  <el-table
    :data="tableData"
    class="table-item mt-2"
    style="width: 100%"
    stripe
  >
    <el-table-column type="index" label="" width="60" />
    <el-table-column prop="name" label="Hồ sơ" min-width="150" />
    <el-table-column prop="Status" label="Trạng thái" min-width="100" />
    <el-table-column prop="" label="Xem" width="150">
      <template #default="scope">
        <i class="fa-solid fa-file" style="color: rgb(64, 158, 255)"></i>
      </template>
    </el-table-column>
  </el-table>
  <div class="table-more mt-3">Thêm</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "Mở mới điểm bán Upharma số 40",
          address: "5",
          Status: "Hoàn thành",
        },
        {
          name: "Đóng điểm bán Upharma số 07",
          address: "3",
          Status: "Chờ xử lý",
        },
        {
          name: "Mở mới điểm bán Upharma số 41",
          address: "3",
          Status: "Đang thực hiện",
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
.table-more {
  
}
</style>
