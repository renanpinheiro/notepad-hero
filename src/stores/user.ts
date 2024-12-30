import { defineStore } from "pinia";
import type { User } from "../types/user.types";

export const useUserStore = defineStore('user', {
  state: (): User => ({
    name: 'Renan L.',
    level: 1,
    coins: 0,
    notes: [],
  }),
})