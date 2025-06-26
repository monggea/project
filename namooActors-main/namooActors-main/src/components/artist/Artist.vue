<template>
  <v-container class="main-container" fluid>
    <div class="mx-auto page-max-width">
      <h1 class="text-h4 font-weight-bold mb-15 mt-15">Artist.</h1>

      <v-row justify="start" class="g-8">
        <v-col
          v-for="(artist, index) in artists"
          :key="index"
          cols="6"
          sm="6"
          md="4"
          class="d-flex justify-center"
        >
          <v-card
            elevation="0"
            class="card-spacing d-flex flex-column align-center pa-4"
          >
            <div class="img-wrapper">
              <v-img
                :src="hoverIndex === index ? artist.hoverImage : artist.image"
                class="artist-img"
                cover
                @mouseenter="hoverIndex = index"
                @mouseleave="hoverIndex = null"
              />
            </div>

            <div class="text-subtitle-1 font-weight-medium">
              {{ artist.name }}
            </div>

            <v-btn
              v-if="artist.selected"
              class="mt-2 mx-auto custom-btn"
              variant="outlined"
              size="small"
            >
              {{ artist.btnText }}
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

import Kangkiyoung from '@/assets/img/actors/Kangkiyoung.jpg'
import KangkiyoungHover from '@/assets/img/actors/Kangkiyoung_hover.jpg'
import Kookyohwan from '@/assets/img/actors/Kookyohwan.jpg'
import KookyohwanHover from '@/assets/img/actors/Kookyohwan_hover.jpg'
import Parkeunbin from '@/assets/img/actors/Parkeunbin.jpg'
import ParkeunbinHover from '@/assets/img/actors/Parkeunbin_hover.jpg'
import Kimjoohyuck from '@/assets/img/actors/Kimjoohyuck.jpg'
import KimjoohyuckHover from '@/assets/img/actors/Kimjoohyuck_hover.jpg'
import Rohjeongeui from '@/assets/img/actors/Rohjeongeui.jpg'
import RohjeongeuiHover from '@/assets/img/actors/Rohjeongeui_hover.jpg'
import Songkang from '@/assets/img/actors/Songkang.jpg'
import SongkangHover from '@/assets/img/actors/Songkang_hover.jpg'
import Leejungha from '@/assets/img/actors/Leejungha.jpg'
import LeejunghaHover from '@/assets/img/actors/Leejungha_hover.jpg'
import Leejunki from '@/assets/img/actors/Leejunki.jpg'
import LeejunkiHover from '@/assets/img/actors/Leejunki_hover.jpg'

const hoverIndex = ref(null)

const artists = [
  { name: '', image: Kangkiyoung, hoverImage: KangkiyoungHover, selected: true, btnText: 'KANG KI YOUNG' },
  { name: '', image: Kookyohwan, hoverImage: KookyohwanHover, selected: true, btnText: 'GOO KYO HWAN' },
  { name: '', image: Parkeunbin, hoverImage: ParkeunbinHover, selected: true, btnText: 'PARK EUN BIN' },
  { name: '', image: Kimjoohyuck, hoverImage: KimjoohyuckHover, selected: true, btnText: 'KIM JOO HYUCK' },
  { name: '', image: Rohjeongeui, hoverImage: RohjeongeuiHover, selected: true, btnText: 'ROH JEONG EUI' },
  { name: '', image: Songkang, hoverImage: SongkangHover, selected: true, btnText: 'SONG KANG' },
  { name: '', image: Leejungha, hoverImage: LeejunghaHover, selected: true, btnText: 'LEE JUNG HA' },
  { name: '', image: Leejunki, hoverImage: LeejunkiHover, selected: true, btnText: 'LEE JUN KI' },
]
</script>
