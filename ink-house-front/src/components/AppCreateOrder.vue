<template>
  <AppModal @close="orderStore.closeCreateOrder">
    <div class="modal">
      <div class="container">
        <div class="row inputs-container">
          <div class="col-xs-12 input-element">
            <label for="customerName">Введите имя:</label>
            <input type="text" name="customerName" id="customerName" v-model="customerName" />
          </div>
          <div class="col-xs-12 input-element">
            <label for="customerSurname">Введите фамилию:</label>
            <input
              type="text"
              name="customerSurname"
              id="customerSurname"
              v-model="customerSurname"
            />
          </div>
          <div class="col-xs-12 input-element">
            <label for="phoneNumber">Введите номер телефона:</label>
            <input type="text" name="phoneNumber" id="phoneNumber" v-model="phoneNumber" />
          </div>
          <div class="col-xs-12 input-element">
            <label for="shippingAddress">Введите адрес доставки:</label>
            <input
              type="text"
              name="shippingAddress"
              id="shippingAddress"
              v-model="shippingAddress"
            />
          </div>
        </div>
        <div class="row center-xs">
          <p class="error" v-if="validationError">Введите корректные данные</p>
        </div>
        <div class="row center-xs">
          <button class="primary-btn" @click="createOrder">Оформить заказ</button>
        </div>
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/AppModal.vue'
import { ref } from 'vue'

import { useOrderStore } from '@/stores/OrderStore'

const orderStore = useOrderStore()

const customerName = ref('')
const customerSurname = ref('')
const phoneNumber = ref('')
const shippingAddress = ref('')

const validationError = ref(false)

function validate() {
  if (customerName.value.trim().length === 0) {
    return false
  }

  if (customerSurname.value.trim().length === 0) {
    return false
  }

  const phoneNumberRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
  if (!phoneNumberRegExp.test(phoneNumber.value)) {
    return false
  }

  if (shippingAddress.value.trim().length === 0) {
    return false
  }

  return true
}

function createOrder() {
  if (!validate()) {
    validationError.value = true
    return
  }

  validationError.value = false

  orderStore.createOrder(
    customerName.value,
    customerSurname.value,
    phoneNumber.value,
    shippingAddress.value
  )

  customerName.value = ''
  customerSurname.value = ''
  phoneNumber.value = ''
  shippingAddress.value = ''
  orderStore.orderElements = []
  orderStore.closeCreateOrder()
}
</script>

<style lang="scss" scoped>
.modal {
  width: 12.5rem;

  @include bp(sm) {
    width: 15.625rem;
  }

  @include bp(md) {
    width: 18.125rem;
  }

  @include bp(lg) {
    width: 19.375rem;
  }
}

.inputs-container {
  gap: 1rem;
}

.error {
  margin-top: 1.25rem;
  color: $colorError;
  text-align: center;

  font-size: 1rem;

  @include bp(md) {
    font-size: 1.125rem;
  }
}

.input-element {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 1rem;

  @include bp(md) {
    font-size: 1.125rem;
  }

  input {
    font-size: 1.125rem;
    padding: 0.62rem 1.25rem;
    border-radius: 0.25rem;
    border: none;
  }
}

button {
  margin-top: 1.25rem;
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
