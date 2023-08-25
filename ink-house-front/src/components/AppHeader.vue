<template>
  <div class="hidden-sm">
    <header>
      <div class="top">
        <div class="container">
          <div class="row middle-xs center-xs">
            <AppLogo />
          </div>
        </div>
      </div>

      <div v-if="!isMenuVisible" class="container">
        <div class="row between-xs middle-xs">
          <div class="col-xs-6">
            <img src="./../assets/img/list.svg" alt="Menu" @click="openMenu" />
          </div>
          <div class="col-xs-6 cart">
            <AppCart :items-in-cart="itemsInCart" />
            <!-- <img src="./../assets/img/shopping-cart.svg" alt="Cart" /> -->
          </div>
        </div>
      </div>

      <div v-else class="container">
        <div class="row middle-xs">
          <div class="col-xs-6">
            <img src="./../assets/img/cross.svg" alt="Close menu" @click="closeMenu" />
          </div>
        </div>
        <nav class="row">
          <a href="#" class="col-xs-12">Репродукции</a>
          <a href="#" class="col-xs-12">Новинки</a>
          <a href="#" class="col-xs-12">О нас</a>
        </nav>
      </div>
    </header>
  </div>

  <div class="hidden-xs visible-sm hidden-md">
    <header>
      <div class="container">
        <div class="row middle-xs center-xs">
          <AppLogo />
        </div>
        <nav class="row between-xs middle-xs">
          <div class="col-sm-10">
            <a href="#">Репродукции</a>
            <a href="#">Новинки</a>
            <a href="#">О нас</a>
          </div>
          <div class="col-sm-2 cart">
            <a href="#">
              <AppCart :items-in-cart="itemsInCart" />
              <!-- <img src="./../assets/img/shopping-cart.svg" alt="Cart" /> -->
            </a>
          </div>
        </nav>
      </div>
    </header>
  </div>

  <div class="hidden-xs visible-md">
    <header>
      <div class="container">
        <div class="row between-md middle-md">
          <div class="col-md-3 col-lg-2">
            <AppLogo />
          </div>
          <nav class="col-md-9 col-lg-6">
            <a href="#">Репродукции</a>
            <a href="#">Новинки</a>
            <a href="#">О нас</a>
            <a href="#">
              <AppCart :items-in-cart="itemsInCart" />
              <!-- <img src="./../assets/img/shopping-cart.svg" alt="Cart" /> -->
            </a>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import AppLogo from './AppLogo.vue'
import AppCart from './AppCart.vue'
import { ref } from 'vue'

interface Props {
  itemsInCart: number
}

defineProps<Props>()

const isMenuVisible = ref(false)

function openMenu(): void {
  isMenuVisible.value = true
}

function closeMenu(): void {
  isMenuVisible.value = false
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/colors';
@import './../assets/scss/grid/mixins';

header {
  background-color: $colorPrimary;

  @include bp(xs) {
    padding: 0;

    .row {
      padding: 1rem 0;
    }

    .top {
      background-color: $colorAbsoluteWhite;
    }
  }

  @include bp(sm) {
    nav {
      border-top: 1px solid $colorGray;
    }
  }

  @include bp(md) {
    padding: 2rem 0;

    .row {
      padding: 0;
    }

    nav {
      border-top: none;
    }
  }
}

nav {
  a {
    font-size: 1.125rem;

    @include bp(lg) {
      font-size: 1.25rem;
    }

    @include bp(xs) {
      margin-top: 3.12rem;

      &:first-of-type {
        margin-top: 0.88rem;
      }
    }

    @include bp(sm) {
      margin-top: 0;
      margin-left: 3.75rem;

      &:first-of-type {
        margin-top: 0;
        margin-left: 0;
      }
    }
  }

  @include bp(md) {
    display: flex;
    justify-content: flex-end;
  }
}

.cart {
  display: flex;
  justify-content: flex-end;
}
</style>
