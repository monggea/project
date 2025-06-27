<template>

<v-container fluid>

    <!--====================
    이미지 버튼
    =====================-->

    <v-row>
        <v-col cols="12">
            
            <v-card>
                <div class="grid12">
                <div class="top-line ml-3"></div>
                <v-card-title><h1>Photo.</h1></v-card-title>

                <div class="tab-btn-group">
                    <v-btn class="top-btn" @click="tab='Drama'">Drama</v-btn>
                    <v-btn class="top-btn" @click="tab='Movie'">Movie</v-btn>
                    <v-btn class="top-btn" @click="tab='Magazine'">Magazine</v-btn>
                    <v-btn class="top-btn" @click="tab='Others'">Others</v-btn>
                </div>
                </div>

                <v-window
                  v-model="tab"
                  transition="slide-x-transition"
                  class="grid15 actors-tab-content"
                  continuous
                  hide-delimiter>

                  <v-window-item :value="'Drama'" class="actors-tab-content-group">
                    <v-row>
                      <v-col cols="6" md="4"><v-img class="actors-tab-content-outline" src="../../assets/img/actors/kky/drama/drama1.jpg"></v-img></v-col>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/drama/drama2.jpg"></v-img></v-col>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/drama/drama3.jpg"></v-img></v-col>
                    </v-row>
                  </v-window-item>

                  <v-window-item :value="'Movie'">
                    <v-row>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/movie/movie1.jpg"></v-img></v-col>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/movie/movie2.jpg"></v-img></v-col>
                    </v-row>
                  </v-window-item>

                  <v-window-item :value="'Magazine'" class="actors-tab-content-group">
                    <v-row>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/magazine/arena1.jpg"></v-img></v-col>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/magazine/arena2.jpg"></v-img></v-col>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/magazine/cosmopolitan.jpg"></v-img></v-col>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/magazine/elle1.jpg"></v-img></v-col>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/magazine/elle2.jpg"></v-img></v-col>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/magazine/esquire.jpg"></v-img></v-col>
                    </v-row>
                  </v-window-item>

                  <v-window-item :value="'Others'">
                    <v-row>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/others/others1.jpg"></v-img></v-col>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/others/others2.jpg"></v-img></v-col>
                      <v-col cols="6" md="4"><v-img src="../../assets/img/actors/kky/others/other3.jpg"></v-img></v-col>
                    </v-row>
                  </v-window-item>

                </v-window>
            </v-card>
        </v-col>
    </v-row>
</v-container>

    
</template>

<script setup>
import {ref} from 'vue'
const tab=ref('Drama')

const artist = ref([
  {id:1, tab:'Drama', image:[]}
])

</script>


<style>
.v-row{
    margin-top:70px;
}
</style>