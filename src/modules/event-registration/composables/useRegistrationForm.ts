import { Events } from '@/enums/events.enum';
import type { RegistrationFormEmits } from '@/modules/event-registration/interfaces/registration-form-emits.interface';

export const useRegistrationForm = (emit: RegistrationFormEmits) => {
  const onNameUpdate = (value: string): void => {
    emit(Events.UPDATE_NAME, value);
  };

  const onEmailUpdate = (value: string): void => {
    emit(Events.UPDATE_EMAIL, value);
  };

  const onSubmit = (): void => {
    emit(Events.SUBMIT);
  };

  return {
    onNameUpdate,
    onEmailUpdate,
    onSubmit
  };
};
