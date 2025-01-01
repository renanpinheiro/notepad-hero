import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

export default function useAuth() {
  const userStore = useUserStore();
  const router = useRouter();

  function checkAuth() {
    if (userStore.isAuthenticated) return true;

    router.push('/login');

    return false;
  }

  return {
    checkAuth,
  };
}
