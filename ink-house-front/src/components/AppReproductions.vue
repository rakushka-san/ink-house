<template>
  <section>
    <div class="container">
      <header class="row middle-xs between-xs">
        <h2 class="col-xs-12 col-md-4">Репродукции</h2>
        <div class="col-xs-12 col-md-8 col-lg-5">
          <div class="filters">
            <button
              v-for="country in countries"
              :key="country"
              class="tab-btn"
              :class="{ active: activeCountry === country }"
              @click="selectCountry(country)"
            >
              {{ country }}
            </button>

            <!-- <button class="tab-btn active">Франция</button>
            <button class="tab-btn">Германия</button>
            <button class="tab-btn">Англия</button> -->
          </div>
        </div>
      </header>
      <div class="row reproductions">
        <div v-for="reproduction in reproductions" class="col-xs-12 col-sm-6 col-lg-4">
          <AppReproduction :reproduction="reproduction" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './../assets/scss/colors';
@import './../assets/scss/grid/mixins';

section {
  padding: 3.75rem 0;

  @include bp(sm) {
    padding: 3.13rem 0;
  }

  @include bp(md) {
    padding: 4.5rem 0;
  }

  @include bp(lg) {
    padding: 4.34rem 0;
  }
}

h2 {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 110%;

  @include bp(md) {
    font-size: 1.875rem;
  }

  @include bp(lg) {
    font-size: 2.5rem;
  }
}

.filters {
  display: flex;
  overflow-x: scroll;
  margin-top: 1.25rem;

  @include bp(sm) {
    overflow-x: hidden;
  }

  @include bp(md) {
    margin-top: 0;
    justify-content: flex-end;
  }

  button {
    margin-left: 1.25rem;

    &:first-of-type {
      margin-left: 0;
    }

    @include bp(sm) {
      margin-left: 2rem;
    }
  }
}

.reproductions {
  & > * {
    margin-top: 1.88rem;
  }
}
</style>

<script setup lang="ts">
import AppReproduction from '@/components/AppReproduction.vue'

import type { IReproduction } from '@/models/Reproduction'

interface Props {
  countries: string[] | null
  activeCountry: string
  reproductions: IReproduction[] | null
}
defineProps<Props>()

const emit = defineEmits<{
  (e: 'selectCountry', value: string): void
}>()

function selectCountry(country: string) {
  emit('selectCountry', country)
}
</script>
