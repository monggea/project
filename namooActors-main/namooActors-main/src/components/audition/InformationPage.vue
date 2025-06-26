<template>
  <v-container>
    <v-row justify="center" class="grid12">
      <v-col cols="12" md="8" class="top">
        <h1 class="title72 mb4 text-left">Audition.</h1>

        <!-- 버튼 -->
        <v-btn class="top-btn mb12" @click="setActive('audition')" to="/audition" ripple>
          Information
        </v-btn>
        <v-btn class="top-btn mb12" @click="setActive('faq')" to="/faq" ripple>
          FAQ
        </v-btn>

        <div class="top-line mt3 mb5"></div>

        <p class="stitle36-1 text-left mb12 bd">
          나무 엑터스에서는<br class="mobile" />
          연기자 분야의 재능이 넘치는 신인을<br class="mobile" />
          모집합니다
        </p>
      </v-col>

      <!-- md8 내부 전체 감싸기 -->
      <v-col cols="12" md="8">
        <!-- 오디션 안내 -->
        <p class="stitle24 mb6">오디션 안내</p>

        <div class="d-flex justify-left mb1 ml1">
          <p class="stitle16-14  mr2">모집 분야</p>
          <div class="ml-5">
            <p class="body16-14">연기자</p>
          </div>
        </div>

        <div class="d-flex justify-left mb1 ml1">
          <p class="stitle16-14 mr2">모집 기간</p>
          <div class="ml-5">
            <p class="body16-14">수시접수</p>
          </div>
        </div>

        <div class="d-flex justify-left mb1 ml1">
          <p class="stitle16-14 mr2  ">지원 자격</p>
          <div class="ml-5">
            <p class="body16-14">17세 이상 ~ 25세 이하의 끼와 재능을 갖춘 신인</p>
            <p class="body14-12 gr">* 미성년자는 보호자 동의 필요</p>
          </div>
        </div>

        <div class="d-flex justify-left ml1 mb7">
          <p class="stitle16-14 mr2 t2 ">지원 방법</p>
          <div class="ml-5 t2" >
            <p class="body16-14" >이메일 접수</p>
            <p class="body14-12 gr mb1">audition@namooactors.com</p>
            <p class="body16-14">우편 접수</p>
            <p class="body14-12 gr">서울특별시 강남구 청담동 54-3 2층 나무텍터스 신인개발팀 앞</p>
            <p class="body14-12 gr">(도로명주소 : 서울특별시 강남구 도산대로 102길 17 2층 나무엑터스 신인개발팀 앞)</p>
          </div>
        </div>

        <!-- 오디션 절차 -->
        <p class="stitle24 mb4 ">오디션 절차</p>
        <div class="d-flex justify-space-between flex-wrap mb12 audition-flow">
          <div class="circle-step small"><p class="body16">서류 접수</p></div>
          <v-icon small class="ml3 mr3 mt6">mdi-chevron-right</v-icon>
          <div>
            <div class="round-step small">1차</div>
            <div class="step-desc text-center">
              <p class="body16">서류심사</p>
            </div>
          </div>
          <div>
            <div class="round-step small">2차</div>
            <div class="step-desc text-center">
              <p class="body16">현장심사</p>
              <p class="body14 gr">지정연기, 자유연기</p>
              <p class="body14 gr">및 카메라 테스트</p>
            </div>
          </div>
          <div>
            <div class="round-step small">3차</div>
            <div class="step-desc text-center">
              <p class="body16">심층면접</p>
            </div>
          </div>
          <v-icon small class="ml3 mr3 mt6">mdi-chevron-right</v-icon>
          <div class="circle-step small"><p class="body16 text-center">최종 합격자 발표</p></div>
        </div>

        <!-- 제출서류 + 사진/영상 영역 -->
        <v-row class="bo" dense>
          <!-- 제출서류 (왼쪽 md6) -->
          <v-col cols="12" md="6" class="mt-6">
            <div class="d-flex justify-start">
              <p class="stitle16-14 ml1 mr6">제출서류</p>
              <div class="ml-6">
                <p class="body16 mb1">오디션 지원서 1부</p>
                <p class="body16 mb1">개인프로필 1부</p>
                <p class="body16 mb1">2분 내외의 자기 PR영상</p>
                <v-btn class="custom-download-btn top-btn mt-2" depressed>
                  <v-icon left small class="custom-icon">mdi-download</v-icon>
                  지원서 다운로드
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- 사진 (오른쪽 위 md6) -->
          <v-col cols="12" md="6" class="mt-6">
            <div class="d-flex justify-start">
              <p class="stitle16-14 ml1 mr6 con5">사진</p>
              <div class="ml-6">
                <p class="body16 mb1 bd">얼굴 클로즈업, 상반신, 전신 사진</p>
                <p class="body16 mb1">일반사진 또는 전문 프로필 사진의 원본으로 첨부 (최소 3장 이상)</p>
                <p class="body16 mb1">셀카, 포토샵, 캠, 스티커사진 등 보정된 사진은 심사에서 제외</p>
                <p class="body16 mb1">얼굴을 제대로 분간할 수 없는 사진은 심사에서 제외</p>
              </div>
            </div>
          </v-col>

          <!-- 영상 (오른쪽 아래 md6 offset-md-6) -->
          <v-col cols="12" md="6" class="mt-6 mb-7 offset-md-6">
            <div class="d-flex justify-start">
              <p class="stitle16-14 ml1 mr6 con5">영상</p>
              <div class="ml-6">
                <p class="body16 mb1 bd">자기소개 영상 또는 연기 영상</p>
                <p class="body16 mb1">정면이 제대로 보이도록 카메라 각도와 높이에 유의할 것</p>
                <p class="body16 mb1">셀카 각도, 어두운 조명은 피할 것</p>
                <p class="body16 mb1">얼굴을 제대로 분간할 수 없는 영상은 심사에서 제외</p>
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- 오디션 주의 사항 -->
        <v-col cols="12" class="d-flex justify-center">
          <div class="d-flex align-center mb4 audition-warning mt6">
            <v-icon left color="black" class="mr2 body16 mr-1">mdi-alert</v-icon>
            <span class="warning-title title24-1 "> 오디션 지원 주의사항</span>
          </div>
        </v-col>

        <v-col cols="12" class="gr">
          <p class="body16 mt6 mb1">오디션 지원서의 모든 내용은 반드시 기재해주세요.</p>
          <ol>
            <li class="body14 ml-6 gr">남자는 군필 여부 기재 필수</li>
            <li class="body14 ml-6 gr">'만 나이'가 아닌 '연나이'로 기재</li>
          </ol>
          <p class="body16 mt1 mb1">이메일 접수의 시 파일명과 메일 제목은 [날짜_이름]으로 반드시 통일해주세요.</p>
          <ol>
            <li class="body14 ml-6 gr">ex) 20150115_홍길동</li>
          </ol>
          <p class="body16 mt1">동일한 지원서와 영상으로 중복 지원이 불가합니다.</p>
          <p class="body16 mt1">누락되는 자료가 없는지 반드시 확인하고 보내주세요.</p>
          <p class="body16 mt1">1차 서류심사 합격자에 대한 개별 통보해 드리며 전화 문의는 받지 않습니다.</p>
          <p class="body16 mt1 red">사진/영상 첨부 방법을 반드시 준수해주세요. 부적합한 경우 심사에서 제외됩니다.</p>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
