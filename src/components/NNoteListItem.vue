<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
    id: number|string;
    title: string;
    description: string;
}>();

const router = useRouter();

function handleClick() {
    router.push(`/note/${props.id}`);
}
</script>

<template>
    <div class="flex flex-col gap-2 my-3 border-b border-gray-200 rounded-md p-4">
        <div class="flex items-start gap-2 cursor-pointer hover:bg-blue-800 transition-colors p-3 rounded-md group" @click="handleClick">
            <div class="flex-1">
                <h2 class="text-base md:text-lg lg:text-xl font-bold font-better_vcr">{{ title }}</h2>
                <p class="text-xs md:text-sm lg:text-base text-gray-500 font-better_vcr">{{ description }}</p>
            </div>
            <svg class="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18l6-6-6-6"/>
            </svg>
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-2 mt-4">
            <div class="flex items-center gap-2">
                <img class="w-4 h-4 md:w-5 md:h-5" src="../assets/note.svg" alt="Note" />
                <span class="text-sm md:text-base">{{ $t('notes.created_at') }}: 30/12/2024</span>
            </div>
            
            <div class="flex items-center gap-2">
                <img class="w-4 h-4 md:w-5 md:h-5" src="../assets/blue_scroll.svg" alt="Note" />
                <span class="text-sm md:text-base">{{ $t('notes.category') }}: Geral</span>
            </div>

            <div class="flex flex-wrap items-center gap-2">
                <img class="w-4 h-4 md:w-5 md:h-5" src="../assets/leaf.svg" alt="Note" />
                <span class="text-xs md:text-sm bg-gray-500 rounded-md px-2 py-1">#teste</span>
                <span class="text-xs md:text-sm bg-gray-500 rounded-md px-2 py-1">#teste 2</span>
                <span class="text-xs md:text-sm bg-gray-500 rounded-md px-2 py-1">#teste 3</span>
            </div>  
        </div>
    </div>
</template>