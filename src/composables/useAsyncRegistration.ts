import type { AsyncRegistrationPayload } from '@/interfaces/async-registration-payload.interface';
import { REGISTRATION_ASYNC, REGISTRATION_MESSAGES } from '@/constants/registration.constants';
import { shouldFailRegistration } from '@/utils/should-fail-registration.util';

export const useAsyncRegistration = () => {
  const submitRegistrationRequest = async (payload: AsyncRegistrationPayload): Promise<void> => {
    await new Promise<void>((resolve): void => {
      setTimeout((): void => {
        resolve();
      }, REGISTRATION_ASYNC.REQUEST_DELAY_MS);
    });

    if (shouldFailRegistration(payload)) {
      throw new Error(REGISTRATION_MESSAGES.SERVER_ERROR);
    }
  };

  return {
    submitRegistrationRequest
  };
};
