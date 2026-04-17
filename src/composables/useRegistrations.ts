import { computed, type ComputedRef } from 'vue';
import { REGISTRATIONS_STORAGE_KEY } from '@/constants/storage.constants';
import { useLocalStorage } from '@/composables/useLocalStorage';
import type { Registration } from '@/interfaces/registration.interface';
import { createRegistrationId } from '@/utils/create-registration-id.util';
import { getEventKey } from '@/utils/get-event-key.util';

const registrationsState = useLocalStorage<Record<string, Registration[]>>(REGISTRATIONS_STORAGE_KEY, {});

export const useRegistrations = () => {
  const addOptimisticRegistration = (eventId: number, name: string, email: string): string => {
    const registrationId = createRegistrationId(eventId);
    const eventKey = getEventKey(eventId);
    const current = registrationsState.value[eventKey] || [];

    registrationsState.value[eventKey] = [
      ...current,
      {
        id: registrationId,
        eventId,
        name,
        email,
        createdAt: new Date().toISOString(),
        pending: true
      }
    ];

    return registrationId;
  };

  const confirmRegistration = (eventId: number, registrationId: string): void => {
    const eventKey = getEventKey(eventId);
    const current = registrationsState.value[eventKey] || [];

    registrationsState.value[eventKey] = current.map((item: Registration): Registration => {
      if (item.id === registrationId) {
        return {
          ...item,
          pending: false
        };
      }

      return item;
    });
  };

  const rollbackRegistration = (eventId: number, registrationId: string): void => {
    const eventKey = getEventKey(eventId);
    const current = registrationsState.value[eventKey] || [];

    registrationsState.value[eventKey] = current.filter((item: Registration): boolean => item.id !== registrationId);
  };

  const getRegistrationsByEvent = (eventId: number): ComputedRef<Registration[]> =>
    computed<Registration[]>(() => {
      const eventKey = getEventKey(eventId);
      return registrationsState.value[eventKey] || [];
    });

  return {
    addOptimisticRegistration,
    confirmRegistration,
    rollbackRegistration,
    getRegistrationsByEvent
  };
};
