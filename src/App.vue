<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useApp } from '@/composables/useApp';
import { KEEP_ALIVE_VIEW_NAMES, ROUTE_PATHS } from '@/constants/routes.constants';
import './App.css';

const { isEventsTab, isSecondaryTabState } = useApp();
const keepAliveInclude = KEEP_ALIVE_VIEW_NAMES.join(',');
</script>

<template>
  <div class="app-wrapper">
    <div class="app-panel">
      <header class="app-header">
        <h2>Події</h2>
        <nav class="app-nav">
          <RouterLink :to="ROUTE_PATHS.ROOT" class="app-nav__link" :class="{ 'app-nav__link--active': isEventsTab, 'app-nav__link--muted': isSecondaryTabState }">список подій</RouterLink>
        </nav>
      </header>

      <RouterView v-slot="{ Component }">
        <KeepAlive :include="keepAliveInclude">
          <Transition name="route-fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </KeepAlive>
      </RouterView>
    </div>
  </div>
</template>
