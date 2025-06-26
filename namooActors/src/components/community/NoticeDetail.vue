<template>
    <v-container v-if="notice" fluid>
    <v-row class="grid12 bottom-title">
        <v-col cols="12"><h1 class="title72 top-title">Notice.</h1></v-col>

        <v-col cols="12" class="align-bottom py-0">

            <!-- ================
            세부 카테고리 스위치
            ================== -->
            <div>
            <v-btn to="/news" class="top-btn"
            :class="$route.path.startsWith('/news') ? 'active-btn' : ''"
                >News
            </v-btn>
            
            <v-btn to="/notice" class="top-btn"
                :class="$route.path.startsWith('/notice') ? 'active-btn' : ''"
                >Notice
            </v-btn>
            </div>
        </v-col>
    </v-row>

    <v-row class="grid12 m85">
        <div class="top-line ml-3"></div>
        <!-- ================
        게시글
        ================== -->
        <v-col cols="12">
            <v-card class="blog-page">
                <v-card-title class="stitle36-2 mt-4">{{notice.title}}</v-card-title>
                <v-card-subtitle class="date">{{notice.date}}</v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text class="body16" v-html="notice.content"></v-card-text>

                <!-- ================
                다음글/이전글
                ================== -->
                <div class="blog-nav">
                <div class="post-nav body16">
                    <template v-if="next">
                    <RouterLink :to="`/notice/${next.id}`" class="post-link">
                        <span class="post-label d-none d-md-flex">다음글</span>
                        <v-icon>mdi-chevron-up</v-icon>
                        <span class="post-title">{{ next.title }}</span>
                    </RouterLink>
                    </template>

                    <template v-else>
                        <div class="no-post-msg">
                        <span class="post-label d-none d-md-flex">다음글</span>
                        <v-icon>mdi-chevron-up</v-icon>
                        <p class="post-title">다음글이 없습니다.</p>
                        </div>
                    </template>
                </div>
                <v-divider></v-divider>

                <div class="post-nav body16">
                    <template v-if="prev">
                    <RouterLink :to="`/notice/${prev.id}`" class="post-link">
                        <span class="post-label d-none d-md-flex">이전글</span>
                        <v-icon>mdi-chevron-down</v-icon>
                        <span class="post-title">{{ prev.title }}</span>
                    </RouterLink>
                    </template>

                    <template v-else>
                        <div class="no-post-msg">
                        <span class="post-label d-none d-md-flex">이전글</span>
                        <v-icon>mdi-chevron-down</v-icon>
                        <p class="post-title">이전글이 없습니다.</p>
                        </div>
                    </template>
                </div>
                </div>
            </v-card>
        </v-col>
    </v-row>
    </v-container>

    <div v-else><p>존재하지 않는 글입니다.</p></div>

</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import noticeList from '@/data/noticeList'

const route = useRoute()
const id = ref(route.params.id)

const notice = ref(null)
const prev = ref(null)
const next = ref(null)

const updateNotice = () => {
    const index = noticeList.findIndex(item => item.id == id.value)
    notice.value = noticeList[index]

    if (index > 0) next.value = noticeList[index - 1]
    else next.value = null

    if (index < noticeList.length - 1) prev.value = noticeList[index + 1]
    else prev.value = null
}

onMounted(updateNotice)

watch(() => route.params.id, (newId) => {
  id.value = newId
  updateNotice()
})

</script>