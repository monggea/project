<template>
  <v-app>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </v-app>
</template>

<script setup>
import Header from './include/Header.vue';
import Footer from './include/Footer.vue';
</script>