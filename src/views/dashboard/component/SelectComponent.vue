<template>
  <div v-if="SelectItem" class="form ">
    <select class="form-select custom-select custom-select-sm">
      <option selected>{{ SelectItem.nameForm }}</option>
      <option value="1">{{ SelectItem.valueForm }}</option>
      <option value="2">2021</option>
      <option value="3">2022</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    SelectItem: {
      type: Object,
    },
  },
  created(){
    console.log(this.FormItem);
  }
};
</script>

<style lang="scss" scoped>
.form-select{
  border: 1px solid #d2d4d3;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #838881;
}
</style>
