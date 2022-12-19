<template>
  <div class="container">
    <div class="title">
      <img class="tile-logo" src="@/assets/logo.webp" alt="" />
      <p class="title-text">Điểm bán Upharma</p>
    </div>

    <div class="menu">
      <div class="menu-item" v-for="(item, index) in menuLst" :key="index">
        <router-link :to="item.path">
          <span class="icon" v-html="item.icon"></span>
          <span class="text">{{ item.label }}</span>
        </router-link>
        <!-- <a href="">
          <i class="fa-solid fa-chart-simple icon"></i>
          <span class="text">Thống kê</span>
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuLst: [
        {
          value: 1,
          label: "Thống kê",
          icon: " <i class='fa-solid fa-chart-simple icon'></i>",
          path: "/thong-ke",
        },
        {
          value: 2,
          label: "Hồ sơ",
          icon: "<i class='fa-regular fa-file-lines icon'></i>",
          path: "/ho-so",
        },
        {
          value: 3,
          label: "Công việc",
          icon: "<i class='fa-solid fa-briefcase'></i>",
          path: "/",
        },
        {
          value: 4,
          label: "Khu vực",
          icon: "<i class='fa-solid fa-map-location-dot'></i>",
          path: "/khu-vuc",
        },
        {
          value: 5,
          label: "Liên hệ",
          icon: " <i class='fa-solid fa-phone icon'></i>",
          path: "/lien-he",
        },
        {
          value: 6,
          label: "Điểm bán",
          icon: "<i class='fa-solid fa-house-medical-flag icon'></i>",
          path: "/",
        },
        {
          value: 7,
          label: "Lịch KT",
          icon: "<i class='fa-regular fa-calendar-days icon'></i>",
          path: "/",
        },
        {
          value: 8,
          label: "Cài đặt",
          icon: "<i class='fa-solid fa-gear icon'></i>",
          path: "/",
        },
        {
          value: 9,
          label: "Tài khoản",
          icon: "<i class='fa-solid fa-power-off icon'></i>",
          path: "/",
        },
        {
          value: 10,
          label: "Mặc định",
          icon: "<i class='fa-solid fa-power-off icon'></i>",
          path: "/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: #fff;
    font-family: "Dancing Script", cursive;
    font-size: 20px;
    border-bottom: solid 1px #fff;
    padding-bottom: 10px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
    &-text {
      margin: 10px;
    }
  }

  .menu {
    font-family: "Roboto", sans-serif;
    &-item {
      margin-top: 10px;
      margin-right: 10px;

      a {
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        font-size: 16px;
        // font-weight: bold;
        .icon {
          width: 20px;
          height: 20px;
          display: block;
          margin-left: 15px;
        }
        .text {
          padding-left: 20px;
          line-height: 50px;
        }
      }
    }
  }
}
a:hover {
  background-color: white;
  border-radius: 5px;
  // font-weight: 600;
  span {
    color: #1d974a;
  }
}
a:focus {
  background-color: white;
  border-radius: 5px;
  font-weight: 600;
  span {
    color: #1d974a;
  }
}

@media screen and (max-width: 1920px) {
  .container {
    font-size: 14px;
  }
}
@media screen and (max-width: 1024px) {
  .container {
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  .container {
    font-size: 10px;
  }
}
</style>
