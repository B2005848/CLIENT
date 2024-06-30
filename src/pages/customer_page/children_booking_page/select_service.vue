<style scoped>
.container {
  border: #b3b3b3 solid 1px;
  border-radius: 10px;
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

a {
  text-decoration: none;
}

.list__service {
  border: solid 1px #808181;
  border-radius: 10px;
  height: 200px;
  overflow-y: auto;
}

.thead {
  background-color: rgb(187, 215, 255);
  padding: 10px;
  border-radius: 10px;
}

.btn__select {
  background-color: #55b5f9;
  color: #fff;
  font-weight: bold;
  border: none;
  width: 100px;
  border-radius: 14px;
}

.btn__select:hover {
  background-color: rgb(245, 201, 201);
}

.btn__select:focus {
  background-color: rgb(255, 105, 105);
}
</style>
<template>
  <Theproccessbooking></Theproccessbooking>

  <!-------------------------------- Chọn dịch vụ khám --------------------------------->
  <div class="container">
    <div class="mb-5 row">
      <div class="col">
        <input
          class="form-control mt-5"
          type="text"
          placeholder="Nhập tên dịch vụ cần tìm..."
        />
      </div>

      <div class="col">
        <button class="btn btn-primary mt-5">Tìm kiếm</button>
      </div>
    </div>

    <!-- ------------------DATE__BOOKING---------------- -->
    <div class="select__date__booking">
      <h4 class="mb-2">
        <span style="border-left: solid royalblue 5px; margin-right: 3px"></span
        >CHỌN NGÀY KHÁM
      </h4>
      <div class="mb-5">
        <input type="date" class="form-control" />
      </div>
    </div>

    <!-- --------------SERVICE__BOOKING---------------------- -->
    <h4 class="mb-2">
      <span style="border-left: solid royalblue 5px; margin-right: 3px"></span
      >CHỌN DỊCH VỤ KHÁM
    </h4>

    <div class="thead d-flex text-center row mb-2 form-control">
      <div class="col"><b>STT</b></div>
      <div class="col"><b>Tên dịch vụ</b></div>
      <div class="col"><b>Giá</b></div>
      <div class="col"><b>Chọn</b></div>
    </div>
    <div class="list__service text-center form-control">
      <div
        style="line-height: 1.5cm; margin-top: 10px"
        class="row align-items-start"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="col">
          {{ index + 1 }}
        </div>
        <div class="col">{{ service.name }}</div>
        <div class="col">{{ useCurrency.formatCurrency(service.price) }}</div>
        <div class="col">
          <router-link
            :to="{ name: 'home.page.booking.select_doctor_booking' }"
          >
            <button
              @click="selectService(index)"
              type="button"
              class="btn__select"
            >
              {{ service.selected ? "ĐÃ CHỌN" : "CHỌN" }}
            </button></router-link
          >
        </div>
      </div>
    </div>
    <h4 class="mb-2 mt-5">
      <span style="border-left: solid royalblue 5px; margin-right: 3px"></span
      >VUI LÒNG CHỌN BÁC SĨ VÀ GIỜ KHÁM
    </h4>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Theproccessbooking from "@/components/proccess_booking.vue";
import { useProccess } from "@/stores/proccess_booking.store";

const useProccessStore = useProccess();
useProccessStore.setStep(2);
// define price VNĐ
import { useCurrencyStore } from "@/stores/define-vnd";
const useCurrency = useCurrencyStore();
const services = ref([
  {
    id: 1,
    name: "Khám tim mạch",
    description: "Khám tim mạch",
    price: 100000,
  },
  {
    id: 2,
    name: "Khám tai mũi họng",
    description: "Khám tai mũi họng",
    price: 150000,
  },
  {
    id: 3,
    name: "Khám răng hàm mặt",
    description: "Khám răng hàm mặt",
    price: 200000,
  },
]);

const selectService = (index) => {
  services.value.forEach((service, i) => {
    service.selected = i == index;
  });
};
</script>
