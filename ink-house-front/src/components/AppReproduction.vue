<template>
  <div class="card">
    <img src="./../assets/img/reproduction-placeholder.jpeg" alt="Reproduction image" />
    <p class="author">Марсель Руссо</p>
    <h3 class="name">Охота Амура</h3>
    <p class="properties">Холст, масло (50х80)</p>
    <p class="price">14500 руб</p>
    <button class="primary-btn">В корзину</button>
  </div>
</template>

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
