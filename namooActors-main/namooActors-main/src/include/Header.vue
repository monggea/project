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
              :class="{ 'active-tab': $route.path.startsWith('/community') }"
            >COMMUNITY</v-btn>
          </template>
          <v-list>
            <v-list-item :to="'/community/news'">
              <v-list-item-title>NEWS</v-list-item-title>
            </v-list-item>
            <v-list-item :to="'/community/notice'">
              <v-list-item-title>NOTICE</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template v-else>
        <v-btn
          text
          class="menu-btn"
          :class="{ 'active-tab': $route.path === '/community' }"
          @click="navigate('/community')"
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
          <v-list-item @click="navigate('/community/news')">
            <v-list-item-title>NEWS</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigate('/community/notice')">
            <v-list-item-title>NOTICE</v-list-item-title>
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
        <div v-if="showAuditionSubmenu" class="pl-6">
          <v-list-item @click="navigate('/audition')">
            <v-list-item-title>INFORMATION</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigate('/faq')">
            <v-list-item-title>FAQ</v-list-item-title>
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

