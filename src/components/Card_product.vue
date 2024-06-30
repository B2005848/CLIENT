<style scoped>
.product-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  overflow: hidden;
  transition: transform 0.2s;
  margin-bottom: 20px;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-name {
  font-size: 20px;
  margin: 0;
  color: #333;
}

.product-description {
  font-size: 14px;
  color: #777;
  margin: 10px 0;
}

.product-pricing {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.current-price {
  font-size: 18px;
  font-weight: bold;
  color: #e74c3c;
  margin-right: 10px;
}

.original-price {
  font-size: 14px;
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
  <div class="product-card">
    <img
      src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Product Image"
      class="product-image"
    />
    <div class="product-info">
      <h2 class="product-name">TÊN SẢN PHẨM</h2>
      <p class="product-description">Mô tả sản phẩm ngắn gọn và hấp dẫn.</p>
      <div class="product-pricing">
        <span class="current-price">50.000đ</span>
        <span class="original-price">75.000đ</span>
      </div>
      <div class="product-rating">
        <span class="stars">⭐️⭐️⭐️⭐️⭐️</span>
        <span class="rating">4.5</span>
        <span class="sales">192 lượt bán</span>
      </div>
    </div>
  </div>
</template>
