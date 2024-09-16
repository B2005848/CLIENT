<style scoped>
/* Styles cho component */
</style>
<style scoped>
/* list-menu */
a {
  text-decoration: none;
  color: #1689db;
}

a:hover {
  color: #0b4e7d;
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

.title-logo {
  color: #01497c;
  font-style: italic;
}

.nav {
  background-color: #fffffe;
  box-shadow: rgba(186, 207, 245, 0.25) 0px 14px 28px,
    rgba(203, 218, 238, 0.22) 0px 10px 10px;
  height: 120px;
}

.item-3 div p {
  display: flex;
  justify-content: center;
  background-color: #d60035;
  color: #fffffe;
  font-weight: bold;
  padding: 15px;
  border-radius: 15px;
  margin: 10px;
}

* {
  margin: 0;
}

/* responsive */
@media screen and (max-width: 768px) {
  .nav {
    height: auto;
    padding: 20px;
  }

  .item-2 {
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  li {
    font-size: 10px;
  }

  .item-3 {
    display: none;
  }
}

.btn__logout {
  color: #1689db;
  border: none;
  background: none;
}
</style>
<template>
  <div class="nav row">
    <!-- LOGO-->
    <div class="item-1 text-center col-3 col-md-3 mt-3">
      <img src="../assets/Logo.svg" alt="ShineOnYou.Logo" />
      <p class="title-logo">"Chăm sóc tận tâm, sức khỏe trọn vẹn."</p>
    </div>

    <!-- MAIN MENU -->
    <div class="item-2 col-6">
      <div class="d-flex justify-content-center mt-5">
        <ul class="d-flex">
          <li>
            <router-link :to="{ name: 'home.page.product' }"
              >SẢN PHẨM</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home.page.list-doctor' }"
              >ĐỘI NGŨ BÁC SĨ</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'home.page.service',
              }"
              >DỊCH VỤ</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'home.page.booking',
              }"
              >ĐẶT LỊCH</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'home.page.contact',
              }"
              >LIÊN HỆ</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'home.page.about',
              }"
              >HƯỚNG DẪN KHÁC HÀNG</router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- LOGIN BUTTON -->
    <div class="item-3 col-3 mt-3">
      <div v-show="authStore.isLogged" class="text-center">
        <font-awesome-icon
          icon="fa-regular fa-user"
          bounce
          style="color: #74c0fc"
        />
        <span class="ms-2">
          Xin chào, ! {{ username }}_{{ first_name }}_{{ last_name }}</span
        >
        <button @click="logout" class="btn__logout">Đăng xuất</button>
      </div>
      <div v-show="!authStore.isLogged" class="text-center">
        <router-link :to="{ name: 'login.page' }">ĐĂNG NHẬP</router-link> /
        <router-link :to="{ name: 'sign_up.page' }"
          >ĐĂNG KÍ TÀI KHOẢN</router-link
        >
      </div>
      <div>
        <p>
          <font-awesome-icon
            size="xl"
            icon="fa-headset"
            style="color: #fafafa; margin-right: 10px"
          />
          TỔNG ĐÀI TƯ VẤN: 1900 1XX XXX
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authenticate-login";
import { onMounted } from "vue";
import { getInformationPatient } from "@/services/apiForPatient/getInfoPatient";
const authStore = useAuthStore();
const patient_id = authStore.patientId;

const { handleGetInformationPatient, first_name, last_name, username } =
  getInformationPatient();

onMounted(() => {
  handleGetInformationPatient(patient_id);
});
const logout = () => {
  authStore.logout();
  window.location.reload();
};
</script>
