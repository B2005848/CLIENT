<style scoped>
.text-center {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
}
.box-input {
  position: relative;
}

#input-search {
  width: 500px;
  padding: 5px 40px 5px 10px;
  border-radius: 13px;
}

#input-search-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
<template>
  <div class="text-center">
    <div class="box-input position-relative">
      <input
        id="input-search"
        type="text"
        placeholder="Thực phẩm chức năng, triệu chứng và vitamin... "
        size="50"
      />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        style="color: #74c0fc"
        id="input-search-icon"
      />
    </div>
  </div>
</template>
