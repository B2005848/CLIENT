<template>
  <div class="h-100">
    <div>
      <Navbar></Navbar>
    </div>
    <div class="row">
      <div class="col-md-2">
        <Sidebar></Sidebar>
      </div>

      <div class="col-md-10">
        <router-view class="fade-in"></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/animation__page.css";
* {
  margin: 0;
}

.col-md-2 {
  height: 100vh;
  background-color: #d8eefe;
}
</style>

<script setup>
import Navbar from "@/components/admin-page/Navbar.vue";
import Sidebar from "@/components/admin-page/Sidebar.vue";
</script>
