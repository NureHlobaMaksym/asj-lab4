export const createRegistrationId = (eventId: number): string => `${eventId}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
