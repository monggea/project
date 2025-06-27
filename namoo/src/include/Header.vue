<template>
  <v-app-bar
    app
    fixed
    flat
    :color="isOpaque ? 'white' : 'transparent'"
    :class="[{ 'nav-border': isScrolled }, 'transition-navbar']"
  >
    <!-- 로고 -->
    <v-toolbar-title class="fixed-title mt-3">
      <RouterLink to="/home" @click.native="closeDrawer">
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
      >COMPANY</v-btn>

      <v-btn
        text
        to="/artist"
        class="menu-btn"
        :class="{ 'active-tab': $route.path === '/artist' }"
      >ARTIST</v-btn>

      <!-- COMMUNITY 드롭다운 -->
      <template v-if="showCommunityDropdown">
        <v-menu open-on-hover offset-y>
          <template #activator="{ props }">
            <v-btn
              text
              v-bind="props"
              class="menu-btn"
              :class="{ 'active-tab': $route.path.startsWith('/news') }"
            >COMMUNITY</v-btn>
          </template>
          <v-list>
            <v-list-item :to="'/news'">
              <v-list-item-title>NEWS</v-list-item-title>
            </v-list-item>
            <v-list-item :to="'/notice'">
              <v-list-item-title>NOTICE</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template v-else>
        <v-btn
          text
          class="menu-btn"
          :class="{ 'active-tab': $route.path === '/news' }"
          @click="navigate('/news')"
        >COMMUNITY</v-btn>
      </template>

      <!-- AUDITION 드롭다운 -->
      <template v-if="showAuditionDropdown">
        <v-menu open-on-hover offset-y>
          <template #activator="{ props }">
            <v-btn
              text
              v-bind="props"
              class="menu-btn"
              :class="{ 'active-tab': $route.path.startsWith('/audition') }"
            >AUDITION</v-btn>
          </template>
          <v-list>
            <v-list-item :to="'/audition'">
              <v-list-item-title>INFORMATION</v-list-item-title>
            </v-list-item>
            <v-list-item :to="'/faq'">
              <v-list-item-title>FAQ</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template v-else>
        <v-btn
          text
          class="menu-btn"
          :class="{ 'active-tab': $route.path === '/audition' }"
          @click="navigate('/audition')"
        >AUDITION</v-btn>
      </template>
    </div>

    <!-- 모바일 메뉴 버튼 -->
    <v-btn icon class="d-lg-none" @click="drawer = !drawer" ripple="false">
      <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- 모바일 드로어 메뉴 -->
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

      <!-- COMMUNITY + 서브 -->
      <v-list-item
        @click="toggleSubCommunity"
        :class="{ 'active-drawer-item': activeDrawerItem.startsWith('/community') }"
      >
        <v-list-item-title>COMMUNITY</v-list-item-title>
      </v-list-item>
      <v-slide-y-transition>
        <div v-if="showCommunitySubmenu" class="pl-6">
          <v-list-item @click="navigate('/news')">
            <v-list-item-title class="gr">NEWS</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigate('/notice')">
            <v-list-item-title class="gr">NOTICE</v-list-item-title>
          </v-list-item>
        </div>
      </v-slide-y-transition>

      <!-- AUDITION + 서브 -->
      <v-list-item
        @click="toggleSubAudition"
        :class="{ 'active-drawer-item': activeDrawerItem.startsWith('/audition') }"
      >
        <v-list-item-title>AUDITION</v-list-item-title>
      </v-list-item>
      <v-slide-y-transition>
        <div v-if="showAuditionSubmenu" class="pl-6 ">
          <v-list-item @click="navigate('/audition')">
            <v-list-item-title class="gr">INFORMATION</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigate('/faq')">
            <v-list-item-title class="gr">FAQ</v-list-item-title>
          </v-list-item>
        </div>
      </v-slide-y-transition>
    </v-list>

    <!-- SNS 아이콘 하단 고정 -->
    <div class="drawer-footer d-flex align-center">
      <v-btn icon href="" target="_blank" aria-label="Twitter">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon href="" target="_blank" aria-label="Instagram">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon href="" target="_blank" aria-label="YouTube">
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
      <v-btn icon href="" target="_blank" aria-label="Blog">
        <v-icon>mdi-web</v-icon>
      </v-btn>
    </div>
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
      activeDrawerItem: "",
      showAuditionSubmenu: false,
      showCommunitySubmenu: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    showAuditionDropdown() {
      return this.$route.path.startsWith("/audition") && this.$route.path !== "/audition";
    },
    showCommunityDropdown() {
      return this.$route.path.startsWith("/community") && this.$route.path !== "/community";
    },
  },
  watch: {
    drawer(val) {
      if (val) {
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
      this.activeDrawerItem = path;
      this.drawer = false;
      this.showAuditionSubmenu = false;
      this.showCommunitySubmenu = false;
      setTimeout(() => {
        if (this.$route.path !== path) {
          this.$router.push(path);
        }
      }, 150);
    },
    closeDrawer() {
      this.drawer = false;
      this.showAuditionSubmenu = false;
      this.showCommunitySubmenu = false;
      if (this.$route.path !== "/home") {
        this.$router.push("/home");
      }
    },
    toggleSubAudition() {
      this.showAuditionSubmenu = !this.showAuditionSubmenu;
      this.activeDrawerItem = "/audition";
    },
    toggleSubCommunity() {
      this.showCommunitySubmenu = !this.showCommunitySubmenu;
      this.activeDrawerItem = "/community";
    },
  },
};
</script>

<style sc>
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
.but {
  background-image: url("@/assets/img/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 150px;
  height: 50px;
  display: inline-block;
}

@media (max-width: 600px) {
  .logo-img {
    width: 100px;
    height: 35px;
  }
}

.logo-area {
  margin: 0 !important;
  padding: 0 !important;
}

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
