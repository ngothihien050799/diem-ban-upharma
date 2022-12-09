<template>
  <div v-if="CardItem" class="card" :style="{ boxShadow: CardItem.bgColor }">
    <div class="card-info">
      <div class="card-info-header">
        <h6 class="name">{{ CardItem.nameCard }}</h6>
      </div>
      <div class="card-info-value">
        <h2 class="value">{{ CardItem.valueCard }}</h2>
        <img class="image" :src="CardItem.urlIconCard" alt="" />
        <div class="clear-both"></div>
      </div>

      <div class="card-info-grow">
        <span class=""
          ><i :class="CardItem.iconUpDown"></i> {{ CardItem.growthCard }}</span
        >
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
  data() {
    return {
      //background: "red",
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  padding: 10px 20px;
  &-info {
    text-align: left;
    .name {
      color: rgb(93, 105, 93);
      font-weight: 600;
      font-size: 18px;
    }
    &-value {
      .value {
        float: left;
        font-weight: 600;
        font-size: 24px;
        color: #1d974a;
      }
      .image {
        float: right;
      }
    }
    &-grow {
      color: #1d974a;
    }
  }
  .clear-both {
    clear: both;
    content: "";
  }
}
</style>
