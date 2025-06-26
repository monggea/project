<template>
  <v-container class="d-flex justify-center align-center">
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" md="6">
    <div class="his" >
      <h1 class="title">History.</h1>
    </div>
    <v-btn text 
    :to="'/companyintro'" 
    class="btn"
    rounded 
    variant="outlined"
    ><h3 class="btn-text">company</h3></v-btn>
    <v-divider class="mt-14" length="10%" thickness="10" ></v-divider>
    <h2 class="since" >Since 2004,</h2>
    <v-divider class="mt-15 " length="140%" thickness="2"></v-divider>
    
    <div class="mt-10"> <!-- mt-1 : 4px -->       
        <v-timeline align="start" side="end" justify="center" class="timeline"  >
          <v-timeline-item class="dot"
            v-for="item in history"
            :key="item.year"
            :dot-color="item.color"
             size="1.6vw"
          >
            <template #opposite>
              <h2 :class="['text-h4', item.year === '20' ? 'text-success' : 'text-grey-darken-1']">
                {{ item.year }}
              </h2>
            </template>

            <v-card class="" flat>
              <div v-for="event in item.events" :key="event" class="text-body-3 mb-1">
                • {{ event }}
              </div>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const history = [
  {
    year: '20',
    color: 'green',
    events: [
      '김태희, 카카오 드라마 <하이바이,마마!> 출연',
      '송강, 넷플릭스 오리지널 시리즈 <좋아하면 울리는 시즌2> 주연',
      '이준기, tvN 드라마 <악의 꽃> 주연',
      '서현우, 넷플릭스 영화 <콜> 출연',
      '김재원, SBS 일요드라마 <앨리스> 출연',
    ],
  },
  {
    year: '19',
    color: 'grey',
    events: [
      '고아라, KBS2 드라마 <해치> 주연',
      '이준기, 아시아 팬미팅 투어 개최',
      '김향기, JTBC 드라마 <열여덟의 순간> 주연',
      '송강, tvN 드라마 <악마가 너의 이름을 부를 때> 출연',
      '박민영, 숨피어워즈 K드라마 올해의 연기상 수상',
      '박민영, AAA(아시아 아티스트 어워드) 배우부문 베스트 아티스트상, 아시아 셀러브리티상 수상',
      '유준상, KBS 연기대상 남자 최우수상, 베스트 커플상 수상 (‘왜그래 풍상씨’)'
    ],
  },
  {
    year: '18',
    color: 'grey',
    events: [
      '김하나, 서예화 전속계약 체결',
      '김주혁, 제55회 대종상영화제 남우조연상 수상',
      '김주혁, 대한민국 대중문화예술상 국무총리상 수상',
      '김주혁, 제39회 청룡영화상 남우조연상 수상',
      '김재경, MBC 연기대상 월화미니시리즈 부문 조연상 수상',
      '김향기, 제39회 청룡영화상 청정원 인기스타상, 여우조연상',
      '박민영, 제23회 소비자의 날 KCA 문화연예시상식 시청자가 뽑은 · 올해의 배우',
      '지성, tvN 드라마 <아는 와이프> 주연',
      '이준기, tvN 드라마 <무법변호사> 주연',
      '김향기, 영화 <신과함께> 시리즈 출연',
    ],
  },
  {
    year: '17',
    color: 'grey',
    events:[
      '고우림, 박민영 전속계약 체결',
      '김주혁, 제1회 더서울어워즈 남우조연상 수상',
      '김환희, 제37회 황금촬영상 시상식 아역상 수상',
      '이준기, AAA 아시아 아티스트 어워즈 배우부문 페뷸러스상 수상',
      '지성, 제8회 대한민국 대중문화예술상 국무총리표창 수상',
    ],
  },

  {
    year: '16',
    color: 'grey',
    events:[
      '김재경, 김환희, 문채원, 오태경, 오현중, 이정식, 이태선 전속계약 체결',
      '김환희, 2016 한국 영화를 빛낸 스타상 신인상 수상',
      '김환희, 제53회 대종상영화제 신인여우상 수상',
      '지성, 제28회 한국PD대상 탤런트부문 출연자상 수상',
      '지성, 제4회 미국 드라마피버 어워즈 최고의 배우부문 수상',
    ],
  },

  {
    year: '15',
    color: 'grey',
    events:[
      '박은빈, 박지현, 송강, 오승훈, 이규정, 전유림 전속계약 체결',
      '나무엑터스 소속 배우 및 임직원 사랑의 연탄 배달',
      '故 이은주 10주기 상영회 개최',
      '나무엑터스 공식 홈페이지 리뉴얼',
      '김소연, MBC 방송연예대상 버라이어티부문 최우수상 수상 ',
      '김주혁, KBS 연예대상 버라이어티부문 최고 엔터테이너상 수상 ',
      '문근영, SBS 연기대상 10대스타상, 우수연기상 수상 ("마을:아치아라의 비밀")',
      '신세경, SBS 연기대상 10대스타상, 베스트커플상, 우수연기상 수상 ("육룡이 나르샤")',
      '유준상, SBS 연기대상 최우수연기상 수상 ("풍문으로 들었소")',
    ],
  },
  // 추가 연도 데이터를 원하면 더 넣을 수 있습니다.
];
</script>





<!--<template>
    <v-container fluid>
        <v-row >
            <v-col cols="12" class="d-flex justify-center align-center" >
                
                <v-timeline side="end" >
                    <div class="year">`20</div>
                    <v-timeline-item
                    dot-color="white"
                    size="small">
                    <div class=" text-start">
                        <p>· 강기영, 고찬빈, 김택, 이열음 전속계약</p>
                        <p>· 박은빈, SBS 연기대상 최우수 연기상 ('브람스를 좋아하세요?')</p>
                        <p>· 박은빈, 그리메 시상식 최우수 여자연기자상 수상 ('스토브리그')</p>
                        <P>· 이준기, 아시아 아티스트 어워즈  베스트 아티스트상 수상 ('악의 꽃')</P>
                    </div>
                    </v-timeline-item>
                </v-timeline>
           </v-col>
           <v-col cols="12" class="d-flex justify-center align-center" >
                <div class="year">`20</div>
                <v-timeline side="end" >
                    <v-timeline-item
                    dot-color="white"
                    size="small">
                    <div class=" text-start">
                        <p>· 강기영, 고찬빈, 김택, 이열음 전속계약</p>
                        <p>· 박은빈, SBS 연기대상 최우수 연기상 ('브람스를 좋아하세요?')</p>
                        <p>· 박은빈, 그리메 시상식 최우수 여자연기자상 수상 ('스토브리그')</p>
                        <P>· 이준기, 아시아 아티스트 어워즈  베스트 아티스트상 수상 ('악의 꽃')</P>
                    </div>
                    </v-timeline-item>
                </v-timeline>
           </v-col>
        </v-row>
    </v-container>
</template>-->




<!--<v-timeline-item>
                                <div class=" text-start" style="width:35rem ;" >
                                    <div class="text">2020</div>
                                    <p>· 강기영, 고찬빈, 김택, 이열음 전속계약</p>
                                    <p>· 박은빈, SBS 연기대상 최우수 연기상 ('브람스를 좋아하세요?')</p>
                                    <p>· 박은빈, 그리메 시상식 최우수 여자연기자상 수상 ('스토브리그')</p>
                                    <P>· 이준기, 아시아 아티스트 어워즈  베스트 아티스트상 수상 ('악의 꽃')</P>
                                </div>
                                <div class="img d-flex" >
                                    <v-img src="../../assets/img/actors/강기영.jpg" style="width: 140px; margin-right: 17px;" cover="" />
                                    <v-img src="../../assets/img/actors/이열음.jpg" style="width: 160px;" cover=""/>
                                </div>
                                
                        </v-timeline-item>

                        <v-timeline-item>
                                <div class="text-end" style="width: 35rem;">
                                    <div class="text">2019</div>
                                    <p>· 김향기, 대한민국문화연예대상 여자 최우수 연기상 (‘증인)</p>
                                    <p>· 김향기, 한국영화평론가협회상 여우주연상 수상 (‘증인’)</p>
                                    <p>· 김향기, 황금 촬영상 최우수 여우주연상 수상 (‘증인’)</p>
                                    <p>· 박민영, 숨피어워즈 K드라마 올해의 연기상 수상</p>
                                    <p>· 유준상, KBS 연기대상 남자 최우수상(‘왜그래 풍상씨’)</p>
                                    <P>· 이윤지, SBS 연예대상 SBS 패밀리상 수상 (‘동상이몽 2 – 너는 내 운명’)</P>
                                    
                                </div>
</v-timeline-item>-->

<!--<style>
.img{ width: 100%;
      max-width: 140px;
      height: 160px; 
      box-sizing: content-box;  
      margin-top:17px;}*/
</style>-->


<!--<script setup>
//const items = [
  //  {id:1, color:'info', icon:'mdi-information',},
    //{id:2, color:'error', icon:'mdi-alert-circle',},
//]
const its = [
      {
      color: 'red-lighten-2',
      icon: 'mdi-star',
    },
    {
      color: 'purple-lighten-2',
      icon: 'mdi-book-variant',
    },
    {
      color: 'green-lighten-1',
      icon: 'mdi-airballoon',
    },
    {
      color: 'indigo-lighten-2',
      icon: 'mdi-layers-triple',
    },
    
]
</script>-->



<!--<v-container>
        <v-row>
            <v-col cols="12">
            <v-img 
            src="../../assets/img/historybg.png" 
            >
            
        </v-img>
            <h1>dkssud</h1>    
            </v-col>

            
        </v-row>
    </v-container>-->