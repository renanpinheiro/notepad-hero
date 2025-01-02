<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue';
interface NDialogProps {
  isOpen: boolean;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hideClose?: boolean;
}

const props = defineProps<NDialogProps>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const handleClose = () => {
  emit('close');
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && !props.hideClose) {
    handleClose();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});

const dialogSizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'max-w-sm';
    case 'md':
      return 'max-w-md';
    case 'lg':
      return 'max-w-lg';
    case 'xl':
      return 'max-w-xl';
    default:
      return 'max-w-md';
  }
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div
        class="fixed inset-0 bg-black/50 transition-opacity"
        @click="!hideClose && handleClose"
      />

      <div class="flex min-h-screen items-center justify-center p-4">
        <div
          :class="[dialogSizeClasses, 'relative w-full rounded-lg bg-[#2F3136] shadow-xl']"
          @click.stop
        >
          <button
            v-if="!hideClose"
            class="absolute right-4 top-4 text-gray-400 hover:text-gray-300 focus:outline-none"
            @click="handleClose"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div v-if="$slots.header || title" class="px-6 py-4 border-b border-gray-700">
            <slot name="header">
              <h3 class="text-lg font-medium text-white font-better_vcr">
                {{ title }}
              </h3>
            </slot>
          </div>

          <div class="px-6 py-4">
            <slot />
          </div>

          <div class="px-6 py-4 border-t border-gray-700 flex justify-end gap-2">
            <button
              class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-better_vcr focus:outline-none focus:ring-2 focus:ring-purple-500"
              @click="handleClose"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
