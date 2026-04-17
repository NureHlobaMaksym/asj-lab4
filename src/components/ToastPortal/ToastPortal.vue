<script setup lang="ts">
import type { ToastPortalProperties } from '@/interfaces/toast-portal-properties.interface';
import './ToastPortal.css';

const properties = defineProps<ToastPortalProperties>();
</script>

<template>
  <Teleport to="body">
    <Transition name="toast-fade">
      <div v-if="properties.visible" :class="['toast-portal', `toast-portal--${properties.tone}`]">
        {{ properties.message }}
      </div>
    </Transition>
  </Teleport>
</template>
