<template>
  <div class="card">
    <img :src="API_URL + reproduction.imgSrc" alt="Reproduction image" />
    <p class="author">{{ reproduction.author }}</p>
    <h3 class="name">{{ reproduction.name }}</h3>
    <p class="properties">{{ reproduction.properties }}</p>
    <p class="price">{{ reproduction.price }} руб</p>
    <button class="primary-btn" @click="addToCart(reproduction._id)">В корзину</button>
  </div>
</template>

<script setup lang="ts">
import type { IReproduction } from '@/models/Reproduction'

interface Props {
  reproduction: IReproduction
}

defineProps<Props>()

const API_URL = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/`

const emit = defineEmits<{
  (e: 'addToCart', value: string): void
}>()

function addToCart(id: string) {
  emit('addToCart', id)
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/colors';
@import './../assets/scss/grid/mixins';
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
