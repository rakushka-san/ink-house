<template>
  <AppHeader
    :items-in-cart="itemsInCart.length"
    @scroll-to-reproductions="scrollToReproductions"
    @scroll-to-news="scrollToNews"
    @scroll-to-team="scrollToTeam"
  />
  <main>
    <AppHero @scroll-to-reproductions="scrollToReproductions" />
    <AppReproductions
      ref="appReproductions"
      :countries="countries"
      :active-country="filters.country"
      :reproductions="reproductions"
      @select-country="selectCountry"
      @add-to-cart="addToCart"
    />

    <AppNews ref="appNews" />
    <AppTeam ref="appTeam" />
  </main>
  <AppFooter
    :countries="countries"
    :years="years"
    @select-country="selectCountry"
    @select-year="selectYear"
    @scroll-to-reproductions="scrollToReproductions"
    @scroll-to-team="scrollToTeam"
  />
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
import { getYears } from '@/api/getYears'

const filters = ref<IFilter>({ country: '', year: 0 })
const reproductions = ref<IReproduction[] | null>(null)
const countries = ref<string[] | null>(null)
const years = ref<number[] | null>(null)
const itemsInCart = ref<string[]>([])

const appReproductions = ref<InstanceType<typeof AppReproductions> | null>(null)
const appNews = ref<InstanceType<typeof AppNews> | null>(null)
const appTeam = ref<InstanceType<typeof AppTeam> | null>(null)

onMounted(() => {
  loadCountries().then(() => {
    loadReproductions()
  })
  loadYears()
})

const loadCountries = async () => {
  try {
    countries.value = await getCountries()
    filters.value.country = countries.value[0]
  } catch (err) {
    console.log(err)
  }
}

const loadYears = async () => {
  try {
    years.value = await getYears()
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
  filters.value.year = 0
  filters.value.country = country
  loadReproductions()
}

function selectYear(year: number) {
  filters.value.country = ''
  filters.value.year = year
  loadReproductions()
}

function addToCart(id: string) {
  itemsInCart.value.push(id)
}

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
