<style scoped>
.btn-log {
  background-color: #1689db;
  color: aliceblue;
  border: none;
  border-radius: 13px;
  padding: 5px 50px 5px 50px;
}
.box-input {
  position: relative;
  margin-bottom: 15px;
}

#input-pass {
  width: 100%;
  padding-right: 40px;
}

#show-pass {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #7f7f7f;
}
</style>
<template>
  <div class="container">
    <div class="form">
      <h1 class="text-center">ĐĂNG KÍ TÀI KHOẢN</h1>
      <p class="text-center">Nhanh chóng và dễ dàng</p>

      <form class="mt-5" action="">
        <!-- USERNAME -->
        <div class="box-input">
          <input
            class="form-control"
            type="text"
            placeholder="Số điện thoại hoặc email đăng kí"
            size="50"
          />
        </div>

        <!-- PASSWORD -->
        <div class="box-input">
          <input
            class="form-control"
            :type="passwordFieldType"
            placeholder="Mật khẩu"
            size="50"
            id="input-pass"
          />
          <font-awesome-icon
            :icon="iconPasswd"
            @click="showPass"
            id="show-pass"
          />
        </div>

        <!-- RE TYPE PASSWD -->
        <div class="box-input">
          <input
            class="form-control"
            :type="re_passwordFieldType"
            placeholder="Nhập lại mật khẩu"
            size="50"
            id="input-pass"
          />
        </div>

        <div class="form-group mb-4">
          <p>
            Bạn đã có tài khoản?
            <router-link :to="{ name: 'login.page' }"
              >Đi đến trang đăng nhập
            </router-link>
          </p>
        </div>
        <div class="form-group text-center">
          <button type="submit" class="btn-log">ĐĂNG KÍ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const passwordFieldType = ref("password");
const re_passwordFieldType = ref("password");
const iconPasswd = ref(["fa", "fa-eye"]);

const showPass = () => {
  if (passwordFieldType.value === "password") {
    passwordFieldType.value = "text";
    re_passwordFieldType.value = "text";
    iconPasswd.value = ["fa", "fa-eye-slash"];
  } else {
    passwordFieldType.value = "password";
    re_passwordFieldType.value = "password";
    iconPasswd.value = ["fa", "fa-eye"];
  }
};
</script>
