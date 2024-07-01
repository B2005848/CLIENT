<style scoped>
.product-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  overflow: hidden;
  transition: transform 0.2s;
  margin-bottom: 20px;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.product-info {
  padding: 10px;
}

.product-name {
  font-size: 15px;
  margin: 0;
  color: #333;
  line-height: 1.2; /* Để tăng khoảng cách giữa các dòng */
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Số dòng tối đa */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-description {
  font-size: 12px;
  color: #777;
  margin: 10px 0;
  line-height: 1.2; /* Để tăng khoảng cách giữa các dòng */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Số dòng tối đa */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-pricing {
  display: flex;
  align-items: center;
  margin: 5px 0;
}

.current-price {
  font-size: 15px;
  font-weight: bold;
  color: #e74c3c;
  margin-right: 10px;
}

.original-price {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}

.product-rating {
  display: flex;
  align-items: center;
}

.stars {
  font-size: 14px;
  color: #ffd700;
  margin-right: 5px;
}

.rating {
  font-size: 14px;
  color: #555;
  margin-right: 10px;
}

.sales {
  font-size: 14px;
  color: #777;
}
</style>
<template>
  <div class="product-card" v-for="product in products" :key="product.id">
    <img
      :src="getProductImage(product.id)"
      alt="Product Image"
      class="product-image"
    />
    <div class="product-info">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-pricing">
        <span class="current-price">{{
          currencyStore.formatCurrency(product.currentPrice)
        }}</span>
        <span class="original-price">{{
          currencyStore.formatCurrency(product.originalPrice)
        }}</span>
      </div>
      <div class="product-rating">
        <span class="stars">⭐️ {{ product.stars }}</span>
        <span class="rating">{{ product.rating }}</span>
        <span class="sales">{{ product.sales }} lượt bán</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCurrencyStore } from "../stores/define-vnd.js";
const currencyStore = useCurrencyStore();
const products = ref([]);
const productImages = ref([]);

const getProductImage = (productId) => {
  const productImage = productImages.value.find(
    (image) => image.product_id === productId
  );
  return productImage ? productImage.images[0] : "";
};

onMounted(() => {
  Promise.all([
    fetch("/list_products.json").then((response) => response.json()),
    fetch("/product_images.json").then((response) => response.json()),
  ]).then(([productsData, imagesData]) => {
    products.value = productsData.products;
    productImages.value = imagesData.product_images;
  });
});
</script>
