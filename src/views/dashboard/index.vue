<template>
  <div class="dashboard row">
    <div class="dashboard-left col-lg-8">
      <!--  -->
      <div class="dashboard-hoso">
        <div class="dashboard-hoso-title">HỒ SƠ</div>
        <el-row :gutter="20" class="dashboard-hoso-card">
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="6"
            v-for="(item, index) in hosoList"
            :key="index"
          >
            <card-brief :CardItem="item" />
          </el-col>
        </el-row>
      </div>

      <!--  -->
      <el-row :gutter="20" class="dashboard-congviec">
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="dashboard-congviec-list">
            <!-- <div class="dashboard-congviec-list-title">
            <el-icon color="#1D974A"><Briefcase /></el-icon>
            <span class="title">CÔNG VIỆC</span>
          </div> -->
            <div class="dashboard-congviec-list-total">
              <h2 class="fw-bold fs-1 pt-2">30</h2>
              <p class="text-secondary fw-semibold fs-5">Tổng số công việc</p>
            </div>
            <el-row>
              <el-col
                :sm="24"
                :md="12"
                :lg="12"
                v-for="(item, index) in congviecList"
                :key="index"
              >
                <card-brieff :CardItem2="item" />
              </el-col>
            </el-row>
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="dashboard-congviec-round">
            <div class="dashboard-congviec-round-title">
              <el-icon color="#1D974A"><Briefcase /></el-icon>
              <span class="title">CÔNG VIỆC</span>
            </div>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="12" :lg="12"
                ><round-chart
              /></el-col>
              <el-col
                :xs="24"
                :sm="24"
                :md="24"
                :lg="12"
                class="dashboard-congviec-round-tab"
              >
                <el-col
                  class="dashboard-congviec-round-tab-item"
                  v-for="(item, index) in tabList"
                  :key="index"
                  ><tab :tabItem="item" />
                </el-col>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <!--  -->
      <el-row :gutter="20" class="dashboard-chart">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
          <div class="dashboard-chart-mix bg-white">
            <div class="dashboard-chart-mix-title">
              THỜI GIAN THỰC HIỆN HỒ SƠ
            </div>
            <ChartComponent />
          </div>
        </el-col>
      </el-row>
      <!--  -->
      <el-row :gutter="20" class="dashboard-table">
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div class="dashboard-table-item bg-white">
            <div class="dashboard-chart-mix-title">TOP HỒ SƠ</div>
            <Table />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div class="dashboard-table-item bg-white">
            <div class="dashboard-chart-mix-title">TOP NHÂN VIÊN THỰC HIỆN</div>
            <TableNv />
          </div>
        </el-col>
        <el-col :span="24">
          <div class="dashboard-table-item bg-white">
            <div class="dashboard-chart-mix-title">DANH SÁCH HỒ SƠ</div>
            <TableComponent />
          </div>
        </el-col>
        <el-col :span="24">
          <div class="dashboard-table-item bg-white">
            <div class="dashboard-chart-mix-title">
              DANH SÁCH CÔNG VIỆC CẦN XỬ LÝ
            </div>
            <TableComponent />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="dashboard-right col-lg-4">
      <div class="dashboard-right-title">Doanh thu</div>

      <el-row :gutter="20">
        <el-col  :sm="24" :md="24" :lg="24">
          <el-date-picker
            v-model="value2"
            type="month"
            placeholder="Thời gian"
            format="MM/YYYY"
            size="large"
            class="dashboard-right-time"
          />
        </el-col>
        <el-col
          class="dashboard-right-select"
          :sm="24"
          :md="12"
          :lg="12"
          v-for="(item, index) in selectList"
          :key="index"
        >
          <SelectComponent :SelectItem="item" />
        </el-col>
        <el-col class="dashboard-right-table" :sm="24" :md="24" :lg="24">
          <TableDt />
        </el-col>
        <el-col class="dashboard-right-map" :sm="24" :md="24" :lg="24">
          <MapComponent />
        </el-col>
      </el-row>
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
import CardBrief from "./component/CardBrief.vue";
import CardBrieff from "./component/CardBrieff.vue";
import Table from "@/views/dashboard/component/Table.vue";
import TableNv from "@/views/dashboard/component/TableNv.vue";
import tab from "@/views/dashboard/component/tab.vue";
import TableDt from "@/views/dashboard/component/TableDt.vue";
export default {
  components: {
    CardCoponent,
    SelectComponent,
    ChartComponent,
    RoundChart,
    TableComponent,
    MapComponent,
    CardBrief,
    CardBrieff,
    Table,
    TableNv,
    tab,
    TableDt,
  },
  data() {
    return {
      hosoList: [
        {
          nameCard: "Tổng hồ sơ",
          valueCard: "5",
          iconUpDown: "fa-solid fa-arrow-up-long",
          bgColor: "#1D974A",
          growthCard: "3 ",
        },
        {
          nameCard: "Hoàn thành",
          valueCard: "21",
          iconUpDown: "fa-solid fa-arrow-down-long",
          bgColor: "linear-gradient(180deg, #43EC10 0%, #327711 100%)",
          growthCard: "1 ",
        },
        {
          nameCard: "Chờ giao việc",
          valueCard: "300",
          iconUpDown: "fa-solid fa-arrow-up-long",
          bgColor: "#8A8585",
          growthCard: "3 ",
        },

        {
          nameCard: "Quá hạn",
          valueCard: "21",
          iconUpDown: "fa-solid fa-arrow-down-long",
          bgColor: "linear-gradient(180deg, #D6A804 0%, #EB0707 100%)",
          growthCard: "1 ",
        },
      ],
      congviecList: [
        {
          nameCard: "Cần làm trong hôm nay",
          valueCard: "2",
          icon: "fa-solid fa-bell",
          bgColor: "linear-gradient(180deg, #FFF500 0%, #A5DB0A 100%)",
        },
        {
          nameCard: "Cần làm trong tuần",
          valueCard: "5",
          icon: "fa-solid fa-hourglass-start",
          bgColor: "linear-gradient(180deg, #43EC10 0%, #327711 100%)",
        },

        {
          nameCard: "Sắp quá hạn",
          valueCard: "0",
          icon: "fa-solid fa-hourglass-half",
          bgColor: "linear-gradient(180deg, #F8DF04 0%, #FF5C00 100%)",
        },

        {
          nameCard: "Quá hạn",
          valueCard: "1",
          icon: "fa-solid fa-triangle-exclamation",
          bgColor: "red",
        },
      ],
      tabList: [
        {
          nameTab: "Hoàn thành",
          bgColor: "#67C23A",
        },
        {
          nameTab: "Đang xử lý",
          bgColor: "#D0EF91",
        },

        {
          nameTab: "Chưa thực hiện",
          bgColor: "#b1b3b8",
        },
      ],
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
          nameRound: "CÔNG VIỆC",
          id: "round1",
          color1: "#F57E25",
          color2: "#F3BD94",
          color3: "#8A8585",
        },
      ],
    };
  },
  created() {
    // console.log("TOken", Cookies.get("Token")); // Lấy token lưu trong cookies
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  margin: 20px 30px;
  &-hoso {
    &-title {
      font-size: 20px;
      font-weight: 700;
      // color: #303133;
      margin-bottom: 10px;
      margin-left: 5px;
    }
  }
  &-chart {
    margin-bottom: 20px;
    &-mix {
      padding: 25px;
      border-radius: 10px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      &-title {
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
      }
    }
  }
  &-congviec {
    // margin: auto !important;
    margin-bottom: 20px;

    &-list {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      // &-title {
      //   display: flex;
      //   align-items: center;
      //   text-align: center;
      //   font-size: 20px;
      //   font-weight: 700;
      //   line-height: 30px;
      //   border-bottom: 2px solid #909d8d;
      //   margin-bottom: 10px;
      //   .title {
      //     margin-left: 5px;
      //   }
      // }
      &-total {
        text-align: center;
      }
    }
    &-round {
      height: 100%;
      background: white;
      padding: 20px;
      // margin-left: 10px;
      border-radius: 10px;
      margin-bottom: 20px !important;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      &-title {
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        border-bottom: 2px solid #909d8d;
        margin-bottom: 10px;
        .title {
          margin-left: 5px;
        }
      }
      &-tab {
        margin-top: 30px;
        &-item {
          margin: 20px;
        }
      }
    }
  }
  &-table {
    margin-bottom: 20px;
    &-item {
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 20px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }
  &-right {
    background: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    padding: 20px;
    &-time {
      width: 50% !important;
    }
    &-title {
      font-size: 20px;
      font-weight: 700;

      margin-bottom: 10px;
      margin-left: 5px;
    }
    &-select {
      margin-bottom: 15px;
    }
    &-table {
      margin-bottom: 15px;
    }
    &-map {
      margin-top: 15px;
    }
  }
}
</style>
<style>
@media only screen and (max-width: 1000px) {
  .dashboard-congviec-list {
    margin-bottom: 20px !important;
  }
}
.dashboard-right-time{
   width: 50% !important;
   margin-right: 20px;
}
</style>
