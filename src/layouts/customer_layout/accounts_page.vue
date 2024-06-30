<template>
  <div class="layout-background">
    <div class="container lg-grid">
      <div class="text-center">
        <router-link to="/homepage/product">
          <img src="@/assets/Logo.svg" width="350" alt="" />
          <p class="title-logo">"Chăm sóc tận tâm, sức khỏe trọn vẹn."</p>
        </router-link>
      </div>
      <div class="logohome"></div>
      <div>
        <router-view class="fade-in"></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-background {
  background-color: #f4effc;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
}

.lg-grid {
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  height: 100vh;
}

.container.lg-grid div {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* style none a */
.title-logo,
a {
  text-decoration: none;
  color: #01497c;
  font-style: italic;
}

.logohome {
  border-right: solid 2px;
  height: 50%;
  margin: auto;
  opacity: 0.2;
}

.fade-in {
  animation: fadeIn 0.7s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
