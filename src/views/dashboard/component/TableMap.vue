<template>
  <div class="map-table col-sm-12">
    <table id="dtBasicExample" class="table table-hover bg-white rounded">
      <thead>
        <tr class="map-table-title">
          <th scope="col">KHU VỰC</th>
          <th scope="col ">ĐIỂM BÁN</th>
        </tr>
      </thead>
      <tbody>
        <tr class="map-table-list">
          <td>HÀ NỘI</td>
          <td>20</td>
        </tr>
        <tr class="map-table-list">
          <td>HÀ NỘI</td>
          <td>20</td>
        </tr>
        <tr class="map-table-list">
          <td>HÀ NỘI</td>
          <td>20</td>
        </tr>
        <tr class="map-table-list">
          <td>HÀ NỘI</td>
          <td>20</td>
        </tr>
        <tr class="map-table-list">
          <td>HÀ NỘI</td>
          <td>20</td>
        </tr>
        <tr class="map-table-list">
          <td>HÀ NỘI</td>
          <td>20</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="">
    <a class="page-more" href="#">More >> </a>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss" scoped>
.map-table {
  text-align: center;
  &-title {
    height: 50px;
    font-weight: 600;
    font-size: 16px;
    color: #797575;
  }
  &-list {
    td {
      font-size: 14px;
      font-weight: 500;
      line-height: 30px;
      color: #922222;
    }
  }
}

.page-more {
  float: right;
  text-decoration: none;
  color: #909d8d;
}
</style>
