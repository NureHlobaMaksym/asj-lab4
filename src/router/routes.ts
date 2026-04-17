import type { RouteRecordRaw } from 'vue-router';
import EventListView from '@/modules/event-list/views/EventListView.vue';
import EventDetailView from '@/modules/event-detail/views/EventDetailView.vue';
import EventRegistrationView from '@/modules/event-registration/views/EventRegistrationView.vue';
import NotFoundView from '@/modules/not-found/views/NotFoundView.vue';
import { ROUTE_NAMES, ROUTE_PATHS } from '@/constants/routes.constants';

export const APP_ROUTES: RouteRecordRaw[] = [
  { path: ROUTE_PATHS.ROOT, name: ROUTE_NAMES.EVENTS, component: EventListView },
  { path: ROUTE_PATHS.EVENTS_DETAILS_TEMPLATE, name: ROUTE_NAMES.EVENT_DETAILS, component: EventDetailView },
  { path: ROUTE_PATHS.EVENTS_REGISTER_TEMPLATE, name: ROUTE_NAMES.EVENT_REGISTER, component: EventRegistrationView },
  { path: ROUTE_PATHS.CATCH_ALL, name: ROUTE_NAMES.NOT_FOUND, component: NotFoundView }
];
