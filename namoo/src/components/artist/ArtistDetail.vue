<template>
    <Top :artistId="artistId"/>
    <Filmography :artistId="artistId"/>
    <Tabs :artistId="artistId"/>
    
</template>

<script setup>

import {useRoute} from 'vue-router'
import Top from '@/components/artist/ArtistTop.vue'
import Tabs from '@/components/artist/ArtistTabs.vue'
import Filmography from '@/components/artist/ArtistFilmography.vue'

const route=useRoute()
const artistId = route.params.id

</script>