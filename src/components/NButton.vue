<script setup lang="ts">
    interface NButtonProps {
        label: string;
        type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline';
        customClass?: string;
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
                'bg-transparent': props.type === 'outline'
            },
            'flex items-center gap-4 text-white px-4 py-2 rounded font-better_vcr'
        ]"
    >
    <slot name="icon"></slot>
        {{ props.label }}
    </button>
</template>