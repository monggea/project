<template>

  <swiper
    direction="vertical"
    :modules="modules"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{delay:5000, disableOnInteraction: false}"
    class="notice-slide">

    <swiper-slide
      v-for="notice in filterNotice"
      :key="notice.id"
      @click="goToDetail(notice.id)"
      class="slide-content btn16"
      ><v-icon class="slide-icon">mdi-alert-circle-outline</v-icon>
      <span class="slide-title">{{ notice.title }}</span>

    </swiper-slide>
  </swiper> 

</template>


<script setup>
import {computed} from 'vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import notices from '@/data/noticeList.js'

const modules = [Autoplay]

const filterNotice = computed(() =>
  notices.filter(n => ['notice1','notice2','notice3','notice4'].includes(n.id))
)

function goToDetail(id) {
  window.location.href = `/notice/${id}`
}

</script>