<script setup lang="ts">
import { useBaseInput } from '@/composables/useBaseInput';
import type { BaseInputProperties } from '@/interfaces/base-input-properties.interface';
import type { BaseInputEmits } from '@/interfaces/base-input-emits.interface';
import './BaseInput.css';

const properties = defineProps<BaseInputProperties>();
const emit = defineEmits<BaseInputEmits>();
const { handleInput } = useBaseInput(emit);
</script>

<template>
  <div class="base-input">
    <input
      class="base-input__field"
      :class="{ 'base-input__field--error': properties.error.length > 0 }"
      :value="properties.modelValue"
      :placeholder="properties.placeholder"
      :type="properties.type"
      @input="handleInput(($event.target as HTMLInputElement).value)"
    />
    <p class="base-input__error">{{ properties.error }}</p>
  </div>
</template>
