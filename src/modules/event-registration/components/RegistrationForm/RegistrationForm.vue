<script setup lang="ts">
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import BaseInput from '@/components/BaseInput/BaseInput.vue';
import { useRegistrationForm } from '@/modules/event-registration/composables/useRegistrationForm';
import type { RegistrationFormProperties } from '@/modules/event-registration/interfaces/registration-form-properties.interface';
import type { RegistrationFormEmits } from '@/modules/event-registration/interfaces/registration-form-emits.interface';
import './RegistrationForm.css';

const properties = defineProps<RegistrationFormProperties>();
const emit = defineEmits<RegistrationFormEmits>();
const { onNameUpdate, onEmailUpdate, onSubmit } = useRegistrationForm(emit);
</script>

<template>
  <form class="registration-form" @submit.prevent="onSubmit">
    <div class="registration-form__header">
      <h3>Реєстрація</h3>
      <p>Заповніть форму і ми надішлемо підтвердження на вашу пошту</p>
    </div>

    <div class="registration-form__fields">
      <BaseInput
          :model-value="properties.model.name"
          placeholder="Ім'я"
          type="text"
          :error="properties.errors.name"
          @update:model-value="onNameUpdate"
      />

      <BaseInput
          :model-value="properties.model.email"
          placeholder="Email"
          type="email"
          :error="properties.errors.email"
          @update:model-value="onEmailUpdate"
      />
    </div>

    <BaseButton
        label="Зареєструватися"
        type="submit"
        variant="primary"
        :disabled="properties.submitting"
    />
  </form>
</template>