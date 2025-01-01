<script setup lang="ts">
import NNoteListItem from './NNoteListItem.vue';
</script>

<template>
  <div class="flex flex-col gap-4 p-4 rounded-md note-list w-full max-w-7xl mx-auto">
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold font-better_vcr">Últimas notas</h1>
    <div class="flex flex-col gap-4 mt-2">
      <h2 class="text-lg md:text-xl lg:text-2xl font-bold font-better_vcr">30/12/2024</h2>
      <div class="flex flex-col gap-4">
        <NNoteListItem
          id="1"
          title="Nota 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <NNoteListItem
          id="2"
          title="Nota 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <NNoteListItem
          id="3"
          title="Nota 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <NNoteListItem
          id="4"
          title="Nota 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <NNoteListItem
          id="5"
          title="Nota 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h2 class="text-lg md:text-xl lg:text-2xl font-bold font-better_vcr">29/12/2024</h2>
      <div class="flex flex-col gap-4">
        <NNoteListItem
          id="6"
          title="Nota 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <NNoteListItem
          id="7"
          title="Nota 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <NNoteListItem
          id="8"
          title="Nota 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <NNoteListItem
          id="9"
          title="Nota 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <NNoteListItem
          id="10"
          title="Nota 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.note-list {
  background-color: rgba(35, 39, 42, 0.8);
  border-radius: 10px;
  padding: 20px;
}

@media (max-width: 768px) {
  .note-list {
    padding: 12px;
  }
}
</style>
