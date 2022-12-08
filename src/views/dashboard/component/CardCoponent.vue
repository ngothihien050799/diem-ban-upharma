<template>
  <div v-if="CardItem" class="card" :style="{ boxShadow: CardItem.bgColor }">
    <div class="card-info m-3">
      <div class="card-info-header">
         <h6 class="name">{{ CardItem.nameCard }}</h6>
      </div>
      <div class="card-info-value">
       
        <h2 class="value">{{ CardItem.valueCard }}</h2>
         <img class="image" :src="CardItem.urlIconCard" alt="" />
         <div class="clear-both"></div>
      </div>
      <!-- <div class="card-info-icon">
       
      </div> -->
       <div class="card-info-grow" >
      
      <span class=""><i :class="CardItem.iconUpDown"></i>  {{CardItem.growthCard}}</span>
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
  
    border-radius: 20px;
  &-info {
    text-align: left;
    .name {
      color: rgb(93, 105, 93);
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
    }
    &-value {
      
      .value{
        float: left;
        font-weight: 700;
        font-size: 30px;
        line-height: 40px;
        color: #1d974a;
      }
      .image{
        float: right;
      }
    }
    &-grow{
      color: #1D974A;
    }
  }
  &-grow {
    
    padding: 10px 10px 10px 15px;
    font-size: 18px;

    .text {
      margin-left: 15px;
    }
  }
  .clear-both{
    clear: both;
      content: "";
  }
}
</style>
