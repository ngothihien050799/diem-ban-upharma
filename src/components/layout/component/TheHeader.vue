<template>
  <div class="header d-flex">
    <div class="header-left d-flex">
      <span @click="changeSidebar">
        <i class="header-left-icon fa-solid fa-bars"></i
      ></span>
      <el-breadcrumb separator="/" class="header-left-text">
        <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
        <el-breadcrumb-item>Thống kê</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- <span class="header-left-text">
        <span>Trang chủ </span>
        <span>/ Thống kê</span>
      </span> -->
    </div>

    <div class="header-right d-flex ms-auto">
      <div class="header-right-search">
        <el-input
          v-model="search"
          placeholder="Tìm kiếm..."
          :suffix-icon="Search"
        />
      </div>
      <el-icon class="header-right-screen"><Rank /></el-icon>
      <a
        class="logout"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img class="img-logo" src="@/assets/logo.webp" alt="" />
      </a>

      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Trang chủ</a></li>
        <li><a class="dropdown-item" href="#">Đổi mật khẩu</a></li>
        <li>
          <span class="dropdown-item" href="#"
            ><router-link to="/login"> Đăng xuất</router-link></span
          >
        </li>
      </ul>
    </div>
    <div class="nav"></div>
  </div>
</template>
<script setup>
import { Search } from "@element-plus/icons-vue";
</script>
<script>
export default {
  props: {},
  data() {
    return {
      search:"",
    };
  },
  methods: {
    changeSidebar() {
      // let sidebar = document.getElementById("sidebar");
      // let mainPage = document.getElementById("main-page");
      // if (sidebar.style.display != "none") sidebar.style.display = "none";
      // else sidebar.style.display = "block";
      // mainPage.style.borderRadius = "0";
      console.log("v");
      this.$emit("changeSidebar");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;

 box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-size: 14px;
  line-height: 50px;
  &-left {
    &-icon {
      padding-left: 10px;
      padding-right: 7px;
      width: 20px;
      height: 20px;
    }
    &-text {
      font-size: 14px;
      line-height: 50px;
      &-item {
        text-decoration: none;
        color: #000;
        font-weight: 500;
      }
      .item {
        color: rgb(125, 126, 125);
      }
    }
  }
  &-right {
    line-height: 50px;
    margin-right: 10px;
    &-search {
      border-radius: 10px;
    }
    &-screen {
      width: 22px;
      height: 22px;
      margin: 12px;
      font-size: 25px;
    }
  }
  .img-logo {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }
}
</style>
