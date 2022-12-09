<template>
  <div class="table">
    <div class="table-list row d-flex">
      <div class="table-list-title col-sm-12">
        <table class="table table-striped table-hover bg-white">
          <thead>
            <tr class="table-th">
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
      <div class="d-flex justify-content-end">
        <span class="arrow-item">
          <a class="arrow-link" href="#" tabindex="-1"
            ><i class="fa-solid fa-angles-left"></i
          ></a>
        </span>
        <span class="arrow-item">
          <a class="arrow-link" href="#" tabindex="-1"
            ><i class="fa-solid fa-angle-left"></i
          ></a>
        </span>
        <span class="arrow-item"><a class="arrow-link" href="#">1</a></span>
        <span class="arrow-item"><a class="arrow-link" href="#">2</a></span>
        <span class="arrow-item"><a class="arrow-link" href="#">3</a></span>
        <span class="arrow-item">
          <a class="arrow-link" href="#"
            ><i class="fa-solid fa-angle-right"></i
          ></a>
        </span>
        <span class="arrow-item">
          <a class="arrow-link" href="#"
            ><i class="fa-solid fa-angles-right"></i
          ></a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemLst: [{}],
    };
  },
};
</script>

<style lang="scss" scoped>
.table {
  &-list {
    padding: 20px;
    .table {
      &-th {
        background: #eeeeee;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        font-weight: 600;
        font-size: 14px;
      }
      td {
        font-size: 14px;
        font-weight: 500;
        line-height: 25px;
        color: #797575;
      }
    }
  }
  .arrow-item {
    margin-right: 20px;

    .arrow-link {
      text-decoration: none;
      color: #909d8d;
    }
  }
}
</style>
