<template>
  <div class="taikhoan">
    <div class="taikhoan-header">
      <div class="taikhoan-hearder-search-text">
        <div class="td">
          <input type="text" v-model="search" placeholder=" Tìm kiếm..." />
        </div>
        <div class="td" id="s-cover">
          <button @click="fetchData">
            <i class="icon search fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>

    <button class="taikhoan-hearder-add btn" @click="handleCreate">
      <font-awesome-icon icon="fa-regular fa-file-lines" />
      <span> Tạo mới liên hệ</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
