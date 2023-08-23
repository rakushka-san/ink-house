<template>
  <div class="logo">
    <img src="./../assets/img/logo.svg" alt="Logo" />
    <span>Ink. House</span>
  </div>
</template>

<style lang="scss" scoped>
@import './../assets/scss/colors';
.logo {
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
    color: $colorAccent;
    font-size: 1.25rem;
    font-weight: 700;
  }
}
</style>
