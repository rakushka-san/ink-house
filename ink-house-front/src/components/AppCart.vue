<template>
  <div class="cart">
    <div v-if="itemsInCart" class="counter">{{ itemsInCart }}</div>
    <img src="./../assets/img/shopping-cart.svg" alt="Cart" />
  </div>
</template>

<style lang="scss" scoped>
@import './../assets/scss/colors';

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

<script setup lang="ts">
interface Props {
  itemsInCart: number
}

defineProps<Props>()
</script>
