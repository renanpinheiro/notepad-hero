<script setup lang="ts">
import NButton from './NButton.vue';
</script>

<template>
  <NButton
    :label="$t('login.signInWithDiscord')"
    type="info"
    customClass="bg-[#5663F7] text-gray-100"
    textAlign="center"
    disabled
  >
    <template #icon>
      <img width="32" height="32" src="../assets/discord_pixel_art.svg" alt="Discord" />
    </template>
  </NButton>
</template>
