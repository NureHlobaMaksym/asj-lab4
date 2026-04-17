<script setup lang="ts">
import EventCard from '@/modules/event-list/components/EventCard/EventCard.vue';
import { useEventList } from '@/modules/event-list/composables/useEventList';
import type { EventListProperties } from '@/modules/event-list/interfaces/event-list-properties.interface';
import type { EventListEmits } from '@/modules/event-list/interfaces/event-list-emits.interface';
import './EventList.css';

const properties = defineProps<EventListProperties>();
const emit = defineEmits<EventListEmits>();
const { handleOpen, handleRegister } = useEventList(emit);
</script>

<template>
  <section class="event-list">
    <EventCard v-for="event in properties.events" :key="event.id" :event="event" @open="handleOpen" @register="handleRegister" />
  </section>
</template>
