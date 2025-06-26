<script setup>
import { ref, onMounted, onUpdated, nextTick } from "vue";

const icons = ["mdi-twitter", "mdi-instagram", "mdi-youtube", "mdi-web"];

const contactGroupRef = ref(null);
const privacyGroupRef = ref(null);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function adjustRowHeights() {
  if (
    window.innerWidth > 600 &&
    contactGroupRef.value &&
    privacyGroupRef.value
  ) {
    const contactHeight = contactGroupRef.value.offsetHeight;
    const privacyHeight = privacyGroupRef.value.offsetHeight;
    const maxHeight = Math.max(contactHeight, privacyHeight);

    contactGroupRef.value.style.minHeight = maxHeight + "px";
    privacyGroupRef.value.style.minHeight = maxHeight + "px";
  } else {
    if (contactGroupRef.value && privacyGroupRef.value) {
      contactGroupRef.value.style.minHeight = null;
      privacyGroupRef.value.style.minHeight = null;
    }
  }
}

onMounted(() => {
  adjustRowHeights();
  window.addEventListener("resize", adjustRowHeights);
});

onUpdated(() => {
  nextTick(() => {
    adjustRowHeights();
  });
});
</script>

<template>
  <v-footer
    app
    class="d-flex flex-column pa-0 border-t"
    color="white"
    style="padding: 0; margin: 0; position: relative;"
  >
    <!-- TOP 버튼 -->
    <div
      class="scroll-to-top-wrapper position-absolute d-none d-sm-block"
      style="right: 16px; bottom: 12px;"
    >
      <v-btn icon class="scroll-to-top" @click="scrollToTop" variant="text">
        <div class="d-flex flex-column align-center">
          <v-icon size="24">mdi-chevron-up</v-icon>
          <span class="text-caption font-weight-medium">TOP</span>
        </div>
      </v-btn>
    </div>

    <!-- 로고 + 텍스트 묶음 -->
    <div
      class="d-flex justify-space-between align-center w-100 mb-2 px-4 mt14 footer-top-row"
    >
      <div class="logo1" />
      <div class="footer-right-combined d-flex flex-column align-end">
        <div class="footer-right-text">
          <h5 class="data14 mb-1 family-site"><strong>FAMILY SITE</strong></h5>
          <h3 class="data24 namoo-shop"><strong>NAMOO SHOP</strong></h3>
        </div>
      </div>
    </div>

    <!-- SNS 아이콘 -->
    <div class="d-flex sns-icons w-100 px-4 mb7">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        size="small"
        variant="plain"
      />
    </div>

    <!-- 연락처 + 개인정보 -->
    <v-row class="w-100 px-4 " dense>
      <v-col
        cols="12"
        sm="6"
        class="contact-address-group d-flex flex-column data12 mb6 "
        ref="contactGroupRef"
      >
        <div class="d-flex align-center contact-row mb-1">
          <strong class="me-2">TEL</strong>
          <p class="me-4">+82.2.3444.1919</p>
          <strong class="me-2">| FAX</strong>
          <p>+82.2.3444.1570</p>
        </div>
        <p class="mb-1">06071 서울특별시 강남구 도산대로 102길 17(청담동 54-3)</p>
        <p>17, Dosan-daero 102-gil, Gangnamo-gu, Seoul, Korea</p>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        class="privacy-policy-group d-flex flex-column data12 mb6"
        ref="privacyGroupRef"
      >
        <h5 class="mb-1"><strong>개인정보 방침</strong></h5>
        <h5><strong>©Namooactors Entertainment All Rights Reserved.</strong></h5>
      </v-col>
    </v-row>
  </v-footer>
</template>

