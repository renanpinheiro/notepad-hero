<script setup lang="ts">
import { useRouter } from 'vue-router';
import NButton from '../components/NButton.vue';
import NWysiwyg from '../components/NWysiwyg.vue';

const router = useRouter();

const noteId = router.currentRoute.value.params.id as string;

function handleBack() {
  router.back();
}
</script>

<template>
  <div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2 mb-4">
        <NButton
          type="secondary"
          textAlign="left"
          label="Voltar"
          customClass="w-fit"
          @click="handleBack"
        >
          <template #icon>
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </template>
        </NButton>
      </div>

      <div class="flex items-center gap-2 border-b border-gray-200 pb-4">
        <img class="w-6 h-6" src="../assets/note.svg" alt="Note" />
        <input
          type="text"
          :value="`Nota ${noteId}`"
          class="bg-transparent font-better_vcr text-lg"
        />
      </div>

      <div class="flex flex-col gap-2 bg-gray-200 rounded-md p-4">
        <NWysiwyg />
      </div>
    </div>
  </div>
</template>
