/*npm install vue-router */
import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/coms/Home.vue';

import Company from '@/components/company/CompanyIntro.vue';
import History from '@/components/company/CompanyHistory.vue';

import Artist from '@/components/artist/Artist.vue';

import News from '@/components/community/News.vue';
import Notice from '@/components/community/Notice.vue';
import No1 from '@/components/community/notice/NooticeContent.vue';

import InformationPage from '@/components/audition/InformationPage.vue';
import FAQ from '@/components/audition/FAQ.vue';


const routes = [
  { path:'/', redirect:'/home' }, // 기본 리디렉션
  { path:'/home', component:Home },

  { path:'/company', component:Company },
  { path: '/company/history', component: History},

  { path:'/artist', component:Artist },

  { path:'/news', component:News },
  { path:'/notice', component:Notice },
  { path:'/notice/1', component:No1 },

  { path: '/audition', component: InformationPage },
  { path: '/FAQ', component: FAQ },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;

