<template>
  <div class="container" :class="!isCollapse ? 'width-190' : 'width-auto'">
    <div class="title">
      <img class="tile-logo" src="@/assets/logo.webp" alt="" />
      <p class="title-text" v-if="!isCollapse">Điểm bán Upharma</p>
    </div>

    <el-menu
      :collapse="isCollapse"
      active-text-color="yellow"
      background-color="#1d974a"
      class="menu"
      default-active="2"
      router
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item
        class="menu-item"
        v-for="(item, index) in menuLst"
        :key="index"
        :index="index + 1"
        :route="item.path"
      >
        <el-tooltip
          effect="light"
          :content="item.label"
          :disabled="!isCollapse"
          placement="right"
        >
          <el-icon><span class="icon" v-html="item.icon"></span></el-icon>
        </el-tooltip>
        <span>{{ item.label }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean,
  },
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
          path: "/cong-viec",
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
          path: "/diem-ban",
        },
        {
          value: 7,
          label: "Lịch KT",
          icon: "<i class='fa-regular fa-calendar-days icon'></i>",
          path: "/lich-KT",
        },
        {
          value: 8,
          label: "Cài đặt",
          icon: "<i class='fa-solid fa-gear icon'></i>",
          path: "/cai-dat",
          children: [
            {
              label: "Tài khoản",
              path: "/tai-khoan",
            },
            {
              label: "Lịch KT",
              path: "/lich-KT",
            },
          ],
        },
        {
          value: 9,
          label: "Tài khoản",
          icon: "<i class='fa-solid fa-power-off icon'></i>",
          path: "/tai-khoan",
        },
        {
          value: 10,
          label: "Mặc định",
          icon: "<i class='fa-solid fa-power-off icon'></i>",
          path: "/mac-dinh",
        },
      ],
    };
  },
  methods: {
    handleSubMenu() {
      if (this.menuLst.chidren == 0) {
      }
    },
  },
  created() {},
  watch: {
    isCollapse() {
      console.log(this.isCollapse);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  // display: flex;
  // flex-direction: column;
  padding-left: 0;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    color: #fff;
    font-family: "Dancing Script", cursive;
    font-size: 16px;
    border-bottom: solid 1px #fff;
    padding: 0 0 10px 10px;

    img {
      width: 34px;
      height: 34px;
      border-radius: 5px;
    }
    &-text {
      margin: 10px;
    }
  }

  .menu {
    // font-family: "Roboto", sans-serif;
    font-family: "Crete Round", serif;
    margin-top: 20px;
    border: none !important;
    &-item {
      // margin-top: 15px;
      // margin-right: 20px;
      // margin-left: 10px;
      a {
        width: 100%;
        text-decoration: none;
        color: #fff;
        display: flex;
        font-size: 16px;
        .icon {
          width: 20px;
          height: 20px;
          display: block;
          margin-left: 20px;
        }
        .text {
          padding-left: 20px;
          line-height: 50px;
        }
      }
    }
  }
}

// .el-menu-vertical-demo {
//   border: none !important;
// }
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
.width-190 {
  width: 190px;
}
.width-auto {
  width: auto;
}
</style>
<style>
.menu .el-menu-item * {
  vertical-align: unset !important;
  /* margin-left: 5px; */
}
.menu .el-menu {
  font-family: "Roboto", sans-serif !important;
}
.menu .el-menu-item:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* color: #1d974a; */
  /* background-color: #fff; */
  /* font-weight: 600; */
}
/* .menu .el-menu-item:active {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 
  background: #fff !important;
  color: #1d974a;
} */

.el-menu-item [class^="el-icon"] {
  font-size: 14px !important;
}
</style>
