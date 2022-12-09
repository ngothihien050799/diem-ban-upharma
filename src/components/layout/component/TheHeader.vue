<template>
  <div class="header d-flex">
    <div class="header-left">
      <i class="header-left-icon fa-solid fa-bars"></i>
      <span class="header-left-text">
        <span>Trang chủ </span>
        <span>/ Thống kê</span>
      </span>
    </div>
    <div class="header-right d-flex ms-auto">
      <i class="icon search fa-solid fa-magnifying-glass"></i>
      <i class="icon fullscreen fa-solid fa-arrows-up-down-left-right"></i>
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
  <!-- <ChinhHi /> -->
</template>

<script>
// import ChinhHi from "../Main.vue";
export default {
  components: {
    // ChinhHi,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  border-bottom: 1px solid #d4d8d6;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  line-height: 50px;
  &-left {
    &-icon {
      padding-left: 30px;
      padding-right: 10px;
      width: 18px;
      height: 18px;
      color: rgb(38, 141, 38);
    }
    &-text {
      font-size: 14px;
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
    
    .icon {
      width: 18px;
      height: 18px;
      margin-top: 15px;
      margin-right: 10px;
    }
  }
  .img-logo {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }
}
</style>
