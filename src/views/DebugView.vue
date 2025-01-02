<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="pixel-art-background absolute inset-0 -z-10"></div>
    <h1 class="text-4xl font-bold font-better_vcr">Debug</h1>
  </div>
</template>

<style scoped>
.pixel-art-background {
  background-image: repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 4px,
      rgba(35, 39, 42, 0.9) 4px,
      rgba(35, 39, 42, 0.9) 8px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(35, 39, 42, 1) 0px,
      rgba(88, 101, 242, 1) 8px,
      rgba(88, 101, 242, 0.9) 16px,
      rgba(88, 101, 242, 0.8) 24px,
      rgba(88, 101, 242, 0.6) 32px
    );
  background-size: 8px 8px;
  animation: twinkle 3s ease-in-out infinite alternate;
}

@keyframes twinkle {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}
</style>
