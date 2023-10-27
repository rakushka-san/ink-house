<template>
  <AppModal @close="orderStore.closeAddToCart">
    <div class="container">
      <div class="row middle-xs">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <div class="card">
            <img :src="API_URL + orderStore.addingReproduction?.imgSrc" alt="Reproduction image" />
            <p class="author">{{ orderStore.addingReproduction?.author }}</p>
            <h3 class="name">{{ orderStore.addingReproduction?.name }}</h3>
            <p class="price">{{ orderStore.addingReproduction?.price }} руб</p>
          </div>
        </div>
        <div class="col-xs-12 col-lg-6 config">
          <h3>Способ изготовления:</h3>
          <div class="options">
            <div class="option">
              <input
                type="radio"
                id="methodOption1"
                name="method"
                value="Холст, масло"
                v-model="method"
              />
              <label for="methodOption1">Холст, масло</label>
            </div>

            <div class="option">
              <input
                type="radio"
                id="methodOption2"
                name="method"
                value="Акрил, бумага"
                v-model="method"
              />
              <label for="methodOption2">Акрил, бумага</label>
            </div>

            <div class="option">
              <input
                type="radio"
                id="methodOption3"
                name="method"
                value="Цветная литография"
                v-model="method"
              />
              <label for="methodOption3">Цветная литография</label>
            </div>
          </div>
          <h3>Размер:</h3>
          <div class="options">
            <div class="option">
              <input type="radio" id="sizeOption1" name="size" value="40x60 см" v-model="size" />
              <label for="sizeOption1">40x60 см</label>
            </div>

            <div class="option">
              <input type="radio" id="sizeOption2" name="size" value="50x80 см" v-model="size" />
              <label for="sizeOption2">50x80 см</label>
            </div>
          </div>
          <div class="count-controls">
            <span @click="decreaseCount">-</span>
            <p>{{ count }}</p>
            <span @click="increaseCount">+</span>
          </div>
          <button class="primary-btn" @click="addToCart">В корзину</button>
        </div>
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
import type { IOrderElement } from '@/models/OrderElement'
import type { IReproduction } from '@/models/Reproduction'
import AppModal from '@/components/AppModal.vue'
import { ref } from 'vue'

import { useOrderStore } from '@/stores/OrderStore'

const orderStore = useOrderStore()

const API_URL = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/`

const count = ref(1)
const size = ref('40x60 см')
const method = ref('Холст, масло')

function increaseCount() {
  count.value++
}

function decreaseCount() {
  if (count.value > 1) {
    count.value--
  }
}

function addToCart() {
  const orderElement: IOrderElement = {
    reproduction: orderStore.addingReproduction as IReproduction,
    size: size.value,
    method: method.value,
    count: count.value
  }

  orderStore.addToCart(orderElement)
}
</script>

<style lang="scss" scoped>
.count-controls {
  margin-top: 0.62rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & > span {
    font-size: 1.75rem;

    cursor: pointer;
  }
}

.options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
}

.option {
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 1rem;

  @include bp(md) {
    font-size: 1.125rem;
  }

  input {
    appearance: none;

    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    aspect-ratio: 1 / 1;

    border: 2px solid $colorSilent;
    transition: 0.2s all linear;
    outline: none;

    &:checked {
      border: 6px solid $colorAccent;
    }
  }
}

h3 {
  font-size: 1.5rem;
  font-weight: 500;

  @include bp(md) {
    font-size: 1.875rem;
  }
}

.card {
  width: 100%;
  height: 100%;

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
  }

  .price {
    margin-top: 1.87rem;
    font-size: 1.25rem;
    color: $colorAccent;

    @include bp(md) {
      font-size: 1.5rem;
    }
  }
}

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
