<script setup lang="ts">
import NButton from './NButton.vue';
import useAuth from '../composables/auth';

const auth = useAuth();

const onButtonClick = async () => {
  await auth.signInWithGoogle();
};
</script>

<template>
  <NButton
    :label="$t('login.signInWithGoogle')"
    type="info"
    customClass="bg-white text-gray-900"
    textAlign="center"
    @click="onButtonClick"
  >
    <template #icon>
      <img width="30" height="30" src="../assets/google_pixel_art.svg" alt="Google" />
    </template>
  </NButton>
</template>
