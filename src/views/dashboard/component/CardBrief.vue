<template>
  <div v-if="CardItem" class="card">
    <div class="card-top d-flex">
      <div class="card-top-icon" :style="{ background: CardItem.bgColor }">
        <el-icon><FolderOpened /></el-icon>
      </div>
      <div class="card-top-info">
        <span class="name">{{ CardItem.nameCard }}</span>
        <h3 class="value">{{ CardItem.valueCard }}</h3>
      </div>
      <div class="card-top-more ms-auto">
        <span class=""
          ><i :class="CardItem.iconUpDown"></i> {{ CardItem.growthCard }}</span
        >
      </div>
    </div>
    <div class="card-footer" :style="{ background: CardItem.bgColor }">
     <el-icon><CaretBottom /></el-icon>
    </div>

    <!-- <div class="card-info-grow">
      <span class=""
        ><i :class="CardItem.iconUpDown"></i> {{ CardItem.growthCard }}</span
      >
    </div> -->
  </div>
</template>
<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  FolderOpened,
} from "@element-plus/icons-vue";
</script>
<script>
export default {
  props: {
    CardItem: {
      type: Object,
    },
  },
  data() {
    return {
      //background: "red",
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
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
    }
    &-info {
      margin-top: 10px;
      margin-left: 15px;
      .name {
        color: rgb(151, 153, 151);
        font-weight: 500;
        font-size: 14px;
      }
    }
    &-more {
      margin-right: 20px;
    }
  }
  &-footer {
    color: white;
    font-size: 10px;
    text-align: center;
  }
}
</style>
