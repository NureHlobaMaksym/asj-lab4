<script setup lang="ts">
import RegistrationItem from '@/modules/event-detail/components/RegistrationItem/RegistrationItem.vue';
import type { RegistrationListProperties } from '@/modules/event-detail/interfaces/registration-list-properties.interface';
import './RegistrationList.css';

const properties = defineProps<RegistrationListProperties>();
</script>

<template>
  <div class="registration-list">
    <h5>Зареєстровані учасники</h5>
    <ul v-if="properties.registrations.length > 0">
      <RegistrationItem
          v-for="item in properties.registrations"
          :key="item.id"
          :registration="item"
      />
    </ul>
    <p v-else class="registration-list__empty">Поки що ніхто не зареєструвався. Будь першим!</p>
  </div>
</template>