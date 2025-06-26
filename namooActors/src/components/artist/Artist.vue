<template>
<v-container fluid>

<v-row class="grid12 bottom-title">
<v-col cols="12"><h1 class="title72 top-title">Artist.</h1></v-col>
</v-row>

<v-row class="artist-section d-flex justify-start">

    <v-col cols="6" md="4"
        v-for="(artist, index) in artists"
        :key="index">

        <v-card
            class="artist-card elevation-0 d-flex flex-column"
            @click="goToArtist(artist.id)">

            <div class="artist-overlay">
                <v-img :src="artist.image" cover class="artist-img"></v-img>
                <v-card-text v-html="artist.mName" class="artist-title-m d-md-none">
                </v-card-text>
            </div>
            
            <v-btn class="elevation-0 artist-title-w stitle24-2 d-none d-md-block">{{ artist.name }}</v-btn>
            
        </v-card>

    </v-col>
</v-row>
</v-container>
</template>




<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { artistList } from '@/data/artistList'

const imageMap = import.meta.glob('@/assets/img/actors/profile/*.{jpg,png}',{
    eager:true,
    import:'default',
})

const artists = artistList.map(artist =>({
    ...artist,
    image: imageMap[`/src/assets/img/actors/profile/${artist.image}`],
}))

const router = useRouter()
const goToArtist=id=>router.push(`/artist/${id}`)

</script>


