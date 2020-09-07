import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layout/MainLayout'),
    children: [
      {
        path: '',
        name: '메인',
        meta: {
          title: 'AMADO',
        },
        component: () =>
          import(/* webpackChunkName: "index" */ '@/views/PostsView'),
      },
      {
        path: 'login',
        name: '로그인',
        meta: {
          title: 'AMADO 로그인',
        },
        component: () =>
          import(/* webpackChunkName: "login" */ '@/views/LoginView'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('@/layout/MainLayout'),
    children: [
      {
        path: '',
        name: '예외',
        component: () =>
          import(/* webpackChunkName: "page" */ '@/views/NotFoundView'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
