<script setup lang="ts">
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import { useNotFoundView } from '@/modules/not-found/composables/useNotFoundView';
import './NotFoundView.css';

const { goHome } = useNotFoundView();
</script>

<template>
  <section class="page-shell not-found-view">
    <h1>404</h1>
    <p>Сторінку не знайдено</p>
    <BaseButton label="На головну" type="button" variant="primary" :disabled="false" @click="goHome" />
  </section>
</template>
