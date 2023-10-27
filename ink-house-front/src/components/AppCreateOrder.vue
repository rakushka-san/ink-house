<template>
  <AppModal @close="orderStore.closeCreateOrder">
    <div class="container">
      <div class="row middle-xs"></div>
      <div class="row center-xs">
        <button class="primary-btn">Оформить заказ</button>
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/AppModal.vue'
import { useOrderStore } from '@/stores/OrderStore'

const orderStore = useOrderStore()
</script>

<style lang="scss" scoped>
button {
  margin-top: 3rem;
  max-width: 15.625rem;
  width: 100%;
  padding: 0.91rem 0;

  @include bp(sm) {
    max-width: 12.5rem;
  }

  @include bp(md) {
    max-width: 18.125rem;
    padding: 1.31rem 0;
  }

  @include bp(lg) {
    max-width: 19.375rem;
  }
}
</style>
