<script setup lang="ts">
import RegistrationForm from '@/modules/event-registration/components/RegistrationForm/RegistrationForm.vue';
import ToastPortal from '@/components/ToastPortal/ToastPortal.vue';
import { useEventRegistrationView } from '@/modules/event-registration/composables/useEventRegistrationView';
import './EventRegistrationView.css';

const {
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
} = useEventRegistrationView();
</script>

<template>
  <section class="page-shell registration-view">
    <button type="button" class="back-button" @click="goBack">← Назад</button>

    <div v-if="event" class="registration-view__content">
      <div class="registration-view__info">
        <h1>{{ event.title }}</h1>
        <div class="registration-view__meta">
          <strong>{{ event.date }}</strong>
          <p>{{ event.teaser }}</p>
        </div>
      </div>

      <div class="registration-view__form-container">
        <RegistrationForm
            :model="model"
            :errors="errors"
            :submitting="submitting"
            @update:name="updateName"
            @update:email="updateEmail"
            @submit="submit"
        />
      </div>
    </div>

    <ToastPortal :visible="toastVisible" :message="toastMessage" :tone="toastTone" />
  </section>
</template>