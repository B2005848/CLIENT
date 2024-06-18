<style scoped>
.product-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}

.title {
  padding: 2px 0px 2px 0px;
  margin-left: 10px;
  border-radius: 10px;
  color: #e74c3c;
  text-align: center;
}
</style>

<template>
  <Input_search></Input_search>

  <div class="mt-5">
    <div class="container">
      <h2 class="title">GỢI Ý HÔM NAY</h2>
      <div class="product-list mt-3">
        <Card_product v-for="n in 12" :key="n"></Card_product>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card_product from "@/components/Card_product.vue";
import Input_search from "@/components/Input_search.vue";
</script>
