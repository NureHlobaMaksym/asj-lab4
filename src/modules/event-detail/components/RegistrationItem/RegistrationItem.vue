<script setup lang="ts">
import type { RegistrationItemProperties } from '@/modules/event-detail/interfaces/registration-item-properties.interface';
import './RegistrationItem.css';

const properties = defineProps<RegistrationItemProperties>();
</script>

<template>
  <li class="registration-item">
    <div class="registration-item__user">
      <strong>{{ properties.registration.name }}</strong>
      <p>{{ properties.registration.email }}</p>
    </div>
    <span :class="['registration-item__status', { 'registration-item__status--pending': properties.registration.pending }]">
      {{ properties.registration.pending ? 'pending' : 'confirmed' }}
    </span>
  </li>
</template>