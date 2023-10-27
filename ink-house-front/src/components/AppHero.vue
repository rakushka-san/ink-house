<template>
  <section>
    <div class="container">
      <div class="row middle-xs">
        <img
          src="./../assets/img/bird.jpg"
          alt="Bird image"
          class="col-sm-5 col-md-6 hidden-xs visible-sm"
        />
        <div class="col-xs-12 col-sm-7 col-md-6">
          <h1>Реплики картин от <span>Ink. House</span></h1>
          <p>
            Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения,
            доступные цены.
          </p>
          <button class="primary-btn" @click="scrollToReproductions">Продукция</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'scrollToReproductions'): void
}>()

function scrollToReproductions() {
  emit('scrollToReproductions')
}
</script>

<style lang="scss" scoped>
section {
  padding-top: 3.75rem;

  @include bp(sm) {
    padding-top: 3.13rem 0;
  }

  @include bp(md) {
    padding: 0;
  }
}

h1 {
  font-size: 1.875rem;
  font-weight: 500;

  span {
    color: $colorAccent;
  }

  @include bp(sm) {
    font-size: 2.25rem;
  }

  @include bp(md) {
    font-size: 2.5rem;
  }

  @include bp(lg) {
    font-size: 3.75rem;
    line-height: 4.125rem;
  }
}

p {
  margin-top: 1.25rem;
  font-size: 0.875rem;
  line-height: 150%;

  color: $colorSilent;

  @include bp(sm) {
    margin-top: 0.62rem;
    font-size: 1rem;
  }

  @include bp(md) {
    margin-top: 1.25rem;
    font-size: 1.125rem;
  }
}

button {
  margin-top: 2.5rem;
  padding: 0.91rem 1.81rem;

  @include bp(sm) {
    margin-top: 0.69rem;
    padding: 0.91rem 2.56rem;
  }

  @include bp(md) {
    font-size: 1.25rem;
    margin-top: 2.5rem;
    padding: 1.16rem 3.22rem;
  }

  @include bp(lg) {
    margin-top: 3.75rem;
    padding: 1.31rem 3.75rem;
  }
}
</style>
