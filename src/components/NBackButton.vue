<script setup lang="ts">
import { useRouter } from 'vue-router';
import NButton from './NButton.vue';

const router = useRouter();

function handleBack() {
    router.back();
}
</script>

<template>
    <NButton type="secondary" textAlign="left" label="Voltar" customClass="w-fit" @click="handleBack">
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
</template> 