<template>
  <div class="tab items-center">
    <div class="tab-list">
      <el-tag
        class="tab-item mx-1"
        effect="dark"
        style="background: linear-gradient(180deg, #6e9e0e 0%, #097732 100%)"
        closable
      >
        Thống kê
      </el-tag>
      <el-tag
        class="tab-item mx-1"
        effect="dark"
        style="background: linear-gradient(180deg, #6e9e0e 0%, #097732 100%)"
        closable
      >
        Hồ sơ
      </el-tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ["Thống kê", "Hồ sơ"],
    };
  },
};
</script>

<style lang="scss" scoped>
.tab {
  height: 35px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  line-height: 35px;
  &-list {
    margin-left: 15px;
  }
}
</style>
