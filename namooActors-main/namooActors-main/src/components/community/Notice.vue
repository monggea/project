<template>
    <v-container>
        
        <v-row class="grid12">
        <v-col cols="12"><h1 class="title72">Community.</h1></v-col>
        <v-col cols="12" class="d-flex justify-space-between align-bottom">

            <!-- ================
            세부 카테고리 스위치
            ================== -->
            <div>
            <v-btn class="top-btn">News</v-btn>
            <v-btn class="top-btn">Notice</v-btn>
            </div>

            <div>
            <!-- ================
            데스크탑용 검색창
            ================== -->
            <v-autocomplete
                :items="items"
                append-inner-icon="mdi-magnify"
                class="community-search d-none d-md-flex"
                density="comfortable"
                menu-icon=""
                placeholder="검색어를 입력해주세요"
                variant="solo"
                auto-select-first
                item-props
                rounded>
            </v-autocomplete>

            <!-- ================
            모바일용 검색창
            ================== -->
            <v-btn
                icon
                class="mobile-search d-flex d-md-none"
                ><v-icon>mdi-magnify</v-icon>
            </v-btn>
            </div>

        </v-col>
        </v-row>


        <!-- ================
        공지글 모음
        ================= -->
        <v-row class="d-flex justify-center grid12">
        <v-col cols="12" md="6" class="d-flex justify-center">
            <v-card class="pa-6 notice-card">
                <v-card-subtitle class="notice-tag">Artists</v-card-subtitle>
                <v-card-title class="stitle24-1">[서현] 영화 &lt;거룩한 밤: 데몬 헌터스&gt; 시사회 초대 이벤트 안내</v-card-title>
                <v-card-subtitle class="date">2025.04.14</v-card-subtitle>
            </v-card>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center">
            <v-card class="pa-6 notice-card">
                <v-card-subtitle class="notice-tag">Artists</v-card-subtitle>
                <v-card-title class="stitle24-1">[이정하] &lt;쇼!음악중심&gt; 마지막 방송 팬석 방청 안내</v-card-title>
                <v-card-subtitle class="date">2025.02.10</v-card-subtitle>
            </v-card>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center">
            <v-card class="pa-6 notice-card">
                <v-card-subtitle class="notice-tag">Artists</v-card-subtitle>
                <v-card-title class="stitle24-1">[서현] 영화 &lt;KBS 연기대상&gt; 팬석 안내</v-card-title>
                <v-card-subtitle class="date">2024.12.20</v-card-subtitle>
            </v-card>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center">
            <v-card class="pa-6 notice-card">
                <v-card-subtitle class="notice-tag">Artists</v-card-subtitle>
                <v-card-title class="stitle24-1">[장규리] &lt;Happy Gyurismas&gt; 생일 카페 이벤트 안내</v-card-title>
                <v-card-subtitle class="date">2024.12.10</v-card-subtitle>
            </v-card>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center">
            <v-card class="pa-6 notice-card">
                <v-card-subtitle class="notice-tag">Artists</v-card-subtitle>
                <v-card-title class="stitle24-1">[서현] KBS2 &lt;남주의 첫날밤을 가져버렸다&gt; 서포트 관련 공지</v-card-title>
                <v-card-subtitle class="date">2024.11.28</v-card-subtitle>
            </v-card>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center">
            <v-card class="pa-6 notice-card">
                <v-card-subtitle class="notice-tag">Artists</v-card-subtitle>
                <v-card-title class="stitle24-1">[장규리] MBC &lt;지금 거신 전화는&gt; Special Showing - 1회 미리보기 시사회 이벤트</v-card-title>
                <v-card-subtitle class="date">2024.11.</v-card-subtitle>
            </v-card>
        </v-col>
        </v-row>

        <!-- ================
        페이지네이션
        ================== -->
        <v-row>
            <v-col cols="12">
                <v-pagination
                    v-model="page"
                    :length="3"
                    class="page-num"
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {ref} from 'vue'
const page = ref(1)
</script>