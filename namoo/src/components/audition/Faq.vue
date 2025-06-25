<template>
  <v-container>
    <v-row justify="center" class="grid12">
      <v-col cols="12" md="8" class="top">
        <h1 class="title72 mb4 text-left">Audition.</h1>

        <!-- 버튼 -->
        <v-btn
          class="top-btn mb12"
          :class="{ active: activeButton === 'audition' }"
          @click="navigate('audition')"
          ripple
        >
          Information
        </v-btn>
        <v-btn
          class="top-btn mb12"
          :class="{ active: activeButton === 'faq' }"
          @click="navigate('faq')"
          ripple
        >
          FAQ
        </v-btn>

        <div class="top-line mt3 mb5"></div>

        <h2 class="stitle36-1 ti text-left">
          오디션 지원자들이<br class="mobile-br" />
          자주 하는 질문입니다.
        </h2>

        <!-- FAQ 목록 -->
        <div class="bo1">
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      openIndex: null,
      activeButton: null,
      faqs: [
        {
          question: '오디션 및 연기 경험이 전혀 없습니다. 지원해도 될까요?',
          answer:
            '오디션과 연기 경험이 없고, 연기 관련 레슨을 받은 경험이 전혀 없는 초보자도 괜찮습니다.\n배우가 되고자 하는 열정과 의지만 충분하다면, 자신감을 갖고 오디션에 지원해주세요.',
        },
        {
          question: '지원서, 사진, 영상을 제출한대로 제출하지 않으면 탈락하나요?',
          answer: '가급적 권장하지만, 일부 누락은 불이익이 없을 수 있습니다.',
        },
        {
          question: '활동 경력이 없으면 불리한가요? 어떻게 적어야 하나요?',
          answer:
            '없어도 괜찮습니다. 자기소개서에 자신의 열정과 지원 동기를 진솔하게 표현하는 것이 중요합니다.',
        },
        {
          question: '오디션 심사기준과 경쟁률은 어떻게 되나요?',
          answer:
            '심사 기준은 지원자의 개성, 태도, 성장 가능성 등을 중심으로 합니다. 경쟁률은 시즌마다 달라집니다.',
        },
        {
          question: '오디션은 중복 지원이 가능한가요?',
          answer:
            '다른 기획사나 오디션과 병행 지원 가능합니다. 단, 일정이 겹치지 않도록 주의해 주세요.',
        },
        {
          question: '지방/해외에 거주하고 있습니다. 오디션 참여는 어떻게 하나요?',
          answer:
            '온라인 비대면 참여 또는 지정된 오프라인 장소에서 참여할 수 있도록 안내됩니다.',
        },
        {
          question: '합격/불합격 여부를 어떻게 알 수 있나요? 진짜 연락이 오나요?',
          answer:
            '합격자에게만 개별 연락 드립니다. 연락처를 정확히 입력해 주세요.',
        },
        {
          question: '1차에 합격했습니다. 2차, 3차 오디션은 어떻게 준비해야 하나요?',
          answer:
            '합격자에게 개별적으로 준비 내용과 일정을 안내드립니다.',
        },
        {
          question: '3차 면접까지 합격하면 그 다음은 어떻게 되나요?',
          answer:
            '트레이닝 과정 및 계약 절차에 대해 안내드리며, 필요 시 보호자 동의 절차가 포함됩니다.',
        },
        {
          question: '트레이닝 비용은 본인이 부담해야 하나요?',
          answer:
            '전액 또는 일부는 회사가 지원하며, 케이스에 따라 다를 수 있습니다.',
        },
        {
          question: '현재 트레이닝 받고 있는 인원은 몇 명인가요? 계약은 어떻게 하나요?',
          answer:
            '정확한 인원은 비공개이며, 계약은 합격 후 별도로 진행됩니다.',
        },
      ],
    };
  },
  created() {
    const path = this.$route.path.replace('/', '');
    if (path === 'audition' || path === 'informationpage') {
      this.activeButton = 'audition';
    } else if (path === 'faq') {
      this.activeButton = 'faq';
    } else {
      this.activeButton = null;
    }
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
    navigate(page) {
      this.activeButton = page;
      this.$router.push(`/${page}`);
    },
  },
};
</script>