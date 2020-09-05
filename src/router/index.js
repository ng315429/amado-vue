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
        component: () =>
          import(/* webpackChunkName: "index" */ '@/views/IndexView'),
      },
      {
        path: 'login',
        name: '메인',
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
