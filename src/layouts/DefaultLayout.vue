<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const hasScrolled = ref(false);

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
        <div class="flex items-center gap-2">
          <img width="32" height="32" src="../assets/coin_2.svg" alt="Coin" />
          150
        </div>

        <div class="flex items-center gap-2">
            <img width="32" height="32" src="../assets/note.svg" alt="Note" />
            <span>Minhas notas</span>
        </div>
      </section>
    </header>

    <main class="container mx-auto p-4 mt-20">
      <router-view />
    </main>
  </div>
</template>