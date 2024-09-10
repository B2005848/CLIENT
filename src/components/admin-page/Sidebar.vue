<!-- ------------------------------------------CSS----------------------------------->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  width: 100%;
}

ul {
  margin-left: 10px;
  list-style: none;
  line-height: 1.5cm;
  padding-top: 20px;
  height: 100vh;
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
<!-- -----------------------------------TEMPLATE------------------------------ -->
<template>
  <div class="main">
    <ul>
      <li>
        <router-link :to="{ name: 'admin.dashboard' }"
          >THỐNG KÊ DOANH THU</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'admin.emp' }" href="#admin"
          >QUẢN LÍ NHÂN VIÊN</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'admin.patients' }" href="#admin"
          >QUẢN LÍ BỆNH NHÂN</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'admin.products' }" href="#admin"
          >QUẢN LÍ SẢN PHẨM</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'admin.services' }" href="#admin"
          >QUẢN LÍ DỊCH VỤ</router-link
        >
      </li>

      <li>
        <router-link :to="{ name: 'admin.booking' }" href="#admin"
          >QUẢN LÍ LỊCH HẸN</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'admin.category_products' }" href="#admin"
          >QUẢN LÍ DANH MỤC SẢN PHẨM</router-link
        >
      </li>

      <li>
        <router-link :to="{ name: '' }" href="#admin">CÁC YÊU CẦU</router-link>
      </li>
      <li>
        <router-link :to="{ name: '' }" href="#admin">CÀI ĐẶT</router-link>
      </li>
    </ul>
  </div>
</template>
