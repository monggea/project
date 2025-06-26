<template>
  <v-app>
    <!-- 헤더 컴포넌트가 AppBar라면 app 속성 필요 -->
    <Header />

    <!-- 메인 콘텐츠 -->
    <v-main class="main-grow">
      <router-view /> <!-- 또는 페이지 컴포넌트 삽입 -->
    </v-main>

    <!-- 푸터 -->
    <Footer />
  </v-app>
</template>

<script setup>
import Header from './include/Header.vue';
import Footer from './include/Footer.vue';
</script>

<style>
.main-grow {
  flex-grow: 1;
}
.v-main {
  --v-layout-bottom: 0px !important;
}
</style>