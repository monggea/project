<template>

<v-container fluid>

    <!--====================
    이미지 버튼
    =====================-->

    <v-row class="d-flex justify-center m85">
      <v-col cols="12" class="grid12 bottom-button">
        <div class="top-line ml-3"></div>
        <h1 class="title72">Photo.</h1>
        <div class="tab-btn-group">
          <v-btn
            v-for="item in artist?.gallery"
            :key="item.tag"
            @click="tab = item.tag"
            class="top-btn"
            :class="tab === item.tag ? 'active-btn' : ''"
            
            >{{ item.tag }}
          </v-btn>
        </div>
      </v-col>

      <!--====================
      tab 본문
      =====================-->
      <v-col cols="12" class="grid15">
        <v-window
          v-model="tab"
          transition="slide-x-transition"
          class="grid15 actors-tab-content"
          continuous
          hide-delimiter>

          <v-window-item
            v-for="item in artist?.gallery"
            :key="item.tag"
            :value="item.tag"
            class="actors-tab-content-group"
            ><v-row>
              <v-col cols="6" sm="4"
                v-for="(img,index) in item.image"
                :key="index"
                ><v-img :src="img" cover
                class="actors-tab-content-outline"/>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
        </v-col>
    </v-row>
</v-container>

    
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { artistList } from '@/data/artistList.js'

const imageMap = import.meta.glob('../../assets/img/actors/**/*.{jpg,png}', { eager: true })

const mapImagePaths = (paths = []) =>
paths.map(path => imageMap[`../../assets/img/actors/${path}`]?.default || '')

const artists = artistList.map(artist => ({
  ...artist,
  gallery: (artist.gallery || []).map(img => ({
    ...img,
    image: mapImagePaths(img.image)
  }))
}))

const props = defineProps({ artistId: String })
const artist = computed(() =>artists.find(a => a.id === props.artistId))
const tab = ref('')
watch(artist, newArtist => {
  tab.value = newArtist?.gallery?.[0]?.tag || ''
})

</script>