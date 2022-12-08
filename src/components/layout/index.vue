<template>
  <div class="dashboard-container">
    <the-sidebar />

    <div class="main-container">
      <the-header />
      <!-- <the-tags/> -->
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "./component/TheHeader.vue";
import TheSidebar from "./component/TheSidebar.vue";
import TheTags from './component/TheTags.vue';
export default {
  components: { TheHeader, TheSidebar, TheTags },
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  display: grid;
  grid-template-columns: 1fr 6fr;
  background-color: #1d974a;
  min-width: 100vw;
  min-height: 100vh;
  .main-container {
    overflow: hidden;
    background-color: rgb(226, 226, 226);
    border-radius: 50px 0 0 0;
    box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
