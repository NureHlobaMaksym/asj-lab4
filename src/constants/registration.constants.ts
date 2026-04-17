import type { RegistrationFormErrors } from '@/interfaces/registration-form-errors.interface';
import type { RegistrationFormModel } from '@/interfaces/registration-form-model.interface';

export const REGISTRATION_VALIDATION = {
  NAME_MIN_LENGTH: 2,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
} as const;

export const REGISTRATION_MESSAGES = {
  NAME_INVALID: 'Вкажіть імʼя (мінімум 2 символи).',
  EMAIL_INVALID: 'Вкажіть коректний email.',
  SUCCESS: 'Реєстрація успішна',
  ROLLBACK_ERROR: 'Реєстрацію скасовано через помилку сервера',
  SERVER_ERROR: 'Помилка сервера. Спробуйте пізніше.'
} as const;

export const REGISTRATION_ASYNC = {
  REQUEST_DELAY_MS: 900,
  TOAST_HIDE_DELAY_MS: 2200,
  FAILURE_TRIGGER_SUBSTRING: 'fail'
} as const;

export const DEFAULT_REGISTRATION_FORM_MODEL: RegistrationFormModel = {
  name: '',
  email: ''
};

export const DEFAULT_REGISTRATION_FORM_ERRORS: RegistrationFormErrors = {
  name: '',
  email: ''
};
