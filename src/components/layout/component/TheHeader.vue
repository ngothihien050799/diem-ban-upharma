<template>
  <nav class="d-flex header">
    <div class="d-flex header-left">
      <i class="icon fa-solid fa-bars"></i>

      <div class="breadcrumb">
        <a href="" class="breadcrumb-item">Trang chủ</a>
        <span class="breadcrumb-item active item" aria-current="page"
          >Thống kê</span
        >
      </div>
    </div>
    <div class="header-right d-flex ms-auto p-10">
      <i class="icon search fa-solid fa-magnifying-glass p-2"></i>
      <i class="icon fullscreen fa-solid fa-arrows-up-down-left-right p-2"></i>

      <a
        class="logout"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img class="img-logo" src="../../../assets/logo.webp" alt="" />
      </a>

      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Trang chủ</a></li>
        <li><a class="dropdown-item" href="#">Đổi mật khẩu</a></li>
        <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
      </ul>
     
    </div>
    <div class="nav"></div>
  </nav>
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
  height: 75px;
  border-bottom: 1px solid #d4d8d6;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  &-left {
    .icon {
      padding-top: 25px;
      padding-left: 30px;
      padding-right: 10px;
      font-size: 25px;
      color: rgb(38, 141, 38);
    }
    .breadcrumb {
      padding-top: 22px;
      font-size: 18px;
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
    margin-top: 20px;
    margin-right: 20px;
    .icon {
      padding-right: 20px !important;
      padding-top: 12px !important;
    }
  }
  .img-logo {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
}
</style>
