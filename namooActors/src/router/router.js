/*npm install vue-router */
import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/coms/Home.vue';

import Company from '../components/company/Company.vue';

import Artist from '../components/artist/Artist.vue';

import Newsroom from '../components/community/Newsroom.vue';
import Notice from '@/components/community/Notice.vue';

import Audition from '../components/audition/Audition.vue';


const routes = [
  { path: '/', redirect: '/home' }, // 기본 리디렉션
  { path: '/home', component: Home },

  { path: '/company', component: Company },

  { path: '/artist', component: Artist },

  { path: '/newsroom', component: Newsroom },
  { path: '/notice', component: Notice },

  { path: '/audition', component: Audition },
  

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;