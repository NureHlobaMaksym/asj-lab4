import { Events } from '@/enums/events.enum';

export interface RegistrationFormEmits {
  (event: Events.UPDATE_NAME, value: string): void;
  (event: Events.UPDATE_EMAIL, value: string): void;
  (event: Events.SUBMIT): void;
}
