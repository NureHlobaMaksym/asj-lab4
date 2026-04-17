import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { ROUTE_NAMES } from '@/constants/routes.constants';

export const useApp = () => {
  const route = useRoute();
  const isEventsTab = computed<boolean>(() => route.name === ROUTE_NAMES.EVENTS);
  const isSecondaryTabState = computed<boolean>(() => route.name !== ROUTE_NAMES.EVENTS);

  return {
    isEventsTab,
    isSecondaryTabState
  };
};
