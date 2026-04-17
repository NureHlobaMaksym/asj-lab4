<script setup lang="ts">
import { computed } from 'vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import { useEventCard } from '@/modules/event-list/composables/useEventCard';
import type { EventCardProperties } from '@/modules/event-list/interfaces/event-card-properties.interface';
import type { EventCardEmits } from '@/modules/event-list/interfaces/event-card-emits.interface';
import './EventCard.css';

const properties = defineProps<EventCardProperties>();
const emit = defineEmits<EventCardEmits>();
const { openDetails, openRegistration } = useEventCard(emit, properties.event.id);
const bannerFrameClass = computed<string>(() => properties.event.bannerClass.replace('event-card__banner--', 'event-card__frame--'));
</script>

<template>
  <article class="event-card">
    <div :class="['event-card__banner', bannerFrameClass]">
      <div :class="['event-card__banner-inner', properties.event.bannerClass]">
        <h3>{{ properties.event.title }}</h3>
        <p>{{ properties.event.teaser }}</p>
      </div>
    </div>

    <div class="event-card__body">
      <span class="event-card__tag">{{ properties.event.category }}</span>
      <h4>{{ properties.event.title }}</h4>
      <strong>{{ properties.event.date }}</strong>
      <p>{{ properties.event.description }}</p>
      <div class="event-card__actions">
        <BaseButton label="Деталі" type="button" variant="secondary" :disabled="false" @click="openDetails" />
        <BaseButton label="Реєстрація" type="button" variant="primary" :disabled="false" @click="openRegistration" />
      </div>
    </div>
  </article>
</template>
