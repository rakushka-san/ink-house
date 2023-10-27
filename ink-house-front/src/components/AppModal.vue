<template>
  <div class="modal-background" @click="close"></div>
  <div class="modal">
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()

function close() {
  emit('close')
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  background-color: $colorPrimary;
  padding: 1.25rem 1.25rem 1.88rem;
}

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 4;

  background-color: $colorBlack;
  opacity: 0.4;
}
</style>
