<template>
  <div class="dashboard">
    <div class="dashboard-select row">
      <div
        class="dashboard-select-item"
        v-for="(item, index) in selectList"
        :key="index"
      >
        <SelectComponent :SelectItem="item" />
      </div>
    </div>
    <div class="dashboard-doanhthu row">
      <div class="col-lg-4" v-for="(item, index) in cardList" :key="index">
        <CardCoponent :CardItem="item" />
      </div>
    </div>
    <div class="dashboard-chart row">
      <div class="col-sm-12 col-md-12 col-lg-12 bg-white dashboard-chart-left">
        <ChartComponent />
      </div>
      <div class="dashboard-chart-right row ">
        <div class="d-flex round-item">
          <round-chart
            class="dashboard-chart-right-item col-lg-6"
            v-for="(item, index) in rounds"
            :key="index"
            :round="item"
          />
        </div>
      </div>
    </div>

    <div class="dashboard-table row">
      <div class="dashboard-table-top col-lg-12 card mt-4">
        <div class="table-title">Top điểm bán có doanh số cao nhất</div>
        <table-component />
      </div>
      <div class="col-lg-12 card mt-4">
        <MapComponent />
      </div>

      <div class="col-lg-12 card mt-4">
        <div class="table-title">Danh sách hồ sơ</div>
        <table-component />
      </div>
      <div class="col-lg-12 card mt-4">
        <div class="table-title">Công việc cần xử lý</div>
        <table-component />
      </div>
    </div>
  </div>
</template>

<script>
import CardCoponent from "./component/CardCoponent.vue";
import SelectComponent from "./component/SelectComponent.vue";
import ChartComponent from "./component/ChartComponent.vue";
import RoundChart from "./component/RoundChart.vue";
import TableComponent from "./component/TableComponent.vue";
import MapComponent from "./component/MapComponent.vue";
import Cookies from "js-cookie";

export default {
  components: {
    CardCoponent,
    SelectComponent,
    ChartComponent,
    RoundChart,
    TableComponent,
    MapComponent,
  },
  data() {
    return {
      cardList: [
        {
          nameCard: "Doanh số (đồng)",
          valueCard: "1.200.000",
          urlIconCard: "/image/Money.png",
          iconUpDown: "fa-solid fa-arrow-up-long",
          bgColor: "-8px 0 0 rgb(29, 151, 74)",
          growthCard: "3% so với tháng trước",
        },
        {
          nameCard: "Khách hàng",
          valueCard: "300",
          urlIconCard: "/image/Person.png",
          iconUpDown: "fa-solid fa-arrow-up-long",
          bgColor: "-8px 0 0 rgb(245, 126, 37)",
          growthCard: "3% so với tháng trước",
        },

        {
          nameCard: "Điểm bán",
          valueCard: "21",
          urlIconCard: "/image/house.png",
          iconUpDown: "fa-solid fa-arrow-down-long",
          bgColor: "-8px 0 0 rgb(170, 154, 8)",
          growthCard: "1 so với tháng trước",
        },
      ],
      selectList: [
        {
          nameForm: "Năm",
          valueForm: "2023",
        },
        {
          nameForm: "Upharma-KV ",
          valueForm: "Hà Nội",
        },
        {
          nameForm: "Điểm bán Upharma",
          valueForm: "Điểm bán số 01",
        },
      ],
      rounds: [
        {
          nameRound: "TỶ TRỌNG KHÁCH HÀNG SO VỚI KHU VỰC",
          id: "round1",
          color1: "#F57E25",
          color2: "#F3BD94",
        },
        {
          nameRound: "DOANH THU SO VỚI TOÀN CÔNG TY",
          id: "round2",
          color1: "#6E9E0E",
          color2: "#D0EF91",
        },
      ],
    };
  },
  created() {
    console.log("TOken",Cookies.get("Token")); // Lấy token lưu trong cookies
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  margin: 20px 45px;
  &-select {
    &-item {
      width: 250px;
    }
  }
  &-doanhthu {
    margin-top: 20px;
  }
  &-chart {
    &-left {
      border-radius: 5px;
      padding: 20px;
      margin-top: 20px;
      // height: 200px;
    }
    &-right {

      &-item {
        background: #fff;
        margin-top: 20px;
     
      }
      // .round-item{
      //   justify-content: space-between;
      // }
    }
  }
}
.card-header {
  justify-content: space-between;
}
.table {
  &-title {
    padding: 20px 10px 0;
    font-weight: 600;
    font-size: 22px;
    color: #5d695d;
  }
}
</style>
