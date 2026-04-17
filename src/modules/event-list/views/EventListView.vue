<script setup lang="ts">
import EventList from '@/modules/event-list/components/EventList/EventList.vue';
import { useEventListView } from '@/modules/event-list/composables/useEventListView';
import './EventListView.css';

defineOptions({
  name: 'EventListView'
});

const { events, openDetails, openRegistration } = useEventListView();
</script>

<template>
  <section class="page-shell event-list-view">
    <EventList :events="events" @open="openDetails" @register="openRegistration" />
  </section>
</template>
