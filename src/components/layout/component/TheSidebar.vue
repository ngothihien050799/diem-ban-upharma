<template>
  <div class="container">
    <div class="title">
      <img class="tile-logo" src="../../../assets/logo.webp" alt="" />
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
          icon: "<span class='material-symbols-outlined icon'> description </span>",
          path: "/ho-so",
        },
        {
          value: 3,
          label: "Công việc",
          icon: " <span class='material-symbols-outlined icon'> business_center </span>",
          path: "/",
        },
        {
          value: 4,
          label: "Khu vực",
          icon: " <span class='material-symbols-outlined icon'> home_work </span>",
          path: "/",
        },
        {
          value: 5,
          label: "Liên hệ",
          icon: " <i class='fa-solid fa-phone icon'></i>",
          path: "/",
        },
        {
          value: 6,
          label: "Điểm bán",
          icon: "<i class='fa-solid fa-location-dot icon'></i>",
          path: "/",
        },
        {
          value: 7,
          label: "Lịch KT",
          icon: "<span class='material-symbols-outlined icon'> calendar_month </span>",
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
    margin: 10px;
    color: #fff;
    font-family: "Dancing Script", cursive;
    font-size: 22px;
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
      margin: 30px 20px;

      a {
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        font-size: 18px;

        .icon {
           width: 20px;
          height: 20px;
        }
        .text {
          padding-left: 30px;
          line-height: 30px;
        }
      }
    }
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
