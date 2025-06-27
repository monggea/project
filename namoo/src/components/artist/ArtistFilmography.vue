<template>
    <v-container fluid>
        <v-row class="filmo grid15" >
            <v-col cols="12" sm="6" order="2" order-sm="1" class="filmo-list">
                <div class="faq-wrap">
          <div
            v-for="(faq, i) in faqs"
            :key="faq.question"
            class="faq-item text-left"
          >
            <!-- 질문 줄: 전체 클릭 가능 -->
            <div
              class="d-flex justify-space-between align-center py-4 mr6"
              @click="toggle(i)"
              style="cursor: pointer;"
                >
                <div class="d-flex align-center ml6">
                    <v-icon>mdi-help-circle-outline</v-icon>
                    <span class="ml1">{{ faq.question }}</span>
                </div>
                <v-btn icon @click.stop="toggle(i)">
                    <v-icon>
                    {{ openIndex === i ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                    </v-icon>
                </v-btn>
                </div>

                <!-- 답변 줄 -->
                <v-expand-transition>
                <div v-if="openIndex === i" class="faq-answer ml7">
                    {{ faq.answer }}
                </div>
                </v-expand-transition>

                <!-- 회색 또는 검정 divider 조건 렌더링 -->
                <div :class="i === faqs.length - 1 ? 'divider-black' : 'divider-gray'"></div>
            </div>
            </div>
            </v-col>
            
            <v-col cols="12" sm="6" order="1" order-sm="2" class="filmo-profile">
                <v-carousel
                    hide-delimiters
                    interval="8000"
                    :show-arrows="false"
                    class="filmo-slide"
                    cycle
                    ><v-carousel-item>
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
</script>