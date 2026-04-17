import { Events } from '@/enums/events.enum';
import type { EventListEmits } from '@/modules/event-list/interfaces/event-list-emits.interface';

export const useEventList = (emit: EventListEmits) => {
  const handleOpen = (id: number): void => {
    emit(Events.OPEN, id);
  };

  const handleRegister = (id: number): void => {
    emit(Events.REGISTER, id);
  };

  return {
    handleOpen,
    handleRegister
  };
};
