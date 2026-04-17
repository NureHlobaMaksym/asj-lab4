import type { RegistrationFormModel } from '@/interfaces/registration-form-model.interface';
import type { RegistrationFormErrors } from '@/interfaces/registration-form-errors.interface';

export interface RegistrationFormProperties {
  model: RegistrationFormModel;
  errors: RegistrationFormErrors;
  submitting: boolean;
}
