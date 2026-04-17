import { computed, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAsyncRegistration } from '@/composables/useAsyncRegistration';
import { useEvents } from '@/composables/useEvents';
import { useRegistrations } from '@/composables/useRegistrations';
import {
  DEFAULT_REGISTRATION_FORM_ERRORS,
  DEFAULT_REGISTRATION_FORM_MODEL,
  REGISTRATION_ASYNC,
  REGISTRATION_MESSAGES
} from '@/constants/registration.constants';
import { ROUTE_PATHS } from '@/constants/routes.constants';
import type { Event } from '@/interfaces/event.interface';
import type { RegistrationFormModel } from '@/interfaces/registration-form-model.interface';
import type { RegistrationFormErrors } from '@/interfaces/registration-form-errors.interface';
import { buildEventDetailsPath } from '@/utils/build-event-details-path.util';
import { getTrimmedValue } from '@/utils/get-trimmed-value.util';
import { validateRegistrationForm } from '@/utils/validate-registration-form.util';

export const useEventRegistrationView = () => {
  const route = useRoute();
  const router = useRouter();
  const { getEventById } = useEvents();
  const { addOptimisticRegistration, confirmRegistration, rollbackRegistration } = useRegistrations();
  const { submitRegistrationRequest } = useAsyncRegistration();
  const eventId = Number(route.params.id);

  const event = computed<Event | null>(() => getEventById(eventId));
  const model = ref<RegistrationFormModel>({ ...DEFAULT_REGISTRATION_FORM_MODEL });
  const errors = ref<RegistrationFormErrors>({ ...DEFAULT_REGISTRATION_FORM_ERRORS });
  const submitting = ref<boolean>(false);
  const toastVisible = ref<boolean>(false);
  const toastMessage = ref<string>('');
  const toastTone = ref<'success' | 'error'>('success');

  watchEffect((): void => {
    if (event.value === null) {
      router.replace(ROUTE_PATHS.MISSING);
    }
  });

  const goBack = (): void => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(buildEventDetailsPath(eventId));
  };

  const updateName = (value: string): void => {
    model.value.name = value;
    if (errors.value.name.length > 0) {
      errors.value.name = '';
    }
  };

  const updateEmail = (value: string): void => {
    model.value.email = value;
    if (errors.value.email.length > 0) {
      errors.value.email = '';
    }
  };

  const validate = (): boolean => {
    const validationResult = validateRegistrationForm(model.value);
    errors.value = validationResult.errors;
    return validationResult.isValid;
  };

  const showToast = (message: string, tone: 'success' | 'error'): void => {
    toastMessage.value = message;
    toastTone.value = tone;
    toastVisible.value = true;

    setTimeout((): void => {
      toastVisible.value = false;
    }, REGISTRATION_ASYNC.TOAST_HIDE_DELAY_MS);
  };

  const submit = async (): Promise<void> => {
    if (submitting.value || !validate()) {
      return;
    }

    submitting.value = true;
    const trimmedName = getTrimmedValue(model.value.name);
    const trimmedEmail = getTrimmedValue(model.value.email);
    const registrationId = addOptimisticRegistration(eventId, trimmedName, trimmedEmail);

    try {
      await submitRegistrationRequest({
        eventId,
        name: trimmedName,
        email: trimmedEmail
      });

      confirmRegistration(eventId, registrationId);
      showToast(REGISTRATION_MESSAGES.SUCCESS, 'success');
      router.push(buildEventDetailsPath(eventId));
    } catch {
      rollbackRegistration(eventId, registrationId);
      showToast(REGISTRATION_MESSAGES.ROLLBACK_ERROR, 'error');
    } finally {
      submitting.value = false;
    }
  };

  return {
    event,
    model,
    errors,
    submitting,
    toastVisible,
    toastMessage,
    toastTone,
    goBack,
    updateName,
    updateEmail,
    submit
  };
};
