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
  color: #7f7f7f; /* Màu của biểu tượng */
}
</style>
<template>
  <div class="container">
    <div class="form">
      <h1 class="text-center">ĐĂNG NHẬP</h1>
      <form class="mt-5" @submit.prevent="handleLogin">
        <!-- USERNAME -->
        <div class="box-input">
          <input
            v-model="loginData.username"
            class="form-control mb-4"
            type="text"
            placeholder="Số điện thoại hoặc email"
            size="50"
          />
        </div>

        <!-- PASSWORD -->
        <div class="box-input position-relative">
          <input
            v-model="loginData.password"
            class="form-control mb-4"
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

        <div v-if="errorMessage" class="alert alert-danger">
          {{ errorMessage }}
        </div>
        <div class="form-group">
          <p>
            Bạn chưa có tài khoản?
            <router-link :to="{ name: 'sign_up.page' }"
              >Đi đến trang đăng kí</router-link
            >
          </p>
        </div>
        <div class="form-group mb-4">
          <a href="#"> Forgotten password? </a>
        </div>
        <div class="form-group text-center">
          <button type="submit" class="btn-log">ĐĂNG NHẬP</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useLoginPatient } from "@/services/apiForPatient/useLoginPatient";

const { loginData, handleLogin, errorMessage } = useLoginPatient();
const passwordFieldType = ref("password");
const iconPasswd = ref("fa-eye");

const showPass = () => {
  if (passwordFieldType.value === "password") {
    passwordFieldType.value = "text";
    iconPasswd.value = ["fa", "fa-eye-slash"];
  } else {
    passwordFieldType.value = "password";
    iconPasswd.value = ["fa", "fa-eye"];
  }
};
</script>
