<style scoped>
* {
  margin: 0;
}

.d-flex {
  background-color: #5198fa;
  padding: 10px;
  height: 30px;
  margin: 0;
}

.d-flex:nth-child(1),
.d-flex:nth-child(2) {
  justify-content: center;
  align-items: center;
}

p {
  color: #ffffff;
  font-size: 15px;
  margin-left: 15px;
}
</style>
<template>
  <div class="d-flex justify-content-between">
    <div>
      <p>ShineOnYou - Administrators</p>
    </div>
    <div>
      <font-awesome-icon
        style="color: aliceblue; font-size: 20px"
        icon="fa-bars-staggered"
      />
    </div>
  </div>
</template>
