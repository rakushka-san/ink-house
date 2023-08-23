<template>
  <section>
    <div class="container">
      <div class="row">
        <header class="col-xs-12 col-sm-9 col-md-8 col-lg-6">
          <img src="./../assets/img/news-icon.svg" alt="News icon" />
          <h2>Новая коллекция французских авторов</h2>
        </header>
      </div>

      <div class="row">
        <p class="col-xs-12 col-lg-6">
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям,
          которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных
          ограничений. Принимая во внимание показатели успешности, граница обучения кадров
          предопределяет высокую востребованность направлений прогрессивного развития.
        </p>
      </div>

      <div class="row">
        <button class="col-xs-12 promo-btn">Ознакомиться</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './../assets/scss/colors';
@import './../assets/scss/grid/mixins';

section {
  padding: 3.12rem 0;

  background:
    linear-gradient(to right, rgba(13, 43, 67, 0.8), rgba(13, 43, 67, 0)),
    center / cover no-repeat url(./../assets/img/news-placeholder.jpg);

  @include bp(md) {
    padding: 4.38rem 0;
  }
}

header {
  display: flex;
  align-items: flex-start;

  img {
    width: 3.125rem;
    height: 3.125rem;

    @include bp(md) {
      width: 3.75rem;
      height: 3.75rem;
    }

    @include bp(lg) {
      width: 5rem;
      height: 5rem;
    }
  }

  h2 {
    margin-left: 0.62rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: $colorWhite;

    @include bp(sm) {
      margin-left: 1.25rem;
    }

    @include bp(md) {
      font-size: 1.875rem;
    }

    @include bp(lg) {
      font-size: 2.5rem;
    }
  }
}

p {
  margin-top: 1.25rem;
  font-size: 1rem;
  line-height: 140%;
  color: $colorAbsoluteWhite;

  @include bp(md) {
    margin-top: 1.87rem;
    font-size: 1.125rem;
    line-height: 150%;
  }
}

button {
  margin-top: 1.87rem;
  padding: 0.91rem 0;
  @include bp(sm) {
    width: auto;
    margin-top: 1.25rem;
    padding: 0.91rem 2.19rem;
  }

  @include bp(md) {
    margin-top: 1.87rem;
    padding: 1.16rem 2.28rem;
  }

  @include bp(lg) {
    margin-top: 3.75rem;
    padding: 1.25rem 3.75rem;
  }
}
</style>
