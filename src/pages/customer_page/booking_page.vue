<template>
  <div class="main mt-5">
    <div class="title text-center">
      <h3>ĐĂNG KÍ KHÁM BỆNH</h3>

      <p style="color: #6b6b6b; margin-top: 15px">
        Bạn đã từng khám tại phòng khám Shine On You chưa?
      </p>

      <div class="option__booking row">
        <div class="option__1 col-6">
          <router-link :to="{ name: 'home.page.booking.old' }">
            <button
              :style="corlorButtonCursor1"
              @click="buttonCorsor1"
              type="button"
            >
              ĐÃ TỪNG KHÁM
            </button></router-link
          >
          <p>(Nhập mã bệnh nhân)</p>
        </div>

        <div class="option__2 col-6">
          <router-link :to="{ name: 'home.page.booking.new' }">
            <button
              @click="buttonCorsor2"
              :style="corlorButtonCursor2"
              type="button"
            >
              CHƯA TỪNG KHÁM
            </button></router-link
          >
          <p>(Tạo hồ sơ mới)</p>
        </div>
      </div>
      <p class="note">
        Lưu ý thông tin phải chính xác khi điền vào, những trường bắt buộc không
        được bỏ trống (<sup style="color: red; font-size: 15px">*</sup>)
      </p>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script setup>
import {
  corlorButtonCursor1,
  corlorButtonCursor2,
  buttonCorsor1,
  buttonCorsor2,
} from "../../assets/js/pages/customer/booking_page.js";
</script>
<style scoped>
@import "../../assets/css/pages/customer/booking_page.css";
</style>
