<template>
<v-container fluid>
    <v-row >
<!--상단동영상-->
      <v-col cols="12">
        <div class="top-video">
          <video
          controls
          width="100%"
          autoplay
          style="object-fit: cover;"
          :src="require('@/assets/img/video.mp4')">
          </video>
        </div>
      </v-col>

<!--what do you want-->
      <v-col cols="12">
        <div>
        <p class="what">WHAT    DO</p>
        <P class="you">YOU    WNAT   ?</P>
        </div> 
      </v-col>

<!--아티스트 슬라이더-->
      <v-col cols="12">
          
        <v-sheet
          class="sg mx-auto"
          elevation="0">
          <p class="s-text">Artist.
          <v-btn class="more " text :to="'/Artist'" >
          view more →</v-btn>
          </p>
            <v-slide-group
              v-model="model"
              class="slide-group"
              selected-class="bg-info"
              mandatory
              show-arrows
              >
    <!--방향 아이콘 변형 코드
              <template #prev>
                <v-btn icon>
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </template>-->
              <v-slide-group-item
                v-for="n in items"
                :key="n.id "
                v-slot="{ isSelected, toggle, selectedClass }">
                
                <v-card
                  class="slide-card ma-2"
                  :class="[selectedClass]"
                  color="grey-lighten-1"
                  max-height="55vh"
                  min-width="20vw"
                  @click="toggle">
                  <v-img class="hover-img" :src="n.image" min-height="70vh"  cover/>
                
                  <!--<div class="d-flex fill-height align-center justify-center">-->
                    <v-scale-transition>
                      <v-icon
                        v-if="isSelected"
                        color="white"
                        icon="mdi-close-circle-outline"
                        size="48"
                        class="d-flex justify-center mt-2"/>
                    </v-scale-transition>
                  <!--</div>-->
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

<!--works-->
      <v-row>
      <v-col cols="12" md="8" class="works" >
        <div class="">
        <p class="w-text">Works.
          <v-btn class="more2" text :to="'/Artist'" >
          view more →</v-btn>
        </p>
      
      <!--works slider-->  
        <v-carousel 
        hide-delimiters
        cycle
        :interval="2000">

        <!-- 왼쪽 화살표 -->
          <template #prev>
            <v-btn icon class="btn">
              <v-icon size="36">mdi-chevron-left</v-icon>
            </v-btn>
          </template>
        <!-- 오른쪽 화살표 -->
          <template #next>
            <v-btn icon class="btn">
              <v-icon size="36">mdi-chevron-right</v-icon>
            </v-btn>
          </template>

          <v-carousel-item
            v-for="(item,i) in imgs" :key="i" :src="item.src" contain
          ></v-carousel-item>
        </v-carousel>
        </div>

        <div class="news d-flex">
        <div class="mt-10 pr-5 " >
          <v-divider length="100%" thickness="4" class="mt-5 mb-5"  ></v-divider>
          <h3 class="nt1">이정하의 낯선 얼굴..‘굿보이’ 특별출연으로 빛낸 존재감</h3>
          <h5 class="pt-2">탄탄한 전개와 연출로 인기를 견인 중인 JTBC 토일드라마‘굿보이’
              (연출 심나연,극본 이대일,제작SLL,스튜디오앤뉴,드라마 하우...</h5>
          <div class="news-date">
            <p>2025-06-09
              <v-btn class="news-icon" text :to="'/Newsroom'" style="box-shadow: none;">
              <v-icon>mdi-arrow-right</v-icon>  
              </v-btn>
            </p>
          </div>
          <v-divider length="100%" thickness="2" class="mt-5" ></v-divider>
          </div>
        
        <div class="mt-10 pr-5" >
          <v-divider length="100%" thickness="4" class="mt-5 mb-5" ></v-divider>
          <h3 class="nt2">박은빈, 4년 연속 日 팬 파티 개최…탄탄한 현지 팬덤 입증</h3>
          
          <h5 class="pt-2">배우 박은빈이 일본에서 열린 팬 파티를 성공적으로 마무리했다.
             박은빈은 지난 6월 7일과 8일, 양일간 일본 도쿄 카나데비아 홀에...</h5>
             <div class="news-date ">
            <p>2025-06-12
              <v-btn  class="news-icon" text :to="'/Newsroom'" style="box-shadow: none;">
              <v-icon >mdi-arrow-right</v-icon>  
              </v-btn>
            </p>
          </div>
          <v-divider length="100%" thickness="2" class="mt-5" ></v-divider>
        </div>

        <div class="mt-10 "  >
          <v-divider length="100%" thickness="4" class="mt-5 mb-5" ></v-divider>
          <h3 class="nt3">'ONE' 이정하·김도완, 본격 참교육 나선다.육준서 첫 등장</h3>
          <h5 class="pt-2">'ONE : 하이스쿨 히어로즈'가 바로 내일(6일) 공개될 5~6화 스틸을 전격 공개했다. 5월 30일(금) 1~4화 공개와 동시에 웨이브...</h5>
          <div class="news-date">
            <p>2025-06-18
              <v-btn class="news-icon" text :to="'/Newsroom'" style="box-shadow: none;">
              <v-icon >mdi-arrow-right</v-icon>  
              </v-btn>
            </p>
          </div>
          <v-divider length="100%" thickness="2" class="mt-5" ></v-divider>
        </div>
        </div>
      </v-col>
         
    </v-row>
  </v-container>
  
</template>


<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'



  const model = ref(null)

  const items = [
 {id:0, image: new URL(`@/assets/img/actors/kang.jpg`,  import.meta.url).href},
 {id:1, image: new URL(`@/assets/img/actors/김효진.jpg`, import.meta.url).href},
 {id:2, image: new URL(`@/assets/img/actors/노정의.jpg`, import.meta.url).href},
 {id:3, image: new URL(`@/assets/img/actors/구교환.jpg`, import.meta.url).href},
 {id:4, image: new URL(`@/assets/img/actors/김재경.jpg`, import.meta.url).href},
 {id:5, image: new URL(`@/assets/img/actors/박지현.jpg`, import.meta.url).href},
 {id:6, image: new URL(`@/assets/img/actors/송강.jpg`, import.meta.url).href},
 {id:7, image: new URL(`@/assets/img/actors/이준기.jpg`, import.meta.url).href},
 {id:7, image: new URL(`@/assets/img/actors/차서원.jpg`, import.meta.url).href},
        
]

//아티스트 슬라이더 autoplay 설정
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    model.value = (model.value + 1) % items.length +1
  }, 2000) // 3초마다 이동
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

const imgs = ref([
   { src: new URL('@/assets/img/one.png', import.meta.url).href },
   { src: new URL('@/assets/img/박은빈뉴스.jpg', import.meta.url).href },
   { src: new URL('@/assets/img/이정하뉴스.jpg', import.meta.url).href },
])
</script>
  


<script>
export default {
  name: 'HomeView',
};
</script>