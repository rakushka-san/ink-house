<template>
  <AppHeader
    @scroll-to-reproductions="scrollToReproductions"
    @scroll-to-news="scrollToNews"
    @scroll-to-team="scrollToTeam"
  />
  <main>
    <AppHero @scroll-to-reproductions="scrollToReproductions" />
    <AppReproductions ref="appReproductions" />

    <AppNews ref="appNews" />
    <AppTeam ref="appTeam" />

    <AppAddToCart v-if="orderStore.isAddToCartOpen" />
  </main>
  <AppFooter @scroll-to-reproductions="scrollToReproductions" @scroll-to-team="scrollToTeam" />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHero from '@/components/AppHero.vue'
import AppReproductions from '@/components/AppReproductions.vue'
import AppNews from '@/components/AppNews.vue'
import AppTeam from '@/components/AppTeam.vue'
import AppAddToCart from '@/components/AppAddToCart.vue'

import { ref } from 'vue'

import { useOrderStore } from '@/stores/OrderStore'

const orderStore = useOrderStore()

const appReproductions = ref<InstanceType<typeof AppReproductions> | null>(null)
const appNews = ref<InstanceType<typeof AppNews> | null>(null)
const appTeam = ref<InstanceType<typeof AppTeam> | null>(null)

function scrollToReproductions() {
  appReproductions.value?.$el.scrollIntoView({ behavior: 'smooth' })
}

function scrollToNews() {
  appNews.value?.$el.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTeam() {
  appTeam.value?.$el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss"></style>
