import { useRouter } from 'vue-router';
import { useEvents } from '@/composables/useEvents';
import { buildEventDetailsPath } from '@/utils/build-event-details-path.util';
import { buildEventRegistrationPath } from '@/utils/build-event-registration-path.util';

export const useEventListView = () => {
  const router = useRouter();
  const { events } = useEvents();

  const openDetails = (id: number): void => {
    router.push(buildEventDetailsPath(id));
  };

  const openRegistration = (id: number): void => {
    router.push(buildEventRegistrationPath(id));
  };

  return {
    events,
    openDetails,
    openRegistration
  };
};
