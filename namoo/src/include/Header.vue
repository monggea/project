<template>
  <v-app-bar
    app
    fixed
    flat
    :color="isOpaque ? 'white' : 'transparent'"
    :height="isScrolled ? 120 : 120"
    :class="[{ 'nav-border': isScrolled }, 'transition-navbar']"
  >
    <v-toolbar-title class="font-weight-bold t1 fixed-title">
      <v-btn text :to="'/'" size="100%">
        <div class="but"></div>
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn class="mr-9" text :to="'/company'">COMPANY</v-btn>
    <v-btn class="mr-9" text :to="'/artist'">ARTIST</v-btn>
    <v-btn class="mr-9" text :to="'/news'">NEWS</v-btn>
    <v-btn class="mr-10" text :to="'/audition'">AUDITION</v-btn>
  </v-app-bar>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isScrolled: false,
      isOpaque: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      this.isScrolled = scrollY > 0;
      this.isOpaque = scrollY > 1080; // 100px 넘으면 배경색 채움, 조절 가능
    },
  },
};
</script>

<style scoped>
.v-app-bar {
  width: 100%;
  position: relative;
  transition: background-color 0.3s ease, height 0.3s ease, border-bottom 0.3s ease;
}

.but {
  background-image: url(../assets/img/logo.png);
  background-size: cover;
  width: 100px;
  height: 40px;
}

.nav-border {
  border-bottom: 2px solid black;
}

.fixed-title {
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
}
</style>