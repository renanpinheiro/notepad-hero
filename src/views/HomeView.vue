<script setup lang="ts">
import NButton from '../components/NButton.vue';
import NNoteList from '../components/NNoteList.vue';
</script>

<template>
  <div class="home">
    <div class="flex flex-col gap-4 mb-4">
        <NButton type="primary" label="Criar Nova Nota" textAlign="center">
            <template #icon>
                <img class="w-6 h-6" src="../assets/note.svg" alt="Note" />
            </template>
        </NButton>
    </div>
    <NNoteList />
  </div>
</template> 