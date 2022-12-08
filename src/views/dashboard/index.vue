<template>
  <div class="page-wrapper m-5">
    <div class="page-body">
      <div class="row">
        <div class="col-lg-1 col-md-12 m-3">
          <FormComponent :FormItem="formList[0]" />
        </div>
        <div class="col-lg-2 m-3">
          <FormComponent :FormItem="formList[1]" />
        </div>
        <div class="col-lg-2 m-3">
          <FormComponent :FormItem="formList[2]" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-4" v-for="(item, index) in cardList" :key="index">
          <CardCoponent :CardItem="item" />
        </div>
        <!-- <div class="col-md-4 mb-2">
          <CardCoponent :CardItem="cardList[1]" />
        </div>
        <div class="col-md-4 mb-2">
          <CardCoponent :CardItem="cardList[2]" />
        </div> -->
      </div>
      <div class="row mt-4">
        <div class="col-sm-12 col-md-12 col-lg-8 bg-white chart-right">
          <ChartComponent />
        </div>
        <div class="col-md-4">
          <round-chart
            v-for="(item, index) in rounds"
            :key="index"
            :round="item"
          />
        </div>
      </div>
      <div class=""></div>
    </div>
    <div class="card mt-4">
      <table-component />
    </div>
    <div class="card mt-4">
      <MapComponent />
    </div>

    <div class="card mt-4">
      <table-component />
    </div>
    <div class="card mt-4">
      <table-component />
    </div>
  </div>
</template>

<script>
import CardCoponent from "./component/CardCoponent.vue";
import FormComponent from "./component/FormComponent.vue";
import ChartComponent from "./component/ChartComponent.vue";
import RoundChart from "./component/RoundChart.vue";
import TableComponent from "./component/TableComponent.vue";
import MapComponent from "./component/MapComponent.vue";
export default {
  components: {
    CardCoponent,
    FormComponent,
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
      formList: [
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
};
</script>

<style lang="scss" scoped>
.card-header {
  justify-content: space-between;
}
.chart-right {
  border-radius: 20px;
  padding: 30px 40px;
}
</style>
