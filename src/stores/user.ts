import { defineStore } from "pinia";
import type { User } from "../types/user.types";

interface UserStore {
  user: User;
  isAuthenticated: boolean;
}

export const useUserStore = defineStore('user', {
  state: (): UserStore => ({
    user: {
      name: 'Renan L.',
      level: 1,
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
})