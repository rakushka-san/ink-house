import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useReproductionStore } from '@/stores/ReproductionStore'

import type { IOrderElement } from '@/models/OrderElement'
import type { IReproduction } from '@/models/Reproduction'

export const useOrderStore = defineStore('orderStore', () => {
  const reproductionStore = useReproductionStore()

  const orderElements = ref<IOrderElement[]>([])
  const isAddToCartOpen = ref(false)
  const isCreateOrderOpen = ref(false)
  const addingReproduction = ref<IReproduction | null>(null)

  function openAddToCart(id: string) {
    addingReproduction.value = reproductionStore.reproductions?.find(
      (reproduction) => reproduction._id === id
    ) as IReproduction
    isAddToCartOpen.value = true
  }

  function closeAddToCart() {
    isAddToCartOpen.value = false
  }

  function openCreateOrder() {
    isCreateOrderOpen.value = true
  }

  function closeCreateOrder() {
    isCreateOrderOpen.value = false
  }

  function addToCart(newOrderElement: IOrderElement) {
    const index = orderElements.value.findIndex(
      (orderElement) =>
        orderElement.reproduction === newOrderElement.reproduction &&
        orderElement.size === newOrderElement.size &&
        orderElement.method === newOrderElement.method
    )
    if (index !== -1) {
      orderElements.value[index].count += newOrderElement.count
    } else {
      orderElements.value.push(newOrderElement)
    }

    isAddToCartOpen.value = false
  }

  function deleteFromCart(id: string) {
    const index = orderElements.value.findIndex(
      (orderElement) => orderElement.reproduction._id === id
    )
    orderElements.value.splice(index, 1)
  }

  return {
    orderElements,
    isAddToCartOpen,
    isCreateOrderOpen,
    addingReproduction,
    openAddToCart,
    closeAddToCart,
    openCreateOrder,
    closeCreateOrder,
    addToCart,
    deleteFromCart
  }
})
