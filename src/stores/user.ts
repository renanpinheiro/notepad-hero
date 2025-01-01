import { defineStore } from 'pinia';
import type { User } from '../types/user.types';
import type { Level } from '../types/game.types';

interface UserStore {
  user: User;
  isAuthenticated: boolean;
}

export const useUserStore = defineStore('user', {
  state: (): UserStore => ({
    user: {
      name: 'Renan L.',
      level: {} as Level,
      coins: 0,
      notes: [],
    },
    isAuthenticated: false,
  }),
  actions: {
    setUser(user: User) {
      this.user = user;
    },
  },
});
