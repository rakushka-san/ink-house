<template>
  <div class="hidden-lg">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-5">
            <AppLogo />
          </div>

          <div class="phone column col-xs-7">
            <div>
              <h4>+7 (999) 543-54-54</h4>
              <p>Мастерская</p>
            </div>
          </div>
          <div class="countries column col-xs-5 col-sm-4 col-md-3">
            <h4>Репродукции</h4>
            <a
              href="#"
              class="silent"
              v-for="country in reproductionStore.countries"
              :key="country"
              @click.prevent="selectCountryAndScroll(country)"
              >{{ country }}</a
            >
          </div>
          <div class="years column col-xs-7 col-sm-4 col-md-3">
            <div>
              <h4>Новинки</h4>
              <a
                href="#"
                class="silent"
                v-for="year in reproductionStore.years"
                :key="year"
                @click.prevent="selectYearAndScroll(year)"
                >{{ year }}</a
              >
            </div>
          </div>
          <div class="team column col-xs-5 col-sm-4 col-md-3">
            <h4>О нас</h4>
            <a href="#" class="silent" @click.prevent="scrollToTeam">Художники</a>
            <a href="#" class="silent" @click.prevent="scrollToTeam">Менеджеры</a>
          </div>

          <div class="end col-xs-12 col-md-3">
            <div class="socials">
              <a href="facebook.com"><img src="./../assets/img/fb.svg" alt="Facebook link" /></a>
              <a href="instagram.com"><img src="./../assets/img/ig.svg" alt="Instagram link" /></a>
              <a href="youtube.com"><img src="./../assets/img/yt.svg" alt="Youtube link" /></a>
            </div>
            <p class="copyright">Ink. House ® All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>

  <div class="hidden-xs visible-lg">
    <footer>
      <div class="container">
        <div class="row between-lg">
          <div class="col-lg-3">
            <AppLogo />
            <div class="phone column">
              <div>
                <h4>+7 (999) 543-54-54</h4>
                <p>Мастерская</p>
              </div>
            </div>
          </div>

          <div class="countries column col-lg-2">
            <h4>Репродукции</h4>
            <a
              href="#"
              class="silent"
              v-for="country in reproductionStore.countries"
              :key="country"
              @click.prevent="selectCountryAndScroll(country)"
              >{{ country }}</a
            >
          </div>
          <div class="years column col-lg-2">
            <div>
              <h4>Новинки</h4>
              <a
                href="#"
                class="silent"
                v-for="year in reproductionStore.years"
                :key="year"
                @click.prevent="selectYearAndScroll(year)"
                >{{ year }}</a
              >
            </div>
          </div>
          <div class="team column col-lg-2">
            <h4>О нас</h4>
            <a href="#" class="silent" @click.prevent="scrollToTeam">Художники</a>
            <a href="#" class="silent" @click.prevent="scrollToTeam">Менеджеры</a>
          </div>

          <div class="end col-lg-2">
            <div class="socials">
              <a href="https://facebook.com"
                ><img src="./../assets/img/fb.svg" alt="Facebook link"
              /></a>
              <a href="https://instagram.com"
                ><img src="./../assets/img/ig.svg" alt="Instagram link"
              /></a>
              <a href="https://youtube.com"
                ><img src="./../assets/img/yt.svg" alt="Youtube link"
              /></a>
            </div>
            <p class="copyright">Ink. House ® All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import { useReproductionStore } from '@/stores/ReproductionStore'

const reproductionStore = useReproductionStore()

const emit = defineEmits<{
  (e: 'scrollToTeam'): void
  (e: 'scrollToReproductions'): void
}>()

function scrollToTeam() {
  emit('scrollToTeam')
}

function scrollToReproductions() {
  emit('scrollToReproductions')
}

function selectCountryAndScroll(country: string) {
  reproductionStore.selectCountry(country)
  scrollToReproductions()
}

function selectYearAndScroll(year: number) {
  reproductionStore.selectYear(year)
  scrollToReproductions()
}
</script>

<style lang="scss" scoped>
footer {
  padding: 1.25rem 0;
  background-color: $colorPrimary;

  @include bp(sm) {
    padding: 1.44rem 0;
  }
}

.column {
  margin-top: 1.25rem;
  a {
    display: block;
    margin-top: 0.38rem;
    line-height: 150%;

    @include bp(md) {
      font-size: 1.125rem;
    }
  }

  @include bp(sm) {
    margin-top: 1.87rem;
  }

  @include bp(lg) {
    margin-top: 0;
  }
}

.phone,
.countries {
  h4 {
    font-size: 1rem;

    @include bp(sm) {
      font-size: 1.25rem;
    }
  }
}

.years,
.team {
  h4 {
    font-size: 1.25rem;
  }
}

.phone {
  @include bp(sm) {
    display: flex;
    justify-content: flex-end;
    margin-top: 0;
  }

  @include bp(lg) {
    display: flex;
    justify-content: flex-start;
    margin-top: 2.56rem;
  }
  p {
    margin-top: 0.5rem;
    color: $colorSilent;

    @include bp(md) {
      font-size: 1.125rem;
    }
  }
}

.end {
  border-top: 1px solid $colorGray;
  margin-top: 1.25rem;
  padding-top: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include bp(sm) {
    margin-top: 1rem;
    padding-top: 1rem;
  }

  @include bp(md) {
    justify-content: flex-start;
    align-items: flex-start;
    border-top: none;
    margin-top: 1.87rem;
    padding-top: 0;
  }

  @include bp(lg) {
    margin-top: 0;
  }
}

.socials {
  a {
    margin-left: 1.87rem;

    &:first-of-type {
      margin-left: 0;
    }
  }
}

.copyright {
  margin-top: 0.62rem;
  font-size: 0.75rem;
  line-height: 120%;
  color: $colorSilent;
}
</style>
