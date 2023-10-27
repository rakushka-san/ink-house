<template>
  <section>
    <div class="container">
      <div class="row middle-xs center-xs">
        <RouterLink to="/"><AppLogo /></RouterLink>
      </div>
      <header class="row middle-xs between-xs">
        <h2 class="col-xs-12 col-md-4">Корзина</h2>
      </header>
      <div class="row order-elements">
        <div v-for="orderElement in orderStore.orderElements" class="col-xs-12 col-sm-6 col-lg-4">
          <AppOrderElement :orderElement="orderElement" />
        </div>
      </div>
      <div class="row middle-xs totals">
        <h2>Итого:</h2>
        <h3 class="totals-value">{{ totalCount }} шт. {{ totalPrice }} руб</h3>
      </div>
      <div class="row center-xs">
        <button
          class="primary-btn"
          :disabled="orderStore.orderElements.length === 0"
          @click="orderStore.openCreateOrder"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import AppOrderElement from '@/components/AppOrderElement.vue'
import { useOrderStore } from '@/stores/OrderStore'
import { computed } from 'vue'

const orderStore = useOrderStore()

const totalCount = computed(calcTotalCount)
const totalPrice = computed(calcTotalPrice)

function calcTotalCount() {
  let count: number = 0
  orderStore.orderElements.forEach((element) => {
    count += element.count
  })
  return count
}

function calcTotalPrice() {
  let price: number = 0
  orderStore.orderElements.forEach((element) => {
    price += element.reproduction.price * element.count
  })
  return price
}
</script>

<style lang="scss" scoped>
section {
  min-height: 71vh;

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

.totals {
  margin-top: 1.88rem;
}

.totals-value {
  font-size: 1.5rem;
  font-weight: 500;

  @include bp(md) {
    font-size: 1.875rem;
  }
}

.order-elements {
  & > * {
    margin-top: 1.88rem;
  }
}

button {
  margin-top: 3rem;
  width: 15.625rem;
  padding: 0.91rem 0;

  @include bp(sm) {
    width: 12.5rem;
  }

  @include bp(md) {
    width: 18.125rem;
    padding: 1.31rem 0;
  }

  @include bp(lg) {
    width: 19.375rem;
  }
}
</style>
