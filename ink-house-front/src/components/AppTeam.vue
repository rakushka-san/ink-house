<template>
  <section>
    <div class="container">
      <div class="row middle-xs">
        <div class="col-xs-12 col-sm-9 col-lg-5">
          <img src="./../assets/img/team.jpg" alt="Team image" class="main-image" />
        </div>
        <div class="content col-xs-12 col-lg-7">
          <h2>Наша команда</h2>
          <p>
            Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет
            оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы
            вынуждены отталкиваться от того, что консультация с широким активом.
          </p>
          <div class="team">
            <img src="./../assets/img/team1.jpg" alt="Team member image" />
            <img src="./../assets/img/team2.jpg" alt="Team member image" />
            <img src="./../assets/img/team3.jpg" alt="Team member image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './../assets/scss/grid/mixins';

section {
  padding: 3.69rem 0 5.87rem;

  @include bp(sm) {
    padding: 3.12rem 0;
  }

  @include bp(md) {
    padding: 4.37rem 0;
  }
}

.main-image {
  display: block;
  width: 100%;
  aspect-ratio: 145 / 143;
}

.content {
  margin-top: 1.88rem;

  @include bp(md) {
    margin-top: 2.5rem;
  }

  @include bp(lg) {
    margin-top: 4.94rem;
  }
}

h2 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 110%;

  @include bp(md) {
    font-size: 1.875rem;
  }

  @include bp(lg) {
    font-size: 2.5rem;
  }
}

p {
  margin-top: 1.25rem;
  line-height: 140%;

  @include bp(md) {
    margin-top: 1.87rem;
    font-size: 1.125rem;
    line-height: 150%;
  }

  @include bp(lg) {
    margin-top: 1.25rem;
  }
}

.team {
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;

  @include bp(sm) {
    justify-content: flex-start;
  }

  @include bp(md) {
    margin-top: 1.87rem;
  }

  @include bp(lg) {
    margin-top: 1.25rem;
  }

  img {
    display: block;
    width: 5rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;

    &:first-of-type {
      margin-left: 0;
    }

    @include bp(sm) {
      margin-left: 1.87rem;
    }
  }
}
</style>
