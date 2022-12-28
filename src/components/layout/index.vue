<template>
  <div class="layout-container d-flex">
    <div class="sidebar" id="sidebar">
      <the-sidebar :isCollapse="openSidebar" />
    </div>
    <div class="main-page" id="main-page">
      <the-header @changeSidebar="changeSidebar" />
      <the-tags/>
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "./component/TheHeader.vue";
import TheSidebar from "./component/TheSidebar.vue";
import TheTags from "./component/TheTags.vue";
export default {
  components: { TheHeader, TheSidebar, TheTags },
  data() {
    return {
      openSidebar: false,
    };
  },
  methods: {
    changeSidebar() {
      console.log("ok");
      this.openSidebar = !this.openSidebar;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  background: #1d974a;
  .sidebar {
    //width: 280px;
    min-height: 100vh;
  }
  .main-page {
    width: 100%;
    overflow: hidden;
    background-color: #fafcff;
    box-shadow: -6px 5px 4px rgba(0, 0, 0, 0.25);
    
  }
}
</style>
