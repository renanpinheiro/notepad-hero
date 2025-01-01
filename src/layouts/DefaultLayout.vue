<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '../stores/user';
import NSidebar from '../components/NSidebar.vue';

const hasScrolled = ref(false);
const userStore = useUserStore();

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="min-h-screen w-full">
    <header class="w-full text-white p-4 font-better_vcr fixed top-0 left-0 z-50 transition-colors" :class="{ 'bg-[#23272A]': hasScrolled }">
      <section class="flex justify-between items-center">
        <div class="flex items-center gap-2 bg-[#2F3136] px-2 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base">
          <img class="w-6 h-6 sm:w-8 sm:h-8" src="../assets/witch_cap.svg" alt="Coin" />
          <span class="hidden sm:inline">Lvl.</span>
          <span>1</span>
          &nbsp;
          <img class="w-6 h-6 sm:w-8 sm:h-8" src="../assets/coin_2.svg" alt="Coin" />
          <span class="truncate max-w-[4rem] sm:max-w-none">{{ userStore.user.coins }}</span>
        </div>

        <router-link to="/profile" class="flex items-center gap-2 bg-[#2F3136] px-4 py-2 rounded-full">
          <img width="32" height="32" src="../assets/helm.svg" alt="Note" />
          <span>{{ userStore.user.name }}</span>
        </router-link>
      </section>
    </header>

    <NSidebar />

    <main class="lg:ml-64 transition-all duration-300">
      <div class="container mx-auto p-4 mt-20">
        <router-view />
      </div>
    </main>
  </div>
</template>