<template>
  <div class="card-body">
    <div class="card-title">Top điểm bán có doanh số cao nhất</div>
    <div class="card-info row d-flex">
      <div class="card-info-table col-sm-12">
        <table class="table table-hover bg-white rounded">
          <thead>
            <tr class="table-title">
              <th scope="col">Top</th>
              <th scope="col ">Điểm bán</th>
              <th scope="col">Doanh số</th>
              <th scope="col custem">Khách hàng</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-boby">
              <th scope="row">1</th>
              <td>Nhà thuốc Upharma số 01</td>
              <td>100.000.000</td>
              <td>234</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Nhà thuốc Upharma số 02</td>
              <td>100.000.000</td>
              <td>234</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Nhà thuốc Upharma số 03</td>
              <!-- <td colspan="2">Nhà thuốc Upharma số 03</td> -->
              <td>100.000.000</td>
              <td>300</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Nhà thuốc Upharma số 04</td>
              <!-- <td colspan="2">Nhà thuốc Upharma số 03</td> -->
              <td>100.000.000</td>
              <td>300</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Nhà thuốc Upharma số 05</td>
              <!-- <td colspan="2">Nhà thuốc Upharma số 03</td> -->
              <td>100.000.000</td>
              <td>300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-sm-12">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
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
        background: #eeeeee;
        height: 50px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
}
</style>
