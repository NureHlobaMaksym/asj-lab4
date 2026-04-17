import { computed, ref } from 'vue';
import { EVENT_DATA } from '@/constants/events.constants';
import type { Event } from '@/interfaces/event.interface';

const eventsState = ref<Event[]>(EVENT_DATA);

export const useEvents = () => {
  const events = computed<Event[]>(() => eventsState.value);

  const getEventById = (id: number): Event | null => {
    return eventsState.value.find((event: Event): boolean => event.id === id) || null;
  };

  return {
    events,
    getEventById
  };
};
