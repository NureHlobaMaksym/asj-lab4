import { DEFAULT_REGISTRATION_FORM_ERRORS, REGISTRATION_MESSAGES, REGISTRATION_VALIDATION } from '@/constants/registration.constants';
import type { RegistrationFormErrors } from '@/interfaces/registration-form-errors.interface';
import type { RegistrationFormModel } from '@/interfaces/registration-form-model.interface';
import { getTrimmedValue } from '@/utils/get-trimmed-value.util';

export interface RegistrationValidationResult {
  isValid: boolean;
  errors: RegistrationFormErrors;
}

export const validateRegistrationForm = (model: RegistrationFormModel): RegistrationValidationResult => {
  const errors: RegistrationFormErrors = {
    ...DEFAULT_REGISTRATION_FORM_ERRORS
  };

  if (getTrimmedValue(model.name).length < REGISTRATION_VALIDATION.NAME_MIN_LENGTH) {
    errors.name = REGISTRATION_MESSAGES.NAME_INVALID;
  }

  if (!REGISTRATION_VALIDATION.EMAIL_REGEX.test(getTrimmedValue(model.email))) {
    errors.email = REGISTRATION_MESSAGES.EMAIL_INVALID;
  }

  const isValid = errors.name.length === 0 && errors.email.length === 0;

  return {
    isValid,
    errors
  };
};
