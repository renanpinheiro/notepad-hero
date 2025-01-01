<script setup lang="ts">
import NLanguageSwitcher from '../components/NLanguageSwitcher.vue';
</script>

<template>
  <div class="flex flex-col max-h-screen overflow-hidden">
    <div class="flex justify-between items-center p-2 sm:p-4">
      <div class="flex items-center gap-1 sm:gap-2">
        <img src="../assets/logo.png" alt="Notepad Hero" class="w-8 h-8 sm:w-10 sm:h-10" />
        <h2 class="text-xl sm:text-2xl font-bold text-white font-better_vcr">Notepad Hero</h2>
      </div>
      <NLanguageSwitcher />
    </div>
    <div class="flex-grow overflow-hidden">
      <router-view></router-view>
    </div>
    <div
      class="footer p-2 text-center text-xs sm:text-sm text-white bg-purple-900 backdrop-blur-sm shadow-md mx-auto mt-20 w-full"
    >
      <p>© 2025 Notepad Hero. Made with 💜 by <b>Imovity</b>.</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.starry-night {
  background: radial-gradient(circle at center, #0a192f 0%, #020c1b 100%);
  position: relative;
  overflow: hidden;
}

.starry-night::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  z-index: -1;
  background-image: radial-gradient(2px 2px at 40px 60px, #fff 50%, transparent),
    radial-gradient(2px 2px at 20px 50px, rgba(255, 255, 255, 0.8) 50%, transparent),
    radial-gradient(2px 2px at 30px 100px, rgba(255, 255, 255, 0.9) 50%, transparent),
    radial-gradient(2px 2px at 40px 60px, rgba(255, 255, 255, 0.8) 50%, transparent),
    radial-gradient(2px 2px at 110px 90px, rgba(255, 255, 255, 0.7) 50%, transparent),
    radial-gradient(2px 2px at 190px 150px, rgba(255, 255, 255, 0.9) 50%, transparent);
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: twinkle 4s linear infinite;
}

@keyframes twinkle {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100px);
  }
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
}
</style>
