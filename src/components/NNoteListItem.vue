<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
}>();
</script>

<template>
    <div class="flex flex-col gap-2 my-3 border-b border-gray-200 rounded-md p-4 cursor-pointer hover:bg-blue-800 transition-colors">
        <h2 class="text-base md:text-lg lg:text-xl font-bold font-better_vcr">{{ title }}</h2>
        <p class="text-xs md:text-sm lg:text-base text-gray-500 font-better_vcr">{{ description }}</p>

        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-2 mt-4">
            <div class="flex items-center gap-2">
                <img class="w-4 h-4 md:w-5 md:h-5" src="../assets/note.svg" alt="Note" />
                <span class="text-sm md:text-base">10/12/2024</span>
            </div>
            
            <div class="flex items-center gap-2">
                <img class="w-4 h-4 md:w-5 md:h-5" src="../assets/blue_scroll.svg" alt="Note" />
                <span class="text-sm md:text-base">Geral</span>
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