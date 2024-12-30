<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
}>();
</script>

<template>
    <div class="flex flex-col gap-2 my-3 border-b border-gray-200 rounded-md p-4 cursor-pointer hover:bg-blue-800 transition-colors">
        <h2 class="text-lg font-bold font-better_vcr">{{ title }}</h2>
        <p class="text-sm text-gray-500 font-better_vcr">{{ description }}</p>

        <div class="flex items-center justify-between gap-2 mt-4">
            <div class="flex items-center gap-2">
                <img width="16" height="16" src="../assets/note.svg" alt="Note" />
                <span>10/12/2024</span>
            </div>
            
            <div class="flex items-center gap-2">
                <img width="16" height="16" src="../assets/blue_scroll.svg" alt="Note" />
                <span>Geral</span>
            </div>

            <div class="flex items-center gap-2">
                <img width="16" height="16" src="../assets/leaf.svg" alt="Note" />
                <span class="bg-gray-500 rounded-md px-2 py-1">#teste</span>
                <span class="bg-gray-500 rounded-md px-2 py-1">#teste 2</span>
                <span class="bg-gray-500 rounded-md px-2 py-1">#teste 3</span>
            </div>  
        </div>
    </div>
</template>