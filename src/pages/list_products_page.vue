<style scoped>
.product-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
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
  <div>
    <Banner></Banner>
  </div>
  <div class="mt-5">
    <div class="container">
      <h2 class="title">GỢI Ý HÔM NAY</h2>
      <div class="product-list mt-3">
        <Card_product></Card_product>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card_product from "@/components/Card_product.vue";
import Banner from "@/components/Banner.vue";
</script>
