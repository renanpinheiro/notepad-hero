<script setup lang="ts">
interface NButtonProps {
  label: string;
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline';
  customClass?: string;
  textAlign?: 'left' | 'center' | 'right';
  disabled?: boolean;
}

const props = defineProps<NButtonProps>();
</script>

<template>
  <button
    :class="[
      props.customClass,
      {
        'bg-blue-500': props.type === 'primary',
        'bg-gray-500': props.type === 'secondary',
        'bg-green-500': props.type === 'success',
        'bg-red-500': props.type === 'danger',
        'bg-yellow-500': props.type === 'warning',
        'bg-blue-400': props.type === 'info',
        'bg-transparent': props.type === 'outline',
      },
      'flex items-center gap-4 text-white px-4 py-2 rounded font-better_vcr',
      {
        'justify-start': props.textAlign === 'left',
        'justify-center': props.textAlign === 'center',
        'justify-end': props.textAlign === 'right',
      },
      {
        'opacity-50 cursor-not-allowed': props.disabled,
      },
    ]"
    :disabled="props.disabled"
  >
    <slot name="icon"></slot>
    {{ props.label }}
  </button>
</template>
