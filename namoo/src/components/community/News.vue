<template>
    <CommunityBase
        :items="newsList"
        type="news"
        :colSize="6"
        :searchItems="items"
        @card-click="onCardClick"
    />
</template>



<script setup>

import { ref } from 'vue'
import CommunityBase from '@/components/community/CommunityBase.vue'
import newsData from '@/data/newsList'

const imageMap = import.meta.glob('@/assets/img/news/*.{jpg,png}', {
  eager: true,
  import: 'default',
})

const newsList = newsData.map(item => ({
  ...item,
  img: imageMap[`/src/assets/img/news/${item.img}`],
  link: item.link || '#',
}))

function onCardClick(item){
    if(item.link){
        window.open(item.link, '_blank')
    }
}


/* 검색창 placeholder */
const items = ref([])

</script>