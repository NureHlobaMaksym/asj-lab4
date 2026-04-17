export const ROUTE_NAMES = {
  EVENTS: 'events',
  EVENT_DETAILS: 'event-details',
  EVENT_REGISTER: 'event-register',
  NOT_FOUND: 'not-found'
} as const;

export const ROUTE_PATHS = {
  ROOT: '/',
  EVENTS_DETAILS_TEMPLATE: '/events/:id',
  EVENTS_REGISTER_TEMPLATE: '/events/:id/register',
  CATCH_ALL: '/:pathMatch(.*)*',
  MISSING: '/missing'
} as const;

export const KEEP_ALIVE_VIEW_NAMES = ['EventListView', 'EventDetailView'] as const;
