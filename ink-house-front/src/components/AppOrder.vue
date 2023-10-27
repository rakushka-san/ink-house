<template>
  <AppOrderList />
  <AppCreateOrder v-if="orderStore.isCreateOrderOpen" />
</template>

<script setup lang="ts">
import AppCreateOrder from '@/components/AppCreateOrder.vue'
import AppOrderList from '@/components/AppOrderList.vue'
import { useOrderStore } from '@/stores/OrderStore'

const orderStore = useOrderStore()
</script>

<style lang="scss"></style>
