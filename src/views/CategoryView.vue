<script setup lang="ts">
import { useUserStore } from '../stores/user';
import NBackButton from '../components/NBackButton.vue';

const userStore = useUserStore();
</script>

<template>
    <div class="flex flex-col gap-4 p-4 rounded-md note-list w-full max-w-7xl mx-auto">
        <NBackButton />
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold font-better_vcr">Meu Personagem</h1>
        <div class="flex flex-col gap-4 mt-2">
            <h2 class="flex flex-row justify-between text-lg md:text-xl lg:text-2xl font-bold font-better_vcr">
                <span class="text-gray-400">
                    Renan Pinheiro de Azevedo Lima
                </span>

                <span class="text-gray-400">
                    Lvl. {{ userStore.level }}
                </span>
            </h2>
        </div>
    </div>
</template>