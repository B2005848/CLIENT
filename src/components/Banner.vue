<template>
  <div>
    <div
      class="d-flex align-items-center"
      style="height: 25px; justify-content: space-evenly"
    >
      <div>
        <span>Hotline:</span>
        <span style="color: #1b51a3; font-weight: bold; margin-left: 10px"
          >1800 xxxx</span
        >
      </div>

      <div class="blink">
        Deal hot trong tháng
        <span
          style="
            background-color: yellowgreen;
            color: #ffffff;
            font-size: 10px;
            padding: 0px 5px 0px 5px;
          "
          >New</span
        >
      </div>
      <div>
        Góc sức khỏe
        <span
          style="
            background-color: yellowgreen;
            color: #ffffff;
            font-size: 10px;
            padding: 0px 5px 0px 5px;
          "
          >New</span
        >
      </div>

      <div>Chăm sóc khách hàng</div>

      <div>Giao nhanh 2h</div>
      <div>Hệ thống phòng khám</div>
    </div>
    <div class="category d-flex">
      <div class="flex-1">
        <select name="category" id="category">
          <option value="#" selected>DANH MỤC</option>
          <option v-for="cat in category" :key="cat.id" :value="cat.id">
            {{ cat.name }}
          </option>
        </select>
      </div>

      <div class="flex-1">
        <Input_search></Input_search>
        <a href="" v-for="cat in category" :key="cat.id" :value="cat.id">
          {{ cat.name }}
        </a>
      </div>

      <div style="border-left: #ffffff 2px solid; height: 50px"></div>
      <div class="flex-1">
        <span style="color: #ffffff; font-size: 25px; margin-right: 20px">
          <font-awesome-icon
            icon=" fa-cart-arrow-down"
            style="color: #ffffff; font-size: 25px"
          />(.)
        </span>
        <span>
          <font-awesome-icon
            icon=" fa-bell"
            shake
            style="color: #fbfe23; font-size: 25px"
        /></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category {
  text-align: center;
  background-color: #1b51a3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
}

a {
  text-decoration: none;
  font-size: 15px;
  margin-left: 20px;
  color: rgb(255, 255, 255);
}

.category select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  outline: none;
}

.category select:hover,
.category select:focus {
  border-color: #e74c3c; /* Màu viền khi hover hoặc focus */
}

.blink {
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>

<script setup>
import Input_search from "@/components/Input_search.vue";

import { onMounted, ref } from "vue";
const category = ref([]);

onMounted(() => {
  fetch("/product_types.json")
    .then((res) => res.json())
    .then((data) => (category.value = data.productTypes));
});
</script>
