<template>
  <div class="wrapper">
    <div class="hoso-hearder d-flex">
      <div class="hoso-hearder-search">
        <input
          type="hoso-hearder-search-input"
          id="search"
          placeholder="Tìm kiếm..."
        />
        <a class="hoso-hearder-search-icon" href=""
          ><i class="search fa-solid fa-magnifying-glass"></i
        ></a>
      </div>

      <button class="hoso-hearder-add btn">
        <font-awesome-icon icon="fa-regular fa-file-lines" />
        <span> Tạo mới hồ sơ</span>
      </button>
    </div>

    <div class="tab d-flex">
      <div class="tab-menu">
        <a class="tab-menu-item text-success" href="">Tất cả(20)</a>
        <a class="tab-menu-item" href="">Đang xử lý(10)</a>
        <a class="tab-menu-item" href="">Chờ xử lý(2)</a>
        <a class="tab-menu-item" href="">Hoàn thành(10)</a>
        <a class="tab-menu-item" href="">Hủy(3)</a>
      </div>
    </div>
    <div class="table col-sm-12 d-flex mt-3">
      <table class="table table-hover table-striped bg-white">
        <thead>
          <tr class="table-title">
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col ">Khu vực</th>
            <th scope="col ">Điểm bán</th>
            <th scope="col ">Mã hồ sơ</th>
            <th scope="col ">Tên hồ sơ</th>
            <th scope="col">Người tham gia</th>
            <th scope="col">Công việc</th>
            <th scope="col">Tiến độ</th>
            <th scope="col ">Thời gian</th>
          </tr>
        </thead>
        <tbody
          class="table-boby "
          v-for="(item, index)  in tableLst"
          :key="index"
        >
          <tr>
            <th scope="row">{{ item.Stt }}</th>
            <td>
              <router-link :to="item.path + item.Id">
                <span class="fa-regular fa-file-lines icon"></span>
              </router-link>
            </td>
            <td>{{ item.Khuvuc }}</td>
            <td>{{ item.Diemban }}</td>
            <td>{{ item.Id }}</td>
            <td>{{ item.Hoso }}</td>
            <td>
              <div>
                <b-avatar-group size="">
                  <b-avatar></b-avatar>
                  <b-avatar text="BV" variant="primary"></b-avatar>
                  <b-avatar
                    src="https://placekitten.com/300/300"
                    variant="info"
                  ></b-avatar>
                  <b-avatar text="OK" variant="danger"></b-avatar>
                  <b-avatar variant="warning"></b-avatar>
                  <b-avatar
                    src="https://placekitten.com/320/320"
                    variant="dark"
                  ></b-avatar>
                  <b-avatar icon="music-note" variant="success"></b-avatar>
                </b-avatar-group>
              </div>
            </td>
            <td>{{ item.Congviec }}</td>
            <td>
              <div class=" d-flex align-items-center">
                <h6>{{ item.Tiendo }}</h6>
              </div>
              <div
                class="shadow-none progress bg-soft-primary w-100"
                style="height: 4px"
              >
                <div
                  class="progress-bar bg-info"
                  data-toggle="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: {{item.Tiendo}}; transition: width 2s ease 0s"
                ></div>
              </div>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableLst: [
        {
          Stt: 1,
          Id: 1,
          Khuvuc: "Upharma Hà Nội",
          Diemban: "Nhà thuốc Upharma số 01",
          Hoso: "Đóng điểm bán nhà thuốc Upharma số 01",
          Person: "",
          Congviec: 10,
          Tiendo: "10%",
          path: "/thong-tin-ho-so/",
        },
        {
          Stt: 2,
          Id: 2,
          Khuvuc: "Upharma Hà Nội",
          Diemban: "Nhà thuốc Upharma số 02",
          Hoso: "Mở mới điểm bán Upharma số 02",
          Person: "",
          Congviec: 50,
          Tiendo: "10%",
          path: "/thong-tin-ho-so/",
        },
        {
          Stt: 3,
          Id: 3,
          Khuvuc: "Upharma Hà Nội",
          Diemban: "Nhà thuốc Upharma số 04",
          Hoso: "Đóng điểm bán nhà thuốc Upharma số 04",
          Person: "",
          Congviec: 10,
          Tiendo: "20%",
          path: "/thong-tin-ho-so/",
        },
        {
          Stt: 4,
          Id: 4,
          Khuvuc: "Upharma Hà Nội",
          Diemban: "Nhà thuốc Upharma số 01",
          Hoso: "Đóng điểm bán nhà thuốc Upharma số 01",
          Person: "",
          Congviec: 10,
          Tiendo: "10%",
          path: "/thong-tin-ho-so/",
        },
        {
          Stt: 5,
          Id: 5,
          Khuvuc: "Upharma Hà Nội",
          Diemban: "Nhà thuốc Upharma số 01",
          Hoso: "Đóng điểm bán nhà thuốc Upharma số 01",
          Person: "",
          Congviec: 10,
          Tiendo: "10%",
          path: "/thong-tin-ho-so/",
        },
        {
          Stt: 6,
          Id: 6,
          Khuvuc: "Upharma Hà Nội",
          Diemban: "Nhà thuốc Upharma số 01",
          Hoso: "Đóng điểm bán nhà thuốc Upharma số 01",
          Person: "",
          Congviec: 10,
          Tiendo: "10%",
          path: "/thong-tin-ho-so/",
        },
        {
          Stt: 7,
          Id: 7,
          Khuvuc: "Upharma Hà Nội",
          Diemban: "Nhà thuốc Upharma số 01",
          Hoso: "Đóng điểm bán nhà thuốc Upharma số 01",
          Person: "",
          Congviec: 10,
          Tiendo: "10%",
          path: "/thong-tin-ho-so/",
        },
        {
          Stt: 8,
          Id: 8,
          Khuvuc: "Upharma Hà Nội",
          Diemban: "Nhà thuốc Upharma số 01",
          Hoso: "Đóng điểm bán nhà thuốc Upharma số 01",
          Person: "",
          Congviec: 10,
          Tiendo: "10%",
          path: "/thong-tin-ho-so/",
        },
        {
          Stt: 9,
          Id: 9,
          Khuvuc: "Upharma Hà Nội",
          Diemban: "Nhà thuốc Upharma số 01",
          Hoso: "Đóng điểm bán nhà thuốc Upharma số 01",
          Person: "",
          Congviec: 10,
          Tiendo: "10%",
          path: "/thong-tin-ho-so/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  font-family: "Roboto", sans-serif;

  .hoso-hearder {
    margin: 30px 40px 15px;
    &-search {
      width: 250px;
      height: 35px;
      
    }
    &-input {
      border: 0.2px solid #909d8d;
    }
    .icon {
      border: #1d974a;
    }
    &-add {
      margin-left: 10px;
      background: linear-gradient(180deg, #6e9e0e 0%, #097732 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      width: 150px;
      color: #fff;
      font-size: 14px;
    }
  }
  .tab {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 40px;
    align-items: center;
    &-menu {
      margin-left: 30px;
      &-item {
        text-decoration: none;
        margin-right: 30px;
        color: #797575;
        font-weight: 600;
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
  .table {
    &-title {
      background: #1d974a;
      color: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      th {
        align-items: center;
      }
    }
  }
  .table-body {
    tr:hover {
      background-color: #097732 !important;
    }
  }
}
</style>
