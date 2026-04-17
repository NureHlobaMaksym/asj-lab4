<script setup lang="ts">
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import RegistrationList from '@/modules/event-detail/components/RegistrationList/RegistrationList.vue';
import { useEventDetailView } from '@/modules/event-detail/composables/useEventDetailView';
import './EventDetailView.css';

defineOptions({
  name: 'EventDetailView'
});

const { event, registrations, goBack, openRegistration } = useEventDetailView();
</script>

<template>
  <section class="page-shell detail-view">
    <button type="button" class="detail-view__back" @click="goBack">← Назад</button>

    <article v-if="event" class="detail-view__card">
      <div class="detail-view__banner-frame">
        <div class="detail-view__banner" :class="event.bannerClass">
          <h3>{{ event.title }}</h3>
          <p>{{ event.teaser }}</p>
        </div>
      </div>

      <div class="detail-view__info">
        <h1>{{ event.title }}</h1>
        <strong>{{ event.date }}</strong>
        <p>{{ event.teaser }}</p>
        <BaseButton
            label="Зареєструватися ➜"
            type="button"
            variant="primary"
            :disabled="false"
            @click="openRegistration"
        />
      </div>
    </article>

    <RegistrationList v-if="event" :registrations="registrations" />
  </section>
</template>