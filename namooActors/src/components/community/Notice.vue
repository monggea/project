<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="2"></v-col>
            <v-col cols="12" md="8">
                <h1 class="title72">Community.</h1>
                <v-btn>News</v-btn>
                <v-btn>Notice</v-btn>


                <v-autocomplete
                    :items="items"
                    append-inner-icon="mdi-magnify"
                    class="mx-auto"
                    density="comfortable"
                    menu-icon=""
                    placeholder="검색어를 입력해주세요"
                    style="max-width: 350px;"
                    theme="light"
                    variant="solo"
                    auto-select-first
                    item-props
                    rounded>
                </v-autocomplete>

            </v-col>
            <v-col cols="12" md="2"></v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="2"></v-col>
            <v-col cols="12" md="8">
                <v-card class="pa-6 notice-card" v-for="n in 6" :key=n>
                    <v-card-subtitle class="notice-tag">Artists</v-card-subtitle>
                    <v-card-title>[서현] 영화 &&lt;거룩한 밤: 데몬 헌터스&gt; 시사회 초대 이벤트 안내</v-card-title>
                    <v-card-subtitle class="date">
                        2025.04.14
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col cols="12" md="2"></v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-pagination
                    v-model="page"
                    :length="3"
                    founded="circle"
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped></style>

<script>
import {ref} from 'vue'
const page = ref(1)
</script>