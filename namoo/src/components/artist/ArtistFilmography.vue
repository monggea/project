<template>
    <v-container fluid>
        <v-row class="filmo grid15" >
            <v-col cols="12" sm="6" order="2" order-sm="1" class="filmo-list">

                <div class="filmo-list-group">
                <div class="filmo-list-wrapper">
                    <div class="filmo-Q"
                    @click="show = !show"
                    style="cursor: pointer;">
                    
                        <div class="filmo-Q-title d-flex justify-space-between align-center">
                        <h4>드라마</h4>
                        <v-icon>{{ openIndex === i ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </div>

                        <v-expand-transition class="filmo-A">
                            <div v-if="show" class="filmo-A-open d-flex">
                                
                                <div class="filmo-A-year">
                                    <p>2024</p>
                                    <div class="filmo-A-list">
                                    <p>끝내주는 해결사</p>
                                    </div>
                                </div>

                                <div class="filmo-A-year">
                                    <p>2023</p>
                                    <div class="filmo-A-list">
                                    <p>경이로운 소문2: 카운터 펀치</p>
                                    </div>
                                </div>
                            </div>
                        </v-expand-transition>

                        <div class="filmo-Q-title d-flex justify-space-between align-center">
                        <h4>영화</h4>
                        <v-icon>{{ openIndex === i ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </div>

                        <v-expand-transition class="filmo-A">
                            <div v-if="show" class="filmo-A-open d-flex">
                                
                                <div class="filmo-A-year">
                                    <p>2024</p>
                                    <div class="filmo-A-list">
                                    <p>끝내주는 해결사</p>
                                    </div>
                                </div>

                                <div class="filmo-A-year">
                                    <p>2023</p>
                                    <div class="filmo-A-list">
                                    <p>경이로운 소문2: 카운터 펀치</p>
                                    </div>
                                </div>
                            </div>
                        </v-expand-transition>
                    
                    </div>
                </div>
                </div>
            </v-col>
            
            <v-col cols="12" sm="6" order="1" order-sm="2" class="filmo-profile">
                <v-carousel
                    hide-delimiters
                    interval="8000"
                    :show-arrows="false"
                    class="filmo-slide"
                    cycle>

                    <v-carousel-item>
                        <v-img src="../../assets/img/actors/kky/slide/slide1.jpg" cover/>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-img src="../../assets/img/actors/kky/slide/slide2.jpg" cover/>
                    </v-carousel-item>

                </v-carousel>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import {ref} from 'vue'
const show=ref(false)
</script>