<template>
  <div v-if="SelectItem" class="form">
    <select class="form-select">
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
  created() {
    console.log(this.FormItem);
  },
};
</script>

<style lang="scss" scoped>
.form-select {
  border: 1px solid #d2d4d3;
  font-weight: 500;
  color: #838881;
  height: 40px;
}
</style>
