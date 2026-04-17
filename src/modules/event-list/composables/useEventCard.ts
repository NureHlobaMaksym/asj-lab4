import { Events } from '@/enums/events.enum';
import type { EventCardEmits } from '@/modules/event-list/interfaces/event-card-emits.interface';

export const useEventCard = (emit: EventCardEmits, eventId: number) => {
  const openDetails = (): void => {
    emit(Events.OPEN, eventId);
  };

  const openRegistration = (): void => {
    emit(Events.REGISTER, eventId);
  };

  return {
    openDetails,
    openRegistration
  };
};
