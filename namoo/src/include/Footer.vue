<template>

        
      <v-footer
        app
        class="d-flex flex-column pa-0 foo"
        color="white"
        
        style="padding: 0; margin: 0; position: relative;"
      >
        <div class="d-flex justify-space-between align-center w-100 mb-4 border-t" >
          <div class="logo1 mt-8"></div>
          <div class="text-end mt-8 ">
             <v-btn
                icon
                class="scroll-to-top "
                @click="scrollToTop"
                color="default"
                variant="text"
            >
                <div class="d-flex flex-column align-center">
                <v-icon size="24">mdi-chevron-up</v-icon>
                <span class="text-caption font-weight-medium">TOP</span>
                </div>
            </v-btn>
          </div>
        </div>

        <div class="d-flex justify-end w-100 mt-1 data14 mr6">
          <h5><strong>FAMILY SITE</strong></h5>
        </div>

        <div class="d-flex justify-end w-100 data36 mr6 ">
          <h3><strong>NAMOO SHOP</strong></h3>
        </div>

        <div class="d-flex justify-end w-100 mb-3 mr6">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            size="small"
            variant="plain"
          />
        </div>

        <div class="d-flex w-100 justify-start align-center mt-2 data12 ml6 ">
          <strong class=" me-2 mt-2">TEL</strong><p class=" me-4 mt-2">+82.2.3444.1919</p>
          <strong class="me-2 mt-2">| FAX</strong><p class="mt-2">+82.2.3444.1570</p>
        </div>

        <div class="d-flex justify-space-between w-100 data12 ml6">
          <p>06071 서울특별시 강남구 도산대로 102길 17(청담동 54-3)</p>
          <h5><strong  class="mt-6 mr6">개인정보 방침</strong></h5>
        </div>

        <div class="d-flex justify-space-between w-100 data12 ml6  ">
          <p>17, Dosan-daero 102-gil, Gangnamo-gu, Seoul, Korea</p>
          <h5 class=" mt-1 mb-6 mr6"><strong>©Namooactors Entertainment All Rights Reserved.</strong></h5>
        </div>
        
      </v-footer>

</template>

<script setup>
const icons = ['mdi-twitter', 'mdi-instagram', 'mdi-youtube', 'mdi-instagram']
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>

<style >
.logo1 {
  background-image: url("../assets/img/logo2.png");
  background-size: cover;
  width: 150px;
  height: 50px;
  margin-left:20px;
}

.data12{
    font-size:12px;
}
.data36{
    font-size:36px;
}
.data14{
    font-size:14px;
}
.scroll-to-top {
  position: absolute;

  right: 16px;
  z-index: 999;
}
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

.scroll-to-top {
  position: relative;
  bottom: 16px;  /* bottom 지정 꼭 필요 */
  right: 16px;
  z-index: 999;
}
.main-grow {
  flex-grow: 1;
}

</style>
