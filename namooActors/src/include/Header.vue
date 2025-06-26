<template>
  <v-app-bar
    app
    fixed
    flat
    :color="isOpaque ? 'white' : 'transparent'"
    :class="[{ 'nav-border': isScrolled }, 'transition-navbar']"
  >
    <!-- 로고 -->
    <v-toolbar-title class="fixed-title">
      <RouterLink to="/" @click.native="closeDrawer">
        <div class="but"></div>
      </RouterLink>
    </v-toolbar-title>

    <v-spacer />

    <!-- 데스크탑 메뉴 (lg 이상) -->
    <div class="menu-wrapper d-none d-lg-flex">
      <v-btn
        text
        to="/company"
        class="menu-btn"
        :class="{ 'active-tab': $route.path === '/company' }"
        >COMPANY</v-btn
      >
      <v-btn
        text
        to="/artist"
        class="menu-btn"
        :class="{ 'active-tab': $route.path === '/artist' }"
        >ARTIST</v-btn
      >
      <v-btn
        text
        to="/news"
        class="menu-btn"
        :class="{ 'active-tab': $route.path === '/community' }"
        >COMMUNITY</v-btn
      >
      <v-btn
        text
        to="/audition"
        class="menu-btn"
        :class="{ 'active-tab': $route.path === '/audition' }"
        >AUDITION</v-btn
      >
    </div>

    <!-- 햄버거 / 닫기 버튼 (lg 이하) -->
    <v-btn icon class="d-lg-none" @click="drawer = !drawer" ripple="false">
      <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- 드로어 메뉴 -->
  <v-navigation-drawer
    v-if="drawer"
    v-model="drawer"
    temporary
    absolute
    right
    class="custom-drawer"
    disable-resize-watcher
  >
    <v-list>
      <v-list-item
        @click="navigate('/company')"
        :class="{ 'active-drawer-item': activeDrawerItem === '/company' }"
      >
        <v-list-item-title>COMPANY</v-list-item-title>
      </v-list-item>
      <v-list-item
        @click="navigate('/artist')"
        :class="{ 'active-drawer-item': activeDrawerItem === '/artist' }"
      >
        <v-list-item-title>ARTIST</v-list-item-title>
      </v-list-item>
      <v-list-item
        @click="navigate('/community')"
        :class="{ 'active-drawer-item': activeDrawerItem === '/community' }"
      >
        <v-list-item-title>COMMUNITY</v-list-item-title>
      </v-list-item>
      <v-list-item
        @click="navigate('/audition')"
        :class="{ 'active-drawer-item': activeDrawerItem === '/audition' }"
      >
        <v-list-item-title>AUDITION</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      isScrolled: false,
      isOpaque: false,
      activeDrawerItem: "", // 드로어 메뉴에서 활성화된 메뉴 경로
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    drawer(val) {
      if (val) {
        // 드로어 열릴 때 현재 라우트 경로를 activeDrawerItem으로 설정
        this.activeDrawerItem = this.$route.path;
      }
    },
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      this.isScrolled = scrollY > 0;
      this.isOpaque = scrollY > 1;
    },
    navigate(path) {
      this.activeDrawerItem = path; // 클릭한 경로를 저장
      this.drawer = false;
      setTimeout(() => {
        if (this.$route.path !== path) {
          this.$router.push(path);
        }
      }, 150);
    },
    closeDrawer() {
      this.drawer = false;
      if (this.$route.path !== "/home") {
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style scoped>
.v-app-bar {
  width: 100%;
  height: 120px;
  padding: 0 24px;
  transition: all 0.3s ease;
  z-index: 10;
}
@media (max-width: 960px) {
  .v-app-bar {
    height: 80px;
  }
}
.nav-border {
  border-bottom: 2px solid black;
}
.fixed-title {
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.but {
  background-image: url('@/assets/img/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 65px;
}
.menu-wrapper {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right: 24px;
}
.menu-btn {
  font-size: clamp(0.875rem, 1vw, 1.125rem);
  font-weight: 600;
  color: black;
  background-color: transparent !important;
  text-transform: uppercase;
  margin-top: 42px;
}
.active-tab {
  color: #76a84c !important;
}

/* 드로어 기본 스타일 */
.custom-drawer {
  width: 250px !important;
  background-color: white !important;
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
  top: 120px;
  height: calc(100vh - 120px);
  z-index: 9;
  position: fixed !important;
  right: 0;
  transition: none !important;
}

/* 모바일 대응 (헤더 작아짐) */
@media (max-width: 960px) {
  .custom-drawer {
    top: 80px;
    height: calc(100vh - 80px);
  }
}

/* 중간 반응형 (전체 너비 사용 및 네비 위부터 흰 배경 + padding-top 120px) */
@media (max-width: 1264px) {
  .custom-drawer {
    width: 100% !important;
    right: 0;
    top: 0 !important;
    height: 100vh !important;
    padding-top: 120px;
  }
  /* 호버 시 배경색 변경 */
  .custom-drawer .v-list-item:hover {
    background-color: #e6f0d4; /* 연한 초록색 느낌 (원하는 색으로 변경 가능) */
  }
}

/* 드로어 메뉴 클릭 시 활성화 스타일 (글자색만) */
.active-drawer-item .v-list-item-title {
  color: #76a84c !important;
}

.v-list-item-title {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: black;
}
</style>