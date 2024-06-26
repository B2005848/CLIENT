<style scoped>
.list__doctor {
  border: solid 1px #808181;
  border-radius: 10px;
  height: 500px;
  overflow-y: auto;
}

.time {
  background-color: #cee0fa;
  margin-left: 10px;
  width: 100px;
  border: none;
  border-radius: 14px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}

.time:hover {
  transition: ease-in 0.3s;
  background-color: #78adf8;
  color: #ffffff;
  transform: translateY(-10%);
}

.time:focus {
  transition: ease-in 0.3s;
  background-color: #78adf8;
  color: #ffffff;
  transform: translateY(-10%);
}

.btn__submit {
  border-radius: 15px;
  background-color: #307be7;
  border: #307be7;
  color: #fff;
  text-align: center;
  width: 200px;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  position: relative; /* Để có thể sử dụng các phần tử giả */
  overflow: hidden; /* Để ẩn các phần tử giả bên ngoài nút */
  z-index: 1;
}

.btn__submit::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 0;
  background-color: #4389ec;
  transition: height 0.3s ease-in-out, top 0.3s ease-in-out;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.btn__submit:hover::before {
  height: 200%;
}

.img-fluid {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
}

.info__title {
  font-weight: bold;
}
</style>

<template>
  <div class="list__doctor form-control">
    <div v-for="doctor in doctors" :key="doctor.id" class="card mb-3 p-5 mt-2">
      <div class="card-title row">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <img
            :src="doctor.image"
            alt="Doctor Image"
            class="img-fluid rounded-circle"
            width="250"
          />
        </div>
        <div class="col-md-6 row">
          <h5>{{ doctor.name }}</h5>
          <div class="col">
            <p class="info__title">Chuyên Khoa:</p>
            <p class="info__title">Số điện thoại:</p>
            <p class="info__title">Email:</p>
          </div>
          <div class="col">
            <p>{{ doctor.specialty }}</p>
            <p>{{ doctor.phone }}</p>
            <p>{{ doctor.email }}</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div
            class="col-md-6 d-flex align-items-center justify-content-center"
          >
            <button
              class="time me-2"
              v-for="time in doctor.availableTimes"
              :key="time"
            >
              {{ time }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-4 mt-5 text-center">
    <router-link :to="{ name: 'home.page.booking.select_service_booking' }">
      <button type="submit" class="btn__submit">TIẾP THEO</button></router-link
    >
  </div>
</template>

<script setup>
import { ref } from "vue";

const doctors = ref([
  {
    id: 1,
    name: "Dr. Nguyễn Văn A",
    phone: "096215978",
    specialty: "Tim mạch",
    email: "abc@2014gmail.com",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availableTimes: ["8:00", "9:00", "10:00", "11:00"],
  },

  {
    id: 4,
    name: "Dr. Phạm Văn D",
    phone: "0123456789",
    specialty: "Răng hàm mặt",
    email: "abc@2214gmail.com",
    image:
      "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availableTimes: ["8:00", "9:00", "10:00", "11:00"],
  },
]);
</script>
