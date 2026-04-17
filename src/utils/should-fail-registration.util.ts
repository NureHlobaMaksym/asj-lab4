import type { AsyncRegistrationPayload } from '@/interfaces/async-registration-payload.interface';
import { REGISTRATION_ASYNC } from '@/constants/registration.constants';

export const shouldFailRegistration = (payload: AsyncRegistrationPayload): boolean => {
  const trigger = REGISTRATION_ASYNC.FAILURE_TRIGGER_SUBSTRING;
  return payload.email.toLowerCase().includes(trigger) || payload.name.toLowerCase().includes(trigger);
};
