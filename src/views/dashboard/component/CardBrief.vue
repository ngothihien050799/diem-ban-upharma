<template>
  <div v-if="CardItem" class="card">
    <div class="card-top d-flex">
      <div class="card-top-icon" :style="{ background: CardItem.bgColor }">
        <el-icon><FolderOpened /></el-icon>
      </div>
      <div class="card-top-info">
        <h2 class="value">{{ CardItem.valueCard }}</h2>
        <span class="name">{{ CardItem.nameCard }}</span>
      </div>
      <div class="ms-auto">
        <el-tooltip content="Xem thêm" placement="right" effect="light">
          <el-icon><MoreFilled /></el-icon>
        </el-tooltip>
        <el-tooltip content="So với tháng trước" raw-content effect="light">
          <p class="grow mt-3">
            <i :class="CardItem.iconUpDown"></i> {{ CardItem.growthCard }}
          </p>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    CardItem: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &-top {
    align-items: center;
    margin-left: 20px;
    &-icon {
      width: 40px;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      color: white;
      padding: 3px;
    }
    &-info {
      margin-left: 15px;
      margin-top: 10px;
      .name {
        color: rgb(151, 153, 151);
        font-weight: 500;
        font-size: 14px;
      }
      .value {
        font-weight: 600;
      }
      .grow {
        font-size: 12px;
      }
    }
  }
}
</style>
