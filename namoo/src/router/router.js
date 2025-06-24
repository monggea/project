/*npm install vue-router */
import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue';

import News from '@/components/community/News.vue';
import Notice from '@/components/community/Notice.vue';
import NoticeDetail from '@/components/community/NoticeDetail.vue';

const routes = [
  { path:'/', redirect:'/home' }, // 기본 리디렉션
  { path:'/home', component:Home },

  { path:'/news', component:News },
  { path:'/notice', component:Notice },
  { path:'/notice/:id', name:'NoticeDetail', component:NoticeDetail },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;