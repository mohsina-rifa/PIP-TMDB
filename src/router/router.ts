import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // landing-page
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  // listing-page
  {
    path: '/list/:category',
    name: 'List',
    component: () => import('../views/List.vue'),
  },
  // search-results
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
  },
  // movie-detail
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: () => import('../views/MovieDetail.vue'),
    props: true,
  },
  // tv-show-detail
  {
    path: '/tv/:id',
    name: 'TvDetail',
    component: () => import('../views/TvDetail.vue'),
    props: true,
  },
  // user-saved
  {
    path: '/watchList',
    name: 'WatchList',
    component: () => import('../views/WatchList.vue'),
  },
  // fallback
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;