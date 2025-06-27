<template>
    <CommunityBase
        :items="noticeList"
        type="notice"
        :colSize="12"
        :searchItems="items"
        @card-click="onCardClick">
    </CommunityBase>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import CommunityBase from '@/components/community/CommunityBase.vue'
import NoticeSlide from '@/components/community/NoticeSlide.vue'
import noticeList from '@/data/noticeList'

const router = useRouter()

function onCardClick(item){
    router.push({name:'NoticeDetail', params:{id:item.id}})
}

/* 검색창 placeholder */
const items = ref([])
</script>