<template>
    
    <v-row class="actors-top grid12 d-flex justify-space-between" dense>
        <v-col cols="12" class="actors-info">

            <v-img
                class="actors-img"
                :src="getProfile(artist.image)"
                cover>
            </v-img>

            <v-card class="actors-profile">
                <v-card-title class="actors-title">
                <h2 class="title72" v-html="artist.mName"></h2>
                </v-card-title>

                <v-card-subtitle class="actors-subtitle date20 d-flex align-center">
                    <p class="d-none d-sm-flex">{{ artist.kName }}</p>
                    <p class="actors-line d-none d-sm-flex"></p>
                    <p>{{artist.date}}</p>
                </v-card-subtitle>

                <div class="top-line ml-3 d-none d-sm-flex"></div>

                <v-card-text class="d-none d-sm-flex">

                    <p class="body16 actors-list">수상</p>
                    <div class="actors-col-gap d-flex flex-column">

                        <p
                            v-for="(award,index) in artist.awards"
                            :key="index"
                            class="body14"
                            >{{award}}
                        </p>

                    </div>

                </v-card-text>
            </v-card>

        </v-col>
    </v-row>
</template>

<script setup>
import { ref, watch } from 'vue'
import { artistList } from '@/data/artistList.js'



const props = defineProps({
    artistId:String
})

const artist = ref(artistList.find(a => a.id === props.artistId))


watch(() => props.artistId, (newId) => {
  artist.value = artistList.find(a => a.id === newId)
})

const getProfile = (filename) => 
  new URL(`../../assets/img/actors/profile/${filename}`, import.meta.url).href

</script>