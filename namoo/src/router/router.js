/*npm install vue-router */
import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue';

import News from '@/components/community/News.vue';
import Notice from '@/components/community/Notice.vue';
import NoticeDetail from '@/components/community/NoticeDetail.vue';

import Actors from '@/components/artist/Artist.vue';
import Artist from '@/components/artist/ArtistDetail.vue';

import Info from '@/components/audition/Info.vue';
import Faq from '@/components/audition/Faq.vue';

const routes = [
  { path:'/', redirect:'/home' }, // 기본 리디렉션
  { path:'/home', component:Home },

  { path:'/news', component:News },
  { path:'/notice', component:Notice },
  { path:'/notice/:id', name:'NoticeDetail', component:NoticeDetail },

  { path: '/artist', component:Actors },
  { path: '/artist/:id', name:'ArtistDetail', component:Artist},

  { path: '/audition', component:Info },
  { path: '/fAQ', component:Faq },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;