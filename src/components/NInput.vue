<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  label: string;
  type: string;
  property: string;
  placeholder: string;
  modelValue: string;
  required: boolean;
  customClass: string;
  customStyle: string;
  usePixelFont: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}>();

const emit = defineEmits(['update:modelValue', 'error']);

const modelValue = ref(props.modelValue);
const error = ref('');
const touched = ref(false);

const validate = (value: string) => {
  if (props.required && !value) {
    return 'This field is required';
  }

  if (props.minLength && value.length < props.minLength) {
    return `Minimum length is ${props.minLength} characters`;
  }

  if (props.maxLength && value.length > props.maxLength) {
    return `Maximum length is ${props.maxLength} characters`;
  }

  if (props.pattern && !new RegExp(props.pattern).test(value)) {
    return 'Invalid format';
  }

  if (props.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Invalid email format';
  }

  return '';
};

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);

  if (touched.value) {
    error.value = validate(value);
    emit('error', error.value);
  }
};

const handleBlur = () => {
  touched.value = true;
  error.value = validate(modelValue.value);
  emit('error', error.value);
  emit('update:modelValue', modelValue.value);
};

const inputClasses = computed(() => {
  return [
    props.customClass,
    'appearance-none rounded-lg relative block w-full px-3 py-2 border text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500',
    error.value ? 'border-red-500 bg-red-900/20' : 'border-gray-700 bg-gray-800',
  ];
});
</script>

<template>
  <div>
    <label :for="property" :class="[usePixelFont ? 'font-better_vcr' : '']">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
      :id="property"
      :type="type"
      :required="required"
      :style="customStyle"
      :class="inputClasses"
      :placeholder="placeholder"
      v-model="modelValue"
      @input="handleInput"
      @blur="handleBlur"
    />
    <p v-if="error && touched" class="mt-1 text-sm text-red-500">{{ error }}</p>
  </div>
</template>
