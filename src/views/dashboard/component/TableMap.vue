<template>
  <div class="card-body">
    <div class="card-info row d-flex">
      <div class="card-info-table col-sm-12">
        <table id="dtBasicExample" class="table table-hover bg-white rounded">
          <thead>
            <tr class="table-title">
              <th scope="col">KHU VỰC</th>
              <th scope="col ">ĐIỂM BÁN</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-boby">
              <td>HÀ NỘI</td>
              <td>20</td>
            </tr>
            <tr class="table-boby">
              <td>HÀ NỘI</td>
              <td>20</td>
            </tr>
            <tr class="table-boby">
              <td>HÀ NỘI</td>
              <td>20</td>
            </tr>
            <tr class="table-boby">
              <td>HÀ NỘI</td>
              <td>20</td>
            </tr>
            <tr class="table-boby">
              <td>HÀ NỘI</td>
              <td>20</td>
            </tr>
            <tr class="table-boby">
              <td>HÀ NỘI</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="">
      <a class="page-more" href="#">More >> </a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
 
  },
};
</script>

<style lang="scss" scoped>
.card {
  &-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #5d695d;
  }
  &-info {
    padding: 10px;
    .table {
      &-title {
        height: 50px;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
      }
      td {
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        color: #797575;
      }
    }
  }
  .page-more {
    float: right;
    text-decoration: none;
    color: #909d8d;
  }
}
</style>
