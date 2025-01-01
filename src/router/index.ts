import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/user';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore();
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !userStore.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
