<style scoped>
@import "@/assets/css/animation__page.css";
* {
  margin: 0;
}
</style>
<template>
  <navigation></navigation>
  <!-- <Input_search></Input_search> -->
  <!-- <TheBody></TheBody> -->
  <router-view class="fade-in"></router-view>
  <hr class="mt-3" />
  <TheFooter></TheFooter>
</template>

<script setup>
import navigation from "@/components/The_navigation.vue";
// import TheBody from "@/components/The_body.vue";
// import Input_search from "@/components/Input_search.vue";
import TheFooter from "@/components/The_footer.vue";
</script>
