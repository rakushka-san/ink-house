<template>
  <section>
    <div class="container">
      <header class="row middle-xs between-xs">
        <h2 class="col-xs-12 col-md-4">Репродукции</h2>
        <div class="col-xs-12 col-md-8 col-lg-5">
          <div class="filters">
            <button
              v-for="country in reproductionStore.countries"
              :key="country"
              class="tab-btn"
              :class="{ active: reproductionStore.filters.country === country }"
              @click="reproductionStore.selectCountry(country)"
            >
              {{ country }}
            </button>
          </div>
        </div>
      </header>
      <div class="row reproductions">
        <div
          v-for="reproduction in reproductionStore.reproductions"
          :key="reproduction._id"
          class="col-xs-12 col-sm-6 col-lg-4"
        >
          <AppReproduction :reproduction="reproduction" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppReproduction from '@/components/AppReproduction.vue'
import { useReproductionStore } from '@/stores/ReproductionStore'

const reproductionStore = useReproductionStore()
</script>

<style lang="scss" scoped>
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
