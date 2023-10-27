<template>
  <div class="cart">
    <div v-if="orderStore.orderElements.length" class="counter">
      {{ orderStore.orderElements.length }}
    </div>
    <img src="./../assets/img/shopping-cart.svg" alt="Cart" />
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '@/stores/OrderStore'

const orderStore = useOrderStore()
</script>

<style lang="scss" scoped>
.cart {
  position: relative;
}
.counter {
  position: absolute;
  top: 0.12rem;
  left: 0.12rem;

  width: 0.8125rem;
  height: 0.8125rem;

  background-color: $colorAccent;
  border-radius: 50%;

  font-size: 0.625rem;
  font-weight: 700;
  color: $colorAbsoluteWhite;

  text-align: center;
}
</style>
