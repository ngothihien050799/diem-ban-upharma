<template>
  <div class="layout-container d-flex">
    <div class="sidebar" id="sidebar">
      <the-sidebar :userAge="age"/>
    </div>
    <div class="main-page" id="main-page">
      <the-header :userAge="age" 
      @tuoiduocSua="tuoiduocSua"
      />
      <!-- <the-tags/> -->
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
  data(){
    return{
      openSidebar: "true",
      age:18
    }
  },
  methods:{
    showSidebar(){
      this.openSidebar = !this.openSidebar;
    },
    tuoiduocSua(val){
      this.age = val;
    }
  }
};

</script>

<style lang="scss" scoped>
.layout-container {
  background: #1d974a;
  .sidebar {
    width: 280px;
    min-height: 100vh;
  }
  .main-page {
    width: 100%;
    overflow: hidden;
    background-color: rgb(226, 226, 226);
    border-radius: 30px 0 0 0;
    box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
