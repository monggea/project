<template>
    <ArtistTop :artistId="artistId"/>

<v-container fluid>
    <v-row>
        <v-col cols="12" sm="6"></v-col>
        <v-col cols="12" sm="6"></v-col>
    </v-row>


    <!--====================
    이미지 버튼
    =====================-->

    <v-row>
    </v-row>
</v-container>

    
</template>

<script setup>

import {useRoute} from 'vue-router'
import ArtistTop from '@/components/artist/ArtistTop.vue'

const route=useRoute()
const artistId = route.params.id
</script>