<template>
  <div v-if="CardItem2" class="congviec">
    <el-tooltip content="Xem danh sách" placement="top" effect="dark">
      <div class="congviec-item d-flex">
        <div
          class="congviec-item-icon"
          :style="{ background: CardItem2.bgColor }"
        >
          <el-icon><i :class="CardItem2.icon"></i></el-icon>
        </div>
        <div class="congviec-item-info">
          <span class="congviec-item-info-value">{{
            CardItem2.valueCard
          }}</span>
          <p class="congviec-item-info-name">{{ CardItem2.nameCard }}</p>
        </div>
      </div>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  props: {
    CardItem2: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.congviec {
  &-item {
    align-items: center;
    margin: 20px;
    padding-left: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    &-icon {
      font-weight: 600;
      font-size: 20px;
      line-height: 60px;
      width: 50px;
      height: 50px;
      text-align: center;
      // background: yellow;
      color: white;
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    &-info {
      margin-left: 15px;
      margin-top: 10px;
      &-value {
        font-weight: 600;
        font-size: 30px;
        line-height: 50px;
      }
      &-name {
        color: rgb(151, 153, 151);
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
}
// .congviec-item:hover {
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
// }
</style>
