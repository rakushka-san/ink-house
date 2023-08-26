<template>
  <AppHeader :items-in-cart="itemsInCart.length" />
  <main>
    <AppHero />
    <AppReproductions
      :countries="countries"
      :active-country="filters.country"
      :reproductions="reproductions"
      @select-country="selectCountry"
      @add-to-cart="addToCart"
    />

    <AppNews />
    <AppTeam />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppHero from '@/components/AppHero.vue'
import AppReproductions from '@/components/AppReproductions.vue'
import AppNews from '@/components/AppNews.vue'
import AppTeam from '@/components/AppTeam.vue'
import AppFooter from '@/components/AppFooter.vue'

import { onMounted, ref } from 'vue'

import type { IReproduction } from '@/models/Reproduction'
import type { IFilter } from '@/models/Filters'

import { getReproductions } from '@/api/getReproductions'
import { getCountries } from '@/api/getCountries'

const filters = ref<IFilter>({ country: '', year: 0 })
const reproductions = ref<IReproduction[] | null>(null)
const countries = ref<string[] | null>(null)
const itemsInCart = ref<string[]>([])

onMounted(() => {
  loadCountries().then(() => {
    loadReproductions()
  })
})

const loadCountries = async () => {
  try {
    countries.value = await getCountries()
    filters.value.country = countries.value[0]
  } catch (err) {
    console.log(err)
  }
}

const loadReproductions = async () => {
  try {
    reproductions.value = await getReproductions(filters.value)
  } catch (err) {
    console.log(err)
  }
}

function selectCountry(country: string) {
  filters.value.country = country
  loadReproductions()
}

function addToCart(id: string) {
  itemsInCart.value.push(id)
}
</script>

<style lang="scss"></style>
