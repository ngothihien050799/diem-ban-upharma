<template>
  <div v-if="FormItem" class="form ">
    <select class="form-select custom-select custom-select-sm p-2">
      <option selected>{{ FormItem.nameForm }}</option>
      <option value="1">{{ FormItem.valueForm }}</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    FormItem: {
      type: Object,
    },
  },
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
