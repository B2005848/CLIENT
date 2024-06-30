<template>
  <div class="main">
    <ul>
      <li>
        <router-link :to="{ name: 'admin.dashboard' }"
          >THỐNG KÊ DOANH THU</router-link
        >
      </li>
      <li><a href="#admin">QUẢN LÍ NGƯỜI DÙNG</a></li>
      <li><a href="#admin">QUẢN LÍ SẢN PHẨM</a></li>
      <li><a href="#admin">QUẢN LÍ LỊCH HẸN</a></li>
      <li><a href="#admin">QUẢN LÍ DANH MỤC SẢN PHẨM</a></li>
      <li><a href="#admin">QUẢN LÍ TAG SẢN PHẨM</a></li>
      <li><a href="#admin">CÀI ĐẶT</a></li>
    </ul>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  margin-left: 10px;
  list-style: none;
  line-height: 1.5cm;
  padding-top: 20px;
}

a {
  color: #094067;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: #fa8181;
}

a:focus {
  color: #fa8181;
}
</style>
