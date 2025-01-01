<script setup lang="ts">
import NButton from './NButton.vue';
</script>

<template>
  <NButton
    :label="$t('login.sign_in_with_google')"
    type="info"
    customClass="bg-white text-black"
    textAlign="center"
  >
    <template #icon>
      <img width="30" height="30" src="../assets/google_pixel_art.svg" alt="Google" />
    </template>
  </NButton>
</template>
