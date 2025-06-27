<template>
  <!--상단동영상-->
  <div class="top-video">
          <video
          width="100%"
          autoplay
          muted
          style="object-fit: cover;"
          :src="video">
          </video>
        </div>
<v-container fluid >
    <v-row >
   

<!--what do you want-->
      <v-col cols="12">
        <div>
        <p class="what">WHAT DO</p>
        <P class="you">YOU WANT ?</P>
        </div> 
      </v-col>

<!--아티스트 슬라이더-->
      <v-col cols="12">
         
        <v-sheet
          class="sg "
          elevation="0"
          >
          <div class="">
          <p class="s-text">Artist.</p>
          <v-btn class="more " text :to="'/Artist'" >
          view more →</v-btn>
          </div>
<v-window :aspect-ratio="0.5">
            <v-slide-group
              v-model="model"
              class="slide-group"
              selected-class="bg-info"
              mandatory
              show-arrows
              >
           
              <v-slide-group-item
                v-for="n in items"
                :key="n.id "
                v-slot="{ toggle, selectedClass }">
               
                <v-card
                  class="slide-card "
                  :class="[selectedClass]"
                  :style="{ minWidth: isMobile ? '90px' : '280px', }"
                  color="grey-lighten-1"
                  @click="toggle">
                  <v-img class="artist-img" :src="n.image" cover/>
                                 
                    <!--<v-scale-transition>
                      <v-icon
                        v-if="isSelected"
                        color="white"
                        icon=""
                        size=""
                        class=""/>
                    </v-scale-transition>-->
                  
                </v-card>
               
              </v-slide-group-item>
              
            </v-slide-group>
          </v-window>
        </v-sheet>
      </v-col>
    </v-row>

<!--works-->
      <v-row>
      <v-col cols="12" md="7" class="works" >
       <div class="w-box">
        <p class="w-text">Works.
          <v-btn class="more2" text :to="'/News'" >
          view more →</v-btn>
        </p>
        </div>
      
      <!--works slider-->  
       <div class="">
        <v-carousel 
        class="work-slide"
        hide-delimiters
        cycle
        :interval="2000">

        <!-- 왼쪽 화살표 -->
          <template #prev>
            <v-btn icon class="btn44" >
              <v-icon size="36">mdi-chevron-left</v-icon>
            </v-btn>
          </template>
        <!-- 오른쪽 화살표 -->
          <template #next>
            <v-btn icon class="btn44">
              <v-icon size="36">mdi-chevron-right</v-icon>
            </v-btn>
          </template>

          <v-carousel-item
            v-for="(item,i) in imgs" 
            :key="i" 
            :src="item.src" 
            contain>
          </v-carousel-item>
        </v-carousel>
        </div>

        <div class="news d-flex">
        <div class="mt-10 pr-5 " >
          <v-divider length="100%" thickness="4" class="mt-5 mb-5 divider-color" ></v-divider>
          <h3 class="nt1">이정하의 낯선 얼굴..‘굿보이’ 특별출연으로 빛낸 존재감</h3>
          <h5 class="pt-2">탄탄한 전개와 연출로 인기를 견인 중인 JTBC 토일드라마‘굿보이’
              (연출 심나연,극본 이대일,제작SLL,스튜디오앤뉴,드라마 하우...</h5>
          <div class="news-date">
            <p>2025-06-09
              <v-btn class="news-icon" text :to="'/News'" style="box-shadow: none;">
              <v-icon class="news-icon-arrow" >mdi-arrow-right</v-icon>  
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
              <v-btn  class="news-icon" text :to="'/News'" style="box-shadow: none;">
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
              <v-btn class="news-icon" text :to="'/News'" style="box-shadow: none;">
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

<style >
/* 슬라이더 방향 아이콘*/
.v-slide-group__prev, .v-slide-group__next{ 
  font-size: 4vw; color: white; transform: translateY(10vh);}
.v-application__wrap{min-height: 40dvh;}

</style>




<script setup>

//import Swiper from 'swiper';
import { ref, onMounted, onBeforeUnmount } from 'vue'

const video = new URL('@/assets/img/video.mp4', import.meta.url).href



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
    model.value = (model.value +1 ) % items.length 
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