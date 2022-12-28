<template>
  <div v-if="tabItem" class="tab d-flex">
    <div class="tab-block" :style="{ background: tabItem.bgColor }"></div>
    <div class="tab-name">{{ tabItem.nameTab }}</div>
  </div>
</template>

<script>
export default {
  props: {
    tabItem: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  &-block {
    width: 50px;
    height: 20px;
    margin-right: 10px;
  }
}
</style>
