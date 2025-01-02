import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/user';
import { routes } from './routes';
import useAuth from '../composables/auth';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _from, next) => {
  const userStore = useUserStore();
  const auth = useAuth();

  await auth.initializeAuth();

  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !userStore.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
