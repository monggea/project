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
        뉴스글 모음
        ================= -->
        <v-row class="d-flex justify-center grid12">
        <v-col cols="6" md="6" class="d-flex justify-center">
            <v-card class="news-card">
                <v-img src="../../assets/img/news/news1.jpg"></v-img>
                <v-card-subtitle class="date mt-3 mb-1">2025.06.18</v-card-subtitle>
                <v-card-title class=" notice-title">
                    <div class="stitle24-1">
                    [서예화] 전소민·윤시윤, ‘사의 찬미’로 연극 첫 도전... 7월 개막
                    </div>
                </v-card-title>
            </v-card>
        </v-col>

        <v-col cols="6" md="6" class="d-flex justify-center">
            <v-card class="news-card">
                <v-img src="../../assets/img/news/news2.jpg"></v-img>
                <v-card-subtitle class="date mt-3 mb-1">2025.06.18</v-card-subtitle>
                <v-card-title class=" notice-title">
                    <div class="stitle24-1">
                    [이정식] ‘러닝메이트’ 이정식, 매력 가득 비하인드 스틸 공개
                    </div>
                </v-card-title>
            </v-card>
        </v-col>

        <v-col cols="6" md="6" class="d-flex justify-center">
            <v-card class="news-card">
                <v-img src="../../assets/img/news/news3.jpg"></v-img>
                <v-card-subtitle class="date mt-3 mb-1">2025.06.16</v-card-subtitle>
                <v-card-title class=" notice-title">
                    <div class="stitle24-1">
                    [이윤지] ‘디 이펙트’ 이윤지, 첫 공연 성료 “감회 남달라”
                    </div>
                </v-card-title>
            </v-card>
        </v-col>

        <v-col cols="6" md="6" class="d-flex justify-center">
            <v-card class="news-card">
                <v-img src="../../assets/img/news/news4.png"></v-img>
                <v-card-subtitle class="date mt-3 mb-1">2025.06.13</v-card-subtitle>
                <v-card-title class=" notice-title">
                    <div class="stitle24-1">
                    [김도완, 이정하] 웨이브, 이정하X김도완 ‘ONE: 하이스쿨 히어로즈’ 최종화 공개
                    </div>
                </v-card-title>
            </v-card>
        </v-col>

        <v-col cols="6" md="6" class="d-flex justify-center">
            <v-card class="news-card">
                <v-img src="../../assets/img/news/news5.jpg"></v-img>
                <v-card-subtitle class="date mt-3 mb-1">2025.06.13</v-card-subtitle>
                <v-card-title class=" notice-title">
                    <div class="stitle24-1">
                    [이윤지] 이윤지, 새 프로필 공개... 우아함+세련미
                    </div>
                </v-card-title>
            </v-card>
        </v-col>

        <v-col cols="6" md="6" class="d-flex justify-center">
            <v-card class="news-card">
                <v-img src="../../assets/img/news/news6.jpg"></v-img>
                <v-card-subtitle class="date mt-3 mb-1">2025.06.12</v-card-subtitle>
                <v-card-title class=" notice-title">
                    <div class="stitle24-1">
                    [차서원] 대한적십자사 헌혈홍보대사 차서원, 헌혈 캠페인 직접 참여
                    </div>
                </v-card-title>
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