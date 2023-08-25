<template>
  <AppHeader :items-in-cart="itemsInCart" />
  <main>
    <AppHero />
    <AppReproductions />
    <AppNews />
    <AppTeam />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import AppReproductions from './components/AppReproductions.vue'
import AppNews from './components/AppNews.vue'
import AppTeam from './components/AppTeam.vue'
import AppFooter from './components/AppFooter.vue'
import { ref } from 'vue'

const itemsInCart = ref(0)
</script>

<style lang="scss"></style>
