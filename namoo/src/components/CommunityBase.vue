<template>
    <v-container>
        
        <v-row class="grid12">
        <v-col cols="12"><h1 class="title72 top-title">Community.</h1></v-col>
        <v-col cols="12" class="d-flex justify-space-between align-bottom">

            <!-- ================
            카테고리 탭
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

            <!-- ================
            검색창 (반응형)
            ================== -->
            <div>
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

            <!-- 모바일 -->
            <v-btn icon
                class="mobile-search d-flex d-md-none"
                ><v-icon>mdi-magnify</v-icon>
            </v-btn>
            </div>

        </v-col>
        </v-row>


        <!-- ================
        글 목록
        ================= -->
        <v-row class="grid12">

        <!-- ================
        공지 슬라이드
        ================= -->
        <v-col cols="12" v-if="type === 'notice'">
        <NoticeSlide />
        </v-col>

        <v-col
            v-for="(item, index) in paginated"
            :key="index"
            :cols="colSize" md="6"
            class="d-flex justify-center">

            <v-card
                class="news-card"
                v-if = "type === 'news'"
                @click="$emit('card-click', item)">

                <v-img :src="item.img"></v-img>
                <v-card-subtitle class="date mt-3 mb-1">{{ item.date }}</v-card-subtitle>
                <v-card-title class="news-title">
                    <div class="stitle24-1">{{ item.title }}</div>
                </v-card-title>
            </v-card>

            <v-card
                class="notice-card"
                v-else-if = "type === 'notice'"
                @click="$emit('card-click', item)">

                <v-card-subtitle class="notice-tag">{{item.tag}}</v-card-subtitle>
                <v-card-title class="stitle24-1">{{ item.title }}</v-card-title>
                <v-card-subtitle class="date">{{item.date}}</v-card-subtitle>
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
                    :length="pageCount"
                    class="page-num"
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import {ref,computed} from 'vue'

const props=defineProps({
    items:{type:Array, required: true},
    type:{type:String, required: true},
    perPage:{type:Number, default:6},
    colSize:{type:Number,default:6},
    searchItems:{type:Array,default: ()=>[]},
    
})

    const page=ref(1)
    const pageCount=computed(() =>
        Math.ceil(props.items.length / props.perPage)
    )

    const paginated = computed(()=>{
        const start=(page.value-1) * props.perPage
        return props.items.slice(start,start+props.perPage)
    })

</script>
