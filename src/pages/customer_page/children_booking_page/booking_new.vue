<template>
  <h3 class="text-center mt-5">NHẬP THÔNG TIN BỆNH NHÂN</h3>

  <div class="container mt-5">
    <div class="row">
      <!-- column-1 -->
      <div class="col-md-6">
        <div class="row">
          <!-- FIRST NAME -->
          <div class="col">
            <label class="mb-2" for="sub-name"
              >Họ và tên lót <i>(Có dấu)</i>
              <sup class="note__star">*</sup></label
            >
            <input
              type="text"
              id="sub-name"
              class="form-control"
              placeholder="Vui lòng nhập họ và tên lót"
            />
          </div>

          <!-- LAST NAME -->
          <div class="col">
            <label class="mb-2" for="first-name"
              >Tên<i> (Có dấu)</i> <sup class="note__star">*</sup></label
            >
            <input
              type="text"
              id="first-name"
              class="form-control"
              placeholder="Vui lòng nhập tên"
            />
          </div>
        </div>

        <!-- BIRTH DAY -->
        <div class="row mt-4">
          <label for="birthday" class="mb-2"
            >Ngày / tháng / năm sinh <sup class="note__star">*</sup></label
          >
          <div class="col">
            <select class="form-control" id="day">
              <option v-for="n in 31" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
          <div class="col">
            <select class="form-control" id="month">
              <option v-for="m in 12" :key="m" :value="m">{{ m }}</option>
            </select>
          </div>
          <div class="col">
            <select class="form-control" id="year">
              <option v-for="y in getYearRange()" :key="y" :value="y">
                {{ y }}
              </option>
            </select>
          </div>
        </div>

        <!-- GENDER -->
        <div class="mt-4">
          <label class="mb-2" for="gender"
            >Giới tính <sup class="note__star">*</sup></label
          >
          <br />
          <input
            class="me-1"
            type="radio"
            name="gender"
            id="male"
            value="male"
          />
          <label class="me-5" for="male">Nam</label>
          <input
            class="me-1"
            type="radio"
            name="gender"
            id="female"
            value="female"
          />
          <label for="female">Nữ</label>
        </div>

        <!-- MAJOR -->
        <div class="mt-4">
          <label class="mb-2" for="major"
            >Nghề nghiệp <sup class="note__star">*</sup></label
          >
          <select class="form-control" name="major" id="job">
            <option v-for="mj in getMjRange" :key="mj" :value="mj">
              {{ mj }}
            </option>
          </select>
        </div>
      </div>

      <!-- column-2 -->
      <div class="col-md-6">
        <!-- NUMBER PHONE -->
        <div>
          <label class="mb-2" for="phone"
            >Số điện thoại <sup class="note__star">*</sup></label
          >

          <input
            type="text"
            name="phone"
            id=""
            class="form-control"
            placeholder="Vui lòng nhập số điện thoại liên lạc"
          />
        </div>

        <!-- CITIZEN ID -->
        <div class="mt-4">
          <label class="mb-2" for="citizen">Số CCCD/CMND</label>
          <input
            type="text"
            class="form-control"
            placeholder="Nhập số căn cước công dân hoắc CMND"
          />
        </div>

        <!-- TINH -->
        <div class="mt-4">
          <label class="mb-2" for="tinh">Tỉnh/Thành phố</label>
          <select class="form-control" name="tinh" id="tinh">
            <option v-for="t in tinhRange" :key="t.code" :value="t.name">
              {{ t.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- MT-4 MB-2 -->
<script setup>
import { ref, onMounted } from "vue";
const currentYear = new Date().getFullYear();

// range job
const getMjRange = [
  "Lập trình viên",
  "Kiến trúc sư",
  "Kỹ sư xây dựng",
  "Giáo viên",
  "Nhân viên kinh doanh",
  "Nhân viên marketing",
  "Nhân viên IT",
  "Nhân viên tài chính",
  "Nhân viên nhân sự",
  "Nhân viên bán hàng",
  "Nội trợ",
  "Học sinh / Sinh viên",
  "Công viên chức nhà nước",
  "Bác sĩ",
  "Dược sĩ",
  "Khác...",
];

// Range provinces
const tinhRange = [];
onMounted(async () => {
  try {
    const response = await axios.get("/CLIENT/public/provinces.json");
    tinhRange.value = response.data;
  } catch (error) {
    console.error("Error fetching provinces:", error);
  }
});

// Range Year
const getYearRange = () => {
  const year = [];
  for (let i = currentYear; i >= 1900; i--) {
    year.push(i);
  }
  return year;
};
</script>
<style scoped>
@import "../../../assets/css/pages/customer/booking_new.css";
</style>
