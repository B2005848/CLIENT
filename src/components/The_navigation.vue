<template>
  <div class="nav row">
    <!-- LOGO-->
    <div class="d-flex justify-content-center col-3">
      <img src="../assets/Logo.svg" alt="ShineOnYou.Logo" />
    </div>

    <!-- MAIN MENU -->
    <div class="col-6 d-flex justify-content-center">
      <ul class="d-flex">
        <li><a href="">SẢN PHẨM</a></li>
        <li><a href="">ĐỘI NGŨ BÁC SĨ</a></li>
        <li><a href="">DỊCH VỤ</a></li>
        <li><a href="">ĐẶT LỊCH</a></li>
        <li><a href="">LIÊN HỆ</a></li>
        <li><a href="">HƯỚNG DẪN KHÁC HÀNG</a></li>
      </ul>
    </div>

    <!-- LOGIN BUTTON -->
    <div class="col-3">OKOK</div>
  </div>
</template>

<style scoped>
/* list-menu */
a {
  text-decoration: none;
  color: #00a5f5;
}
a:hover {
  color: #005fa3;
}
ul {
  list-style: none;
  font-size: 15px;
  font-family: "Noto Sans", sans-serif;
  font-weight: bold;
}

li {
  margin: 0 10px;
}
.col-6 {
  align-items: flex-end;
}

.nav {
  background-color: #fffffe;
  height: 100px;
}
</style>
