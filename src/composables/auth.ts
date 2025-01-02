import { useUserStore } from '../stores/user';
import useSupabase from './supabase';
import type { LoginPayload } from '../types/login.types';
import type { Level } from '../types/game.types';

export default function useAuth() {
  const userStore = useUserStore();
  const supabase = useSupabase();

  async function initializeAuth() {
    const {
      data: { session },
    } = await supabase.client.auth.getSession();
    console.log(session);
    userStore.isAuthenticated = !!session;

    if (session?.user) {
      userStore.setUser({
        name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || '',
        level: {} as Level,
        coins: 0,
        notes: [],
      });
    }

    supabase.client.auth.onAuthStateChange((_event, session) => {
      console.log(session);
      userStore.isAuthenticated = !!session;
    });
  }

  async function signInWithEmail(payload: LoginPayload) {
    const { data, error } = await supabase.client.auth.signInWithPassword(payload);

    if (error) {
      throw new Error(error.message);
    }

    console.log(data);
  }

  async function signUpWithEmail(payload: LoginPayload) {
    const { data, error } = await supabase.client.auth.signUp(payload);

    if (error) {
      throw new Error(error.message);
    }

    console.log(data);
  }

  async function signInWithGoogle() {
    const { data, error } = await supabase.client.auth.signInWithOAuth({ provider: 'google' });

    if (error) {
      throw new Error(error.message);
    }

    console.log(data);
  }

  async function signOut() {
    const { error } = await supabase.client.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
  }

  return {
    initializeAuth,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signOut,
  };
}
