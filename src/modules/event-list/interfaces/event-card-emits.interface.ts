import { Events } from '@/enums/events.enum';

export interface EventCardEmits {
  (event: Events.OPEN, id: number): void;
  (event: Events.REGISTER, id: number): void;
}
