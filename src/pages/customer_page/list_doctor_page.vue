<template>
  <div class="main mt-2">
    <div class="card">
      <div class="card-header">
        <h2 style="font-weight: bold">
          Đội ngũ bác sĩ tại Phòng Khám
          <span style="color: #d60035">SHINEONYOU </span>
        </h2>
        <p>
          Phòng khám <span style="color: #d60035">ShineOnYou</span> được biết
          đến như một trung tâm y tế hàng đầu với đội ngũ chuyên gia giàu kinh
          nghiệm và uy tín. Chúng tôi tự hào về sự hiện diện của các giáo sư và
          bác sĩ đã có nhiều năm công tác tại các bệnh viện hàng đầu trong nước
          và đã được tu nghiệp tại các cơ sở y tế danh tiếng trên toàn thế giới.
          Với cam kết mang đến chất lượng chăm sóc sức khỏe cao nhất, phòng khám
          ShineOnYou không ngừng cập nhật những phương pháp điều trị tiên tiến
          và công nghệ hiện đại nhất để phục vụ khách hàng.
        </p>
        <div class="row">
          <!----------------------------------------- LIST DOCTORS--------------------------------- -->
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div class="card-body" style="padding: 0px">
              <div
                class="card"
                style="
                  width: 100%;
                  height: 100%;
                  border-radius: 10px;
                  overflow: hidden;
                "
              >
                <div class="card-body" style="padding: 15px">
                  <div v-for="doc in list_doctors" class="row mt-5">
                    <div class="col-md-4 col-sm-4 col-xs-4">
                      <img
                        :src="doc.image"
                        class="img-fluid"
                        alt="Dr. Nguyen Hoang Thanh"
                        style="border-radius: 10px"
                      />
                    </div>
                    <div class="col-md-8 col-sm-8 col-xs-8">
                      <h3 style="font-weight: bold">{{ doc.name }}</h3>
                      <p class="desc">
                        {{ doc.description }}
                      </p>
                      <p><a style="color: #0b4e7d" href="">Xem thêm</a></p>
                      <p style="font-size: 14px">
                        Chuyên khoa: {{ doc.specialty }}
                      </p>
                      <p style="font-size: 14px">Điện thoại: {{ doc.phone }}</p>
                      <p style="font-size: 14px">
                        Email:
                        <a href="mailto:info@shineweb.com.vn">{{
                          doc.email
                        }}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- --------------------------------------------LISR DEPARTMENTS--------------------------------------- -->
          <div class="col-md-6 col-sm-6 col-xs-6">
            <div>
              <ul class="list__departments">
                <li v-for="dep in list_departments" :key="dep.id">
                  <font-awesome-icon icon="fa-solid fa-angles-right" />
                  <a href="">KHOA {{ dep.name }}</a>
                </li>
              </ul>
            </div>

            <!-- ----------------------------FORM JOIN IN ----------------- -->
            <div class="form mt-5">
              <div class="text-center title__form">
                <h1>ĐĂNG KÝ TƯ VẤN</h1>
                <p>Đặt hẹn ngay để nhận tư vấn và xếp lịch khám kịp thời</p>
              </div>
              <form action="">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Họ và tên (*)"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Số điện thoại (*)"
                  />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Email" />
                </div>
                <div class="form-group">
                  <textarea
                    type="text"
                    class="form-control"
                    placeholder="Nội dung cần tư vấn..."
                  ></textarea>
                </div>

                <div class="form-group">
                  <button>XÁC NHẬN</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  color: #16161a;
}

.main {
  margin: 0 auto;
  width: 80%;
  padding: 10px;
  border-radius: 14px;
}

.list__departments {
  list-style: none;
  line-height: 1.5cm;
}

.list__departments li a {
  color: #16161a;
  text-decoration: none;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: underline;
}

.list__departments li a:hover {
  color: rgb(255, 129, 129);
}

.img-fluid {
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.desc {
  font-size: 14px;
  margin: 0;
  color: #333;
  line-height: 1.2; /* Để tăng khoảng cách giữa các dòng */
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Số dòng tối đa */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

form {
  background-color: rgb(185, 216, 250);
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 1;
}

.title__form {
  background-color: rgb(9, 128, 255);
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-bottom: none;
  border-radius: 13px;
  transform: translateY(10%);
  z-index: -1;
}

.title__form h1,
.title__form p {
  color: #f4f4f4;
}

form .form-group {
  margin-top: 10px;
  text-align: center;
}

.form .form-group button {
  border-radius: 15px;
  background-color: #307be7;
  border: #307be7;
  color: #fff;
  text-align: center;
  width: 200px;
  margin-top: 15px;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  position: relative; /* Để có thể sử dụng các phần tử giả */
  overflow: hidden; /* Để ẩn các phần tử giả bên ngoài nút */
  z-index: 1;
}

.form .form-group button::before {
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

.form .form-group button:hover::before {
  height: 200%;
}
</style>

<script setup>
import { onMounted, ref } from "vue";
const list_departments = ref([]);
const list_doctors = ref([]);
onMounted(() => {
  Promise.all([
    fetch("/list-departments.json")
      .then((res) => res.json())
      .then((data) => (list_departments.value = data.departments)),
    fetch("/list-doctors.json")
      .then((res) => res.json())
      .then((data) => (list_doctors.value = data.listdoctors)),
  ]).then(() => {
    console.log(list_departments.value);
    console.log(list_doctors.value);
  });
});
</script>
