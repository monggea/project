<template>

<v-container fluid>


    <!--====================
    이미지 버튼
    =====================-->

    <v-row>
        <v-col cols="12">
            <v-card>
                <v-tabs v-model="tab" grow>
                    <v-tab>Drama</v-tab>
                    <v-tab>Movie</v-tab>
                    <v-tab>Magazine</v-tab>
                    <v-tab>Others</v-tab>
                <v-tab v-for="(tabItem, i) in tabs" :key="i">
                    {{ tabItem.name }}
                </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                <v-tab-item v-for="(tabItem, i) in tabs" :key="i">
                    <v-row>
                    <v-col
                        v-for="(img, idx) in tabItem.images"
                        :key="idx"
                        cols="12" sm="6" md="4"
                    >
                        <v-img
                        :src="img.src"
                        height="150"
                        class="rounded"
                        alt="image"
                        />
                    </v-col>
                    </v-row>
                </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-col>
    </v-row>
</v-container>

    
</template>

<script setup>
import {ref} from 'vue'

const tab=ref(0)
const tabs = [
  {
    name: '자연',
    images: [
      { src: 'https://picsum.photos/id/1018/300/200' },
      { src: 'https://picsum.photos/id/1025/300/200' },
      { src: 'https://picsum.photos/id/1039/300/200' },
    ],
  },
  {
    name: '도시',
    images: [
      { src: 'https://picsum.photos/id/1011/300/200' },
      { src: 'https://picsum.photos/id/1015/300/200' },
      { src: 'https://picsum.photos/id/1020/300/200' },
    ],
  },
]


</script>


<style>
.v-row{
    margin-top:70px;
}
</style>