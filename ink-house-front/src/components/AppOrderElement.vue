<template>
  <div class="card">
    <img :src="API_URL + orderElement.reproduction.imgSrc" alt="Reproduction image" />
    <p class="author">{{ orderElement.reproduction.author }}</p>
    <h3 class="name">{{ orderElement.reproduction.name }}</h3>
    <p class="properties">{{ orderElement.method }} ({{ orderElement.size }})</p>
    <p class="price">{{ orderElement.reproduction.price }} руб</p>
    <div class="count-controls">
      <span @click="decreaseCount">-</span>
      <p>{{ orderElement.count }}</p>
      <span @click="increaseCount">+</span>
    </div>
    <button class="primary-btn" @click="orderStore.deleteFromCart(orderElement.reproduction._id)">
      Удалить
    </button>
  </div>
</template>

<script setup lang="ts">
import type { IOrderElement } from '@/models/OrderElement'
import { useOrderStore } from '@/stores/OrderStore'

const orderStore = useOrderStore()

interface Props {
  orderElement: IOrderElement
}

const props = defineProps<Props>()

const API_URL = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/`

function increaseCount() {
  props.orderElement.count++
}

function decreaseCount() {
  if (props.orderElement.count > 1) {
    props.orderElement.count--
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  background-color: $colorPrimary;
  padding: 1.25rem 1.25rem 1.88rem;

  img {
    width: 100%;
    display: block;
    aspect-ratio: 1 / 1;
    object-fit: cover;

    @include bp(sm) {
      aspect-ratio: 4 / 5;
    }

    @include bp(md) {
      aspect-ratio: 145 / 211;
    }

    @include bp(lg) {
      aspect-ratio: 155 / 211;
    }
  }

  .author {
    margin-top: 0.94rem;
    font-size: 1rem;
    color: $colorSilent;

    @include bp(md) {
      margin-top: 1.25rem;
      font-size: 1.125rem;
    }
  }

  .name {
    margin-top: 0.62rem;
    font-size: 1.5rem;
    font-weight: 500;

    @include bp(md) {
      font-size: 1.875rem;
    }
  }

  .properties {
    margin-top: 0.62rem;
    font-size: 1rem;

    @include bp(md) {
      margin-top: 0.5rem;
      font-size: 1.125rem;
    }
  }

  .price {
    margin-top: 1.87rem;
    font-size: 1.25rem;
    color: $colorAccent;

    @include bp(md) {
      font-size: 1.5rem;
    }
  }

  .count-controls {
    margin-top: 0.62rem;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    & > span {
      font-size: 1.75rem;

      cursor: pointer;
    }
  }

  button {
    margin-top: 0.62rem;
    width: 100%;
    padding: 0.91rem 0;

    @include bp(md) {
      padding: 1.31rem 0;
    }
  }
}
</style>
