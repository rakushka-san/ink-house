import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { IReproduction } from '@/models/Reproduction'
import type { IFilter } from '@/models/Filters'

import { getReproductions } from '@/api/getReproductions'
import { getCountries } from '@/api/getCountries'
import { getYears } from '@/api/getYears'

export const useReproductionStore = defineStore('reproductionStore', () => {
  const filters = ref<IFilter>({ country: '', year: 0 })
  const reproductions = ref<IReproduction[] | null>(null)
  const countries = ref<string[] | null>(null)
  const years = ref<number[] | null>(null)

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

  loadCountries().then(() => {
    loadReproductions()
  })
  loadYears()

  return {
    filters,
    reproductions,
    countries,
    years,
    loadCountries,
    loadYears,
    loadReproductions,
    selectCountry,
    selectYear
  }
})
