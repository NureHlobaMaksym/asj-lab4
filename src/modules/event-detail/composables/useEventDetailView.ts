import { computed, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useEvents } from '@/composables/useEvents';
import { useRegistrations } from '@/composables/useRegistrations';
import { ROUTE_PATHS } from '@/constants/routes.constants';
import type { Event } from '@/interfaces/event.interface';
import type { Registration } from '@/interfaces/registration.interface';
import { buildEventRegistrationPath } from '@/utils/build-event-registration-path.util';

export const useEventDetailView = () => {
  const route = useRoute();
  const router = useRouter();
  const { getEventById } = useEvents();
  const { getRegistrationsByEvent } = useRegistrations();
  const eventId = Number(route.params.id);

  const event = computed<Event | null>(() => getEventById(eventId));
  const registrations = computed<Registration[]>(() => getRegistrationsByEvent(eventId).value);

  watchEffect((): void => {
    if (event.value === null) {
      router.replace(ROUTE_PATHS.MISSING);
    }
  });

  const goBack = (): void => {
    router.push(ROUTE_PATHS.ROOT);
  };

  const openRegistration = (): void => {
    router.push(buildEventRegistrationPath(eventId));
  };

  return {
    event,
    registrations,
    goBack,
    openRegistration
  };
};
